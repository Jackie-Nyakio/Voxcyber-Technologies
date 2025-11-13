# 🖥️ VOXCYBER Technologies — E-Commerce Platform

Welcome to **VOXCYBER Technologies**, a modern web application for browsing and purchasing quality tech gadgets and accessories.  
Built with **React + Tailwind CSS**, this project focuses on simplicity, performance, and clean UI consistency.

---

## 🚀 Overview

VOXCYBER Technologies is a responsive and modern tech e-commerce website that showcases products such as printers, earphones, desktops, and accessories.

### ✨ Core Features
- ✅ Landing page with product highlights and testimonials  
- 🛒 “All Products” section with interactive product cards  
- 🎨 Consistent spacing, colors, and typography across components  
- 🔒 Authentication system *(Login, Signup, and Logout — coming soon)*  
- 📱 Fully responsive design (mobile, tablet, desktop)

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React (Vite)** | Front-end framework |
| **Tailwind CSS** | Styling and layout |
| **React Router** | Navigation (for future auth pages) |
| **PropTypes** | Type safety for components |
| **Git + GitHub** | Version control and collaboration |

---

## 🗂️ Folder Structure

src/
├── assets/
│ └── images/ # Product and testimonial images
├── components/
│ ├── common/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ └── SectionWrapper.jsx
│ └── layout/
│ ├── Header.jsx
│ └── Footer.jsx
├── pages/
│ ├── Home.jsx # Landing page with Info, Testimonials, AllProducts
│ ├── AllProducts.jsx # Product grid page
│ └── Auth/ # (Login, Signup to be added)
└── App.jsx

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jackie-Nyakio/voxcyber-technologies.git
   cd voxcyber-technologies
Install dependencies
npm install

Run the development server
npm run dev

Open in your browser
Visit → http://localhost:5173

🎨 Tailwind Configuration
Color tokens defined in tailwind.config.cjs:
theme: {
  extend: {
    colors: {
      vox: {
        50: "#eff6ff",
        100: "#dbeafe",
        500: "#1d4ed8",  // main brand blue
        600: "#1e40af",
        700: "#1e3a8a",
      },
    },
  },
}


🧱 Reusable Components
| Component              | Purpose                                                |
| ---------------------- | ------------------------------------------------------ |
| **Button.jsx**         | Styled button variants for consistent actions          |
| **Card.jsx**           | Product card with image, price, and add-to-cart button |
| **SectionWrapper.jsx** | Enforces consistent section spacing                    |
| **AllProducts.jsx**    | Combines all reusable UI components                    |


🧠 Next Steps (Planned)
🔐 Implement Login / Signup / Logout (Firebase or Express backend)

🛍️ Add Cart & Checkout functionality

🧾 Product filtering & sorting

🌐 Deploy final version to Vercel or Netlify


🧾 Example Commit Suggestions
To maintain a clean commit history, use descriptive messages:
git add .
git commit -m "feat: add reusable Button and Card components"
git commit -m "style: standardize section spacing with SectionWrapper"
git commit -m "chore: update tailwind config with vox color palette"
git commit -m "docs: update README.md with setup instructions"
git push origin main

👩🏽‍💻 Author

Jackline Waweru
Frontend Developer — VOXCYBER Technologies
📍 Nairobi, Kenya
🔗 GitHub Profile

📄 License
This project is licensed under the MIT License — feel free to use and modify for educational or portfolio purposes.

“Innovation meets reliability — that’s VOXCYBER.”


---

### Then commit it properly:
```bash
git add README.md
git commit -m "docs: update complete README with setup and overview"
git push origin main

