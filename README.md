# Notes Management System

## 📌 Overview

This is a full-stack Notes Management System built using React, Node.js, Express, and MongoDB.
The application allows users to create, edit, delete, search, and manage notes efficiently.

---

## 🚀 Features

### Core Features

* Create Notes
* View All Notes
* Edit Notes
* Delete Notes
* Search Notes
* Sort by Recently Updated
* View Note Details
* Validation (Title required)

### ⭐ Bonus Features

* Tags / Categories
* Pin / Unpin Notes
* Auto-save (Edit mode)
* Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📁 Folder Structure

```
notes-management-system
├── backend
├── frontend
├── screenshots
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

### 2️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🔗 API Endpoints

* GET `/api/notes`
* POST `/api/notes`
* PUT `/api/notes/:id`
* DELETE `/api/notes/:id`
* GET `/api/notes/search?q=`

---

## 📸 Screenshots

### Home Page

![Home](screenshots/home.png)

### Create Note

![Create](screenshots/create.png)

### Pinned Note

![Pin](screenshots/pin.png)

### Search Feature

![Search](screenshots/search.png)

### Tags Feature

![Tags](screenshots/tags.png)

---

## 📦 How to Run Project

1. Start Backend
2. Start Frontend
3. Open browser:

```
http://localhost:3000
```

---

## 👨‍💻 Author

**Tejas Pichad**

---

## ✅ Notes

* Project follows proper folder structure
* Clean UI with basic styling
* All required features implemented
* Bonus features included