# 📚 Book Tracker API

A RESTful API built with **Node.js**, **Express**, and **SQLite** that allows users to track books and leave reviews. Designed with a clean, feature-based architecture and follows REST best practices.

---

## 🚀 Live Demo

> Run locally by following the setup instructions below.

---

## 🛠️ Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Runtime environment             |
| Express.js | Web framework                   |
| SQLite3    | Database                        |
| Knex.js    | Query builder & migrations      |
| Nodemon    | Development auto-reload         |
| dotenv     | Environment variable management |

---

## 📁 Project Structure

```
book-tracker/
├── api/
│   ├── books/
│   │   ├── books-router.js       # Books endpoints
│   │   ├── books-model.js        # Books database queries
│   │   └── books-middleware.js   # Books validation middleware
│   ├── users/
│   │   ├── users-router.js       # Users endpoints
│   │   ├── users-model.js        # Users database queries
│   │   └── users-middleware.js   # Users validation middleware
│   ├── reviews/
│   │   ├── reviews-router.js     # Reviews endpoints
│   │   ├── reviews-model.js      # Reviews database queries
│   │   └── reviews-middleware.js # Reviews validation middleware
│   └── server.js                 # Express app configuration
├── data/
│   ├── migrations/               # Database schema migrations
│   ├── seeds/                    # Seed data
│   └── db-config.js              # Knex database connection
├── .env                          # Environment variables (not committed)
├── .gitignore
├── index.js                      # Entry point
├── knexfile.js                   # Knex configuration
└── package.json
```

---

## 🗄️ Database Schema

### users

| Column   | Type         | Constraints                 |
| -------- | ------------ | --------------------------- |
| id       | integer      | PRIMARY KEY, AUTO INCREMENT |
| username | varchar(255) | NOT NULL, UNIQUE            |
| email    | varchar(255) | NOT NULL, UNIQUE            |

### books

| Column    | Type         | Constraints                 |
| --------- | ------------ | --------------------------- |
| id        | integer      | PRIMARY KEY, AUTO INCREMENT |
| book_name | varchar(255) | NOT NULL                    |
| author    | varchar(255) | NOT NULL                    |
| genre     | varchar(255) | NOT NULL                    |

### reviews

| Column  | Type         | Constraints                 |
| ------- | ------------ | --------------------------- |
| id      | integer      | PRIMARY KEY, AUTO INCREMENT |
| comment | varchar(255) | NOT NULL                    |
| user_id | integer      | NOT NULL, FK → users.id     |
| book_id | integer      | NOT NULL, FK → books.id     |

> Both `user_id` and `book_id` use `ON DELETE CASCADE` — deleting a user or book will automatically remove their associated reviews.

---

## 📡 API Endpoints

### Books

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/books`     | Get all books           |
| GET    | `/api/books/:id` | Get a single book by ID |
| POST   | `/api/books`     | Create a new book       |
| DELETE | `/api/books/:id` | Delete a book by ID     |

#### POST `/api/books` — Request Body

```json
{
  "book_name": "1984",
  "author": "George Orwell",
  "genre": "Dystopia"
}
```

---

### Users

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/users`     | Get all users           |
| GET    | `/api/users/:id` | Get a single user by ID |
| POST   | `/api/users`     | Create a new user       |
| DELETE | `/api/users/:id` | Delete a user by ID     |

#### POST `/api/users` — Request Body

```json
{
  "username": "johndoe",
  "email": "john@example.com"
}
```

---

### Reviews

| Method | Endpoint                     | Description                         |
| ------ | ---------------------------- | ----------------------------------- |
| GET    | `/api/reviews`               | Get all reviews                     |
| GET    | `/api/reviews/book/:book_id` | Get all reviews for a specific book |
| POST   | `/api/reviews`               | Create a new review                 |
| DELETE | `/api/reviews/:id`           | Delete a review by ID               |

#### POST `/api/reviews` — Request Body

```json
{
  "comment": "An absolute masterpiece!",
  "user_id": 1,
  "book_id": 3
}
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js v18+
- npm

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/mertkaya20/book-tracker.git
cd book-tracker
```

**2. Install dependencies**

```bash
npm install
```

**3. Create environment file**

```bash
# Create a .env file in the root directory
PORT=5000
NODE_ENV=development
```

**4. Run database migrations**

```bash
knex migrate:latest
```

**5. Seed the database with sample data**

```bash
knex seed:run
```

**6. Start the development server**

```bash
npm run dev
```

The server will be running at `http://localhost:5000`

---

## 🔐 Environment Variables

| Variable   | Description                          | Default       |
| ---------- | ------------------------------------ | ------------- |
| `PORT`     | Port the server runs on              | `5000`        |
| `NODE_ENV` | Environment (development/production) | `development` |

---

## 🧪 Testing the API

You can test the API using [Postman](https://www.postman.com/) or any HTTP client.

**Example requests:**

```bash
# Get all books
GET http://localhost:5000/api/books

# Get a specific book
GET http://localhost:5000/api/books/1

# Create a new book
POST http://localhost:5000/api/books
Content-Type: application/json
{
  "book_name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic"
}

# Delete a book
DELETE http://localhost:5000/api/books/1
```

---

## 🏗️ Architecture Decisions

- **Feature-based folder structure** — Each resource (books, users, reviews) has its own folder containing its router, model, and middleware. This makes the codebase scalable and easy to navigate.
- **Middleware validation** — Input validation and ID existence checks are handled in dedicated middleware functions, keeping route handlers clean and focused.
- **Model layer** — All database queries are abstracted into model files, separating concerns and making the code easier to test and maintain.
- **Cascade deletes** — Foreign key constraints with `ON DELETE CASCADE` ensure referential integrity without manual cleanup.

---

## 📬 Contact

**Mert Kaya**

[![GitHub](https://img.shields.io/badge/GitHub-mertkaya20-181717?style=flat&logo=github)](https://github.com/mertkaya20)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-merttkaya20-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/merttkaya20/)

---

\*Built with ❤️
