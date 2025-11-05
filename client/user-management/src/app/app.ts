import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  users: User[] = [];
  showForm = false;
  editMode = false;
  currentUser: User = this.getEmptyUser();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => this.users = users,
      error: (error) => console.error('Error loading users:', error)
    });
  }

  showAddForm() {
    this.showForm = true;
    this.editMode = false;
    this.currentUser = this.getEmptyUser();
  }

  editUser(user: User) {
    this.showForm = true;
    this.editMode = true;
    this.currentUser = { ...user };
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }

  saveUser() {
    if (this.isValidUser(this.currentUser)) {
      if (this.editMode) {
        const index = this.users.findIndex(u => u.id === this.currentUser.id);
        if (index !== -1) {
          this.users[index] = { ...this.currentUser };
        }
      } else {
        this.currentUser.id = Math.max(...this.users.map(u => u.id)) + 1;
        this.users.push({ ...this.currentUser });
      }
      this.cancelForm();
    }
  }

  cancelForm() {
    this.showForm = false;
    this.currentUser = this.getEmptyUser();
  }

  isValidUser(user: User): boolean {
    return !!(user.name && user.username && user.email && user.phone);
  }

  private getEmptyUser(): User {
    return {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' }
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    };
  }
}
