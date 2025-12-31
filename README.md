# Pastebin  – Full Stack MERN Application

A full‑stack Pastebin‑like web application built using **Vite + React** for the frontend and **Node.js + Express** for the backend. Users can create, share, and view text pastes via unique URLs.

---

## 🚀 Live Demo

* **Frontend (Vercel):** [https://pastebin-git-main-krishs-projects-047c2389.vercel.app/](https://pastebin-git-main-krishs-projects-047c2389.vercel.app/)
* **Backend (Render):** [https://pastebin-s77e.onrender.com/](https://pastebin-s77e.onrender.com/)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Fetch API
* Tailwind 

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* CORS
* dotenv

### Deployment

* Frontend: **Vercel**
* Backend: **Render**

---

## 📁 Project Structure

```
root/
│
├── frontend/          # Vite + React app
│   ├── src/
│   ├── vercel.json    # SPA rewrite config
│   └── package.json
│
├── backend/           # Express API
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ✨ Features

* Create text pastes
* Generate unique paste URLs
* View shared pastes
* Copy & share paste links
* REST API based backend
* Fully deployed (Frontend + Backend)

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend (`frontend/.env`)

```
VITE_API_BASE_URL=https:your_backend_url
```

---

## 🧪 Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/pastebin.git
cd pastebin
```

---

### 2️⃣ Run Backend

```bash
cd backend
npm install
node index.js
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🌍 Deployment Notes

### Backend (Render)

* Root directory: `backend`
* Build command: `npm install`
* Start command: `npm start`

### Frontend (Vercel)

* Root directory: `frontend`
* Framework: Vite
* Added `vercel.json` to fix SPA refresh 404 issue

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🧠 Common Issues Solved

* ❌ 404 on page refresh → ✅ Fixed using Vercel rewrites
* ❌ Invalid JSON error → Caused by HTML response from wrong API URL
* ❌ `/undefined/api/...` → Fixed by correct `VITE_API_BASE_URL`

---

## 📌 Future Improvements

* Paste expiration time
* Rate limiting

---

## 👨‍💻 Author

**Krish**
MERN Stack Developer

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to fork!
