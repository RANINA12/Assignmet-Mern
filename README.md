## Adimn Deploy link 
```
https://assignmetadminpanel.vercel.app/
```
## User Deploy link
```
https://assignmentflipr.vercel.app/
```
# 📦 MERN Assignment Project

This project is built using the **MERN stack** and contains **three separate applications**:

1. **Frontend** – React + Vite (Runs on port **3000**)
2. **Admin Panel** – React + Vite (Runs on port **4000**)
3. **Backend API** – Node.js + Express (Runs on port **5000**)

Each part is stored in a separate folder inside the repository.

---

## 📁 Folder Structure

```
project-root/
│
├── frontend/       → User-facing interface (React + Vite)
├── adminpanel/     → Admin dashboard (React + Vite)
└── backend/        → REST API (Node.js + Express + MongoDB)
```

---

# 🚀 Getting Started

## 1. **Download the Project**

You can download the repository as a `.zip` file:

```
Code → Download ZIP
```

Extract the project to your system.

---

# 📦 Install Dependencies

You must install dependencies **inside each folder**.

### 👉 Frontend

```bash
cd frontend
npm install
```

### 👉 Admin Panel

```bash
cd adminpanel
npm install
```

### 👉 Backend

```bash
cd backend
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder with the following variables:

```
MONGO_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
PORT=5000
```

You can replace the values with your own.

---

# ▶️ Running the Project

Open **three terminals** or run individually:

### 👉 Frontend (Port 5173)

```bash
cd frontend
npm run dev
```

### 👉 Admin Panel (Port 5174)

```bash
cd adminpanel
npm run dev
```

### 👉 Backend API (Port 5000)

```bash
cd backend
npm start
```

---

# 🗄️ Database

* The project uses **MongoDB Atlas**.
* You can replace the database URL with your own cluster for production.

---

# 🔐 Authentication

This project uses:

* **JWT Access Tokens**
* **Refresh Tokens**

Configure secrets inside your `.env` file.

---

# 📝 Notes

* You must add your own `.env` values after downloading.
* `node_modules` are ignored and must be installed manually.
* All three apps run independently and communicate through REST APIs.

---

# ✔️ Completed Setup

Once all apps are running successfully:

* Frontend available on → `http://localhost:5173`
* Admin panel on → `http://localhost:5174`
* Backend API on → `http://localhost:5000`

---

