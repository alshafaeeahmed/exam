# User Management System

This is a full-stack user management application built with Express.js (backend) and Angular (frontend) that utilizes JSONPlaceholder API for user data.

## Project Structure

```
exam/
├── server/          # Express.js backend
├── client/          # Angular frontend
│   └── user-management/
└── README.md        # This file
```

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation & Setup

### 1. Clone/Download the project
```bash
cd exam
```

### 2. Setup Backend (Server)
```bash
cd server
npm install
```

### 3. Setup Frontend (Client)
```bash
cd ../client/user-management
npm install
```

## Running the Application

### Option 1: Run Both Services Manually

#### Start the Backend Server (Terminal 1)
```bash
cd server
npm start
```
The server will run on: `http://localhost:3000`

#### Start the Frontend Client (Terminal 2)
```bash
cd client/user-management
ng serve
```
The client will run on: `http://localhost:4200`

### Option 2: Quick Start (Run from project root)

#### Start Backend
```bash
cd server && npm start
```

#### Start Frontend (in new terminal)
```bash
cd client/user-management && ng serve
```

## Using the Application

1. **Open your browser** and go to: `http://localhost:4200`
2. **View Users**: The application will automatically load users from JSONPlaceholder API
3. **Add User**: Click "Add New User" button to create a new user
4. **Edit User**: Click "Edit" button on any user card
5. **Delete User**: Click "Delete" button on any user card
6. **Validation**: Required fields (Name, Username, Email, Phone) are validated

## API Endpoints

- `GET /users` - Get all users from JSONPlaceholder

## Technologies Used

### Backend
- Express.js
- Axios (HTTP client)
- CORS middleware

### Frontend
- Angular 20+
- TypeScript
- Angular Forms (Template-driven)
- HTTP Client
- Responsive CSS

## Troubleshooting

### Server won't start
- Make sure port 3000 is not in use
- Check if all dependencies are installed: `npm install`

### Client won't start
- Make sure Angular CLI is installed: `npm install -g @angular/cli`
- Check if all dependencies are installed: `npm install`
- Make sure port 4200 is not in use

### CORS Errors
- Make sure the backend server is running on port 3000
- The server has CORS enabled for all origins

## Development

### Server Development Mode (with auto-restart)
```bash
cd server
npm run dev
```

### Client Development Mode (default)
```bash
cd client/user-management
ng serve
```

## Building for Production

### Build Frontend
```bash
cd client/user-management
ng build
```

Built files will be in `client/user-management/dist/`