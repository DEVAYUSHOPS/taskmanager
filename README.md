# Task Manager App

A full-stack MERN (MongoDB, Express, React, Node.js) task manager with user authentication, task CRUD, status toggling, and a modern dashboard UI.

---

## 🌐 Live Demo

[View Live Site](https://ayushtaskmanagerapp.netlify.app/)

---

## 🚀 Features

- **User authentication:** Register and login with JWT.
- **Task management:** Create, read, update, delete tasks.
- **Status toggle:** Switch task status (backlog, in-progress, done).
- **Redux state management:** For robust frontend state.
- **Responsive UI:** Works on desktop and mobile.
- **Modern dashboard:** Clean, intuitive interface.

---

## 📂 Folder Structure

task-manager/
├── server/ # Express + MongoDB backend│
├── config/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
└── README.md


---

## 🛠️ Setup Instructions

### 1. **Clone the repository**

git clone https://github.com/your-username/task-manager.git
cd task-manager


### 2. **Backend Setup**

cd server
npm install


- Create a `.env` file in the `server/` directory:

MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret
PORT=5000


- Start the backend server:
node server.js


### 3. **Frontend Setup**

cd ../client
npm install
npm install react-toastify
npm start


- The app will open at [http://localhost:3000](http://localhost:3000).

---

## 🖥️ Screenshots

![image](https://github.com/user-attachments/assets/44323cb7-9ae5-4b9a-9502-32509cbf49d3)
![image](https://github.com/user-attachments/assets/50fe9e91-9ad0-4cf7-adf3-671e46f846f9)
![image](https://github.com/user-attachments/assets/5252cfbe-6c9d-4311-8125-b7ac6ac33feb)


---

## 📋 API Documentation

All API endpoints require `Authorization: Bearer <token>` except for `/api/auth/*`.

### **Authentication**

| Method | Route                | Body                        | Response        |
|--------|----------------------|-----------------------------|-----------------|
| POST   | `/api/auth/register` | `{ email, password }`       | `{ token }`     |
| POST   | `/api/auth/login`    | `{ email, password }`       | `{ token }`     |

### **Task Management**

| Method | Route                       | Body / Params                      | Description                |
|--------|-----------------------------|------------------------------------|----------------------------|
| GET    | `/api/tasks`                | —                                  | Get all tasks for user     |
| POST   | `/api/tasks`                | `{ title, description }`           | Add a new task             |
| PUT    | `/api/tasks/:id`            | `{ title, description, status }`   | Update a task              |
| PATCH  | `/api/tasks/:id/status`     | —                                  | Toggle task status         |
| DELETE | `/api/tasks/:id`            | —                                  | Delete a task              |

---

## 🧪 Example API Request

**Register a new user:**
POST /api/auth/register
Content-Type: application/json

{
"email": "user@example.com",
"password": "user123"
}


**Get all tasks:**
GET /api/tasks
Authorization: Bearer <token>


---

## 💡 Tech Stack

- **Frontend:** React, Redux Toolkit, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Styling:** CSS (responsive, modern dashboard)

---

## 🏗️ Deployment

- You can deploy the backend to [Render](https://render.com/) or [Heroku](https://heroku.com/).
- Deploy the frontend to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
- Update the frontend `proxy` or API URLs for production.

- [![Netlify Status](https://api.netlify.com/api/v1/badges/5c4c16cc-2b9f-4986-aee0-4b8b2727da5a/deploy-status)](https://app.netlify.com/projects/ayushtaskmanagerapp/deploys)

---

## 📞 Contact

For questions or support, open an issue or email [ayush.tesla@gmail.com](mailto:ayush.tesla@gmail.com).

---

**Happy coding! 🚀**
