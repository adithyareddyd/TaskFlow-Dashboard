# TaskFlow Dashboard 🚀

A modern, full-stack **Task Management Dashboard** built using a **monorepo architecture**.  
The application supports real-time CRUD operations, persistent storage with MongoDB, and a clean, intuitive UI for managing daily tasks efficiently.

🔗 **Live Demo:** Coming Soon  
📦 **Repository:** https://github.com/adithyareddyd/TaskFlow-Dashboard

---

## 📋 Table of Contents

- Overview  
- Features  
- Tech Stack  
- Architecture  
- Getting Started  
- API Documentation  
- Project Structure  
- Environment Variables  
- Future Enhancements  

---

## 🎯 Overview

**TaskFlow Dashboard** is a full-stack task management application designed to demonstrate best practices in:

- RESTful API design
- Frontend–backend separation
- Monorepo project structure
- MongoDB data persistence
- Real-world CRUD workflows

## ✨ Features

- ✅ Full CRUD Operations (Create, Read, Update, Delete tasks)
- 📊 Task Statistics (Total, Completed, Pending)
- 💾 Persistent Storage using MongoDB Atlas
- 🔄 Real-time UI updates
- 🎨 Clean & Responsive UI
- ⚡ Fast performance with Next.js
- 🔐 RESTful backend APIs using Express.js

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **State Management:** React Hooks

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Dev Tool:** Nodemon

### Development Tools
- Git & GitHub
- Thunder Client / Postman

---

## 🏗️ Architecture
┌─────────────────┐
│   Frontend      │
│   (Next.js)     │
└────────┬────────┘
         │ HTTP/REST
         ↓
┌─────────────────┐
│   Backend       │
│   (Express.js)  │
└────────┬────────┘
         │ Mongoose
         ↓
┌─────────────────┐
│   Database      │
│ (MongoDB Atlas) │
└─────────────────┘

The application follows a client-server architecture with clear separation of concerns:

Frontend handles UI rendering and user interactions
Backend manages business logic and data validation
Database provides persistent data storage

🚀 Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v16.0.0 or higher)
npm or yarn
MongoDB Atlas Account (free tier works)
Git

Installation

Clone the repository

bash   git clone https://github.com/adithyareddyd/TaskFlow-Dashboard.git
   cd TaskFlow-Dashboard

Set up the Backend

bash   cd backend
   npm install

Configure Environment Variables
Create a .env file in the backend/ directory:

env   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development

Start the Backend Server

bash   npm run dev
Server runs on http://localhost:5000

Set up the Frontend
Open a new terminal:

bash   cd frontend
   npm install

Configure Frontend Environment
Create a .env.local file in the frontend/ directory:

env   NEXT_PUBLIC_API_URL=http://localhost:5000/api

Start the Frontend

bash   npm run dev
Application runs on http://localhost:3000

📡 API Documentation
Base URL
http://localhost:5000/api
Endpoints
Get All Tasks
httpGET /tasks
Response:
json[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "completed": false,
    "createdAt": "2024-01-04T10:30:00.000Z"
  }
]
Create Task
httpPOST /tasks
Content-Type: application/json

{
  "title": "New task title",
  "completed": false
}
Update Task
httpPUT /tasks/:id
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
Delete Task
httpDELETE /tasks/:id

📁 Project Structure
TaskFlow-Dashboard/
│
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js  # Business logic
│   ├── models/
│   │   └── Task.js            # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js      # API routes
│   ├── server.js              # Entry point
│   ├── .env                   # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.js        # Main page
│   │   │   └── layout.js      # Root layout
│   │   ├── components/
│   │   │   ├── TaskList.js    # Task display
│   │   │   ├── TaskForm.js    # Add task form
│   │   │   └── Stats.js       # Statistics
│   │   └── utils/
│   │       └── api.js         # Axios configuration
│   ├── public/
│   ├── .env.local
│   └── package.json
│
└── README.md

🔐 Environment Variables
Backend (.env)
envPORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskflow
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
Frontend (.env.local)
envNEXT_PUBLIC_API_URL=http://localhost:5000/api

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request


📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Adithya Reddy D

GitHub: @adithyareddyd
