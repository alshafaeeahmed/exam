# JSONPlaceholder Users API Server

This Express.js server utilizes the JSONPlaceholder `/users` endpoint to provide a comprehensive API for user data management.

## Features

- Fetch all users from JSONPlaceholder
- Get specific user by ID
- Search users by city
- Search users by company
- Search users by name or username
- Error handling and validation
- CORS enabled for frontend integration

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server info and available endpoints |
| GET | `/health` | Health check |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| GET | `/api/users/city/:city` | Get users by city |
| GET | `/api/users/company/:company` | Get users by company |
| GET | `/api/users/search/:query` | Search users by name/username |

## Example Requests

### Get all users
```
GET http://localhost:3000/api/users
```

### Get user by ID
```
GET http://localhost:3000/api/users/1
```

### Search users by city
```
GET http://localhost:3000/api/users/city/Gwenborough
```

### Search users by company
```
GET http://localhost:3000/api/users/company/Romaguera
```

### Search users by name
```
GET http://localhost:3000/api/users/search/Leanne
```

## Response Format

All responses follow this format:
```json
{
  "success": true/false,
  "data": [...], // Array of users or single user
  "count": 10, // Number of results (when applicable)
  "message": "Success/Error message"
}
```

## Technologies Used

- Express.js
- Axios for HTTP requests
- CORS for cross-origin requests
- Nodemon for development

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)