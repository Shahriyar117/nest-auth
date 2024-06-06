# Full Stack Authentication System

## Overview

This project consists of a React application for the frontend and a NestJS application for the backend, providing a full stack authentication system with MongoDB as the database and JWT for authentication.

## React Application

### Components

- **LoginForm:** Renders the login form, handles user input, and form submission.
- **SignupForm:** Renders the signup form, handles user input, and form submission.

### Pages

- **Login:** Contains the `LoginForm` component. Route: `/login`
- **Signup:** Contains the `SignupForm` component. Route: `/signup`
- **Home:** Contains a welcome message. Route: `/`

### Context

- **AuthContext:** Manages the authentication state of the user, provides methods for signup, login and logout, and holds the current user's information.

### Utilities

- **ProtectedRoute:** A higher-order component that wraps around routes accessible only to authenticated users, redirecting to the login page if not authenticated.
- **AppRoute:** Sets up the main routing logic for the application, including public and protected routes.

### App

- Initializes the `AppRoute` component.

## NestJS Authentication API

### Features

- User registration and login.
- JWT-based authentication.
- Protected routes.
- Custom exception handling.
- Logging using Winston.

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables by creating a .env file in the server directory:
   ```bash
   cd server
   touch .env
   ```
   - Add the following variables to the .env file:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
4. Set up environment variables by creating a .env file in the client directory:
   ```bash
   cd client
   touch .env
   ```
   - Add the following variables to the .env file:
     ```env
     REACT_APP_BASE_URL=<server-uri>
     ```
5. Running the Application
   - Start the MongoDB server.
   - Run the NestJS application (backend):
     ```bash
     cd server
     npm run start:dev
     ```
   - Run the React application (frontend):
     ```bash
     cd client
     npm start
     ```
6. Testing
   - Run tests for the NestJS application
     ```bash
     cd server
     npm run test
     ```
