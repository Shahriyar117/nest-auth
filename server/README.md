# NestJS Authentication API

This is a NestJS application that provides authentication endpoints using MongoDB as the database. It includes the following features:

- User registration and login
- JWT-based authentication
- Protected routes
- Custom exception handling
- Logging using Winston

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Protected Routes](#protected-routes)
- [Exception Handling](#exception-handling)
- [Logging](#logging)
- [Testing](#testing)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:

   ```bash
   touch .env
   ```

   Add the following variables to the `.env` file:

   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

## Running the Application

1. Start the MongoDB server.

2. Run the NestJS application:
   ```bash
   npm run start:dev
   ```

The application should be running at `http://localhost:3000`.

## API Endpoints

### User Registration

- **URL:** `/auth/signup`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example",
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "username": "example",
    "email": "example@example.com",
    "id": "user-id"
  }
  ```

### User Login

- **URL:** `/auth/signin`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "jwt-token"
  }
  ```

## Protected Routes

### Get Welcome

- **URL:** `/`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <jwt-token>
  ```
- **Response:**
  ```json
  {
    "Welcome example"
  }
  ```

## Exception Handling

Custom exception handling is implemented using `HttpExceptionFilter`. This filter catches all exceptions and logs the error details using Winston.

## Logging

Logging is set up using Winston. Logs are saved to `logs/error.log` for errors and `logs/app.log` for all logs. The logger configuration is set up in `main.ts`.

## Testing

To run the tests:

```bash
npm run test
```
