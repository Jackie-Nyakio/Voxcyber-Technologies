# VoxCyber Technologies Web Application

A modern **full-stack web platform** designed to provide a seamless user experience — starting from an elegant **landing page**, through secure **signup/login**, and into a personalized **dashboard**.  
The system is built using **React (frontend)**, **Node.js/Express (backend)**, and **MongoDB (database)**.



## Landing Page Overview

The landing page serves as the **entry point** to the platform — showcasing VoxCyber’s services and sections like:

- **Header** – Navigation bar for quick access to site sections.  
- **Hero Section** – Main introduction and brand presentation.  
- **About Section** – Information about the company and mission.  
- **New In Store** – Highlights of latest projects or technologies.  
- **Info Section** – Key statistics or updates.  
- **All Products Section** – Lists services or products offered.  
- **Testimonials** – Feedback from users or partners.  
- **Authentication Buttons** – Login / Sign Up buttons located just above the footer.  
- **Footer** – Company details, copyright, and contact info.

The landing page is fully responsive and styled with **TailwindCSS**.



## Authentication System

Users can:
- **Sign Up** for a new account with email & password confirmation.  
- **Log In** securely using JWT-based authentication.  
- Receive **real-time feedback** (success/error messages).  

### Backend Authentication Flow
1. User submits credentials to `http://localhost:5000/api/register` or `/api/login`.
2. Passwords are hashed using **bcrypt.js**.
3. Upon login, a **JWT token** is generated and stored in the browser.
4. This token grants access to the protected **Dashboard**.

### Security Features
- Passwords are never stored in plain text.
- Tokens expire automatically after 1 hour.
- Environment variables (.env) hide sensitive data.



## Dashboard

After successful login, the user is redirected to a personalized **Dashboard**:

- Displays a welcome message with the user’s email.  
- Confirms that authentication succeeded.  
- Provides a clear **Logout** button.  
- Prevents access if the user is not logged in (redirects to `/auth`).  

The dashboard uses localStorage to verify active sessions and ensures users cannot access it directly without logging in.



## Logout Functionality

When a user clicks **Logout**:
1. The stored JWT token is removed from localStorage.  
2. The user is redirected back to the **Landing Page** (`/`).  

This ensures sessions are properly cleared for security.



## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + Vite + TailwindCSS |
| **Routing** | React Router DOM |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JWT + bcrypt.js |
| **Environment Config** | dotenv |



## Folder Structure

```

Voxcyber-Technologies/
│
├── src/
│   ├── Backend/
│   │   ├── Server.js         # Express server + routes
│   │   ├── User.js           # Mongoose user schema
│   │   └── .env              # Environment variables (ignored)
│   │
│   ├── Frontend/
│   │   ├── AuthForm.jsx      # Signup & login page
│   │   └── Dashboard.jsx     # User dashboard
│   │
│   ├── components/
│   │   └── layout/           # Header, Footer
│   │
│   ├── sections/             # Hero, About, Products, etc.
│   └── App.jsx               # Main routing file
│
├── package.json
└── README.md

````



## Environment Setup

1️⃣ **Install Dependencies**

```bash
npm install
cd src/Backend
npm install
````

2️⃣ **Setup `.env` in `src/Backend/`**

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0
JWT_SECRET=voxcyber_secret
PORT=5000
```

3️⃣ **Run Servers**

Frontend:

```bash
npm run dev
```

Backend:

```bash
cd src/Backend
npm start
```

Then open [http://localhost:5173](http://localhost:5173)



## User Flow Summary

| Step | Action                  | Outcome                                |
| ---- | ----------------------- | -------------------------------------- |
| 1️⃣  | Visit landing page      | View VoxCyber homepage                 |
| 2️⃣  | Click “Login / Sign Up” | Redirects to `/auth`                   |
| 3️⃣  | Register or login       | Authenticated via JWT                  |
| 4️⃣  | Redirect to Dashboard   | Personalized welcome screen            |
| 5️⃣  | Click “Logout”          | Session cleared → Back to landing page |



## Future Enhancements

* Add password reset and recovery
* Admin dashboard for managing users
* Improved analytics and user activity logs
* Dark mode interface



## Developer

**Jackline Waweru**
Built with React, Node.js, and MongoDB
© 2025 VoxCyber Technologies. All Rights Reserved.



## License

This project is released under the **MIT License** – free to use, modify, and distribute.

```

