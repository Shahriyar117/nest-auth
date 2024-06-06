# React Application

## Overview

This is a React application that includes login and signup functionalities with protected routes. The application manages authentication state using React Context.

## Components

### LoginForm

- This component renders the login form.
- It handles user input and form submission to log in the user.

### SignupForm

- This component renders the signup form.
- It handles user input and form submission to register a new user.

## Pages

### Login

- This page contains the `LoginForm` component.
- Route: `/login`

### Signup

- This page contains the `SignupForm` component.
- Route: `/signup`

### Home

- This page contains the `Welcome to the application.`
- Route: `/`

## Context

### AuthContext

- This context manages the authentication state of the user.
- It provides methods to log in and log out, and holds the current user's information.

## Utilities

### ProtectedRoute

- A higher-order component that wraps around routes that should only be accessible to authenticated users.
- If the user is not authenticated, it redirects to the login page.

### AppRoute

- This component sets up the main routing logic for the application.
- It includes both public and protected routes.

## App

- The main application component that initializes the `AppRoute` component.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   cd client
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
   REACT_APP_BASE_URL=<server-uri>
   ```

## Running the Application

1. Run the React application:
   ```bash
   npm start
   ```
