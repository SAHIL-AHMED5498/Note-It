# 📓 NoteIt - Backend API

A simple **Node.js + Express + Sequelize** backend for managing notes.  
This project demonstrates industry-standard backend development practices including **RESTful APIs**, **Sequelize ORM**, and **MySQL database integration**.

---

## 🚀 Features
- Create, edit, delete, and view notes.
- View all notes with a single endpoint.
- Clear all notes from the database.
- Built with **Sequelize ORM** for clean database interactions.
- MySQL as the database engine.
- Express.js routing and modular structure.

---

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **Sequelize ORM** (Database ORM)
- **MySQL** (Relational Database)
- **Body-Parser** (Middleware for JSON parsing)

---


### 📌 Routes Overview

| File                  | Endpoint            | Method | Description            |
|-----------------------|---------------------|--------|------------------------|
| `routes/noteRoutes.js` | `/note/create`      | POST   | Create a new note      |
|                       | `/note/edit`        | PATCH  | Edit/update a note     |
|                       | `/note/delete/:id`  | DELETE | Delete a note by ID    |
|                       | `/note/view/:id`    | GET    | View a single note     |
|                       | `/note/viewAll`     | GET    | View all notes         |
|                       | `/note/clearAll`    | GET    | Delete all notes       |

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/noteit-backend.git
cd noteit-backend

