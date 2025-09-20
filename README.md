# BED_3_JWTAuthentication_ARITHMATRIX

```markdown
## Task 3 – JWT Authentication & Role-Based Access Control

This project is part of my **ArithMatrix Backend Development Internship**.  
It demonstrates a **user authentication system** using **JWT (JSON Web Tokens)** and **role-based access control** (RBAC) with Node.js, Express, and MongoDB.

---

## Features

- User Registration with secure password hashing
- User Login with JWT token authentication
- Protected routes accessible only to logged-in users
- Admin-only routes for role-based access control
- Token expiry handling
- Input validation and error handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- JWT (JSON Web Token)
- bcryptjs (for password hashing)
- dotenv (for environment variables)

---

## Project Structure

```

BE\_3\_JWTAuthentication\_ARITHMATRIX/
│── models/
│   └── User.js
│── routes/
│   ├── auth.js
│   └── protected.js
│── middleware/
│   └── auth.js
│── config/
│   └── db.js
│── server.js
│── .env
│── package.json
│── README.md

````

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd BE_3_JWTAuthentication_ARITHMATRIX
````

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in root directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=3600s
PORT=5000
```

4. **Start the server**

```bash
npm run dev
```

Server should start on `http://localhost:5000` and connect to MongoDB.

---

## API Endpoints

### 1. Register User

* **POST** `/api/auth/register`
* **Body (JSON):**

```json
{
  "name": "Swathi",
  "email": "swathi@example.com",
  "password": "123456",
  "role": "admin"
}
```

### 2. Login User

* **POST** `/api/auth/login`
* **Body (JSON):**

```json
{
  "email": "swathi@example.com",
  "password": "123456"
}
```

### 3. Protected Route

* **GET** `/api/protected`
* **Headers:**

```
Authorization: Bearer <token>
```

* **Response Example:**

```json
{
  "message": "Access granted to protected route",
  "user": {
    "id": "64fabc12345...",
    "role": "admin"
  }
}
```

### 4. Admin-only Route

* **GET** `/api/auth/admin`
* **Headers:**

```
Authorization: Bearer <admin-token>
```

* **Response Example (Admin):**

```json
{
  "message": "Welcome Admin!",
  "user": {
    "id": "64fabc12345...",
    "role": "admin"
  }
}
```

* **Response Example (Non-admin):**

```json
{
  "message": "Access denied: Admins only"
}
```



## Author

**Swathi Gurijala**
Backend Development Intern – ArithMatrix Technologies


```
