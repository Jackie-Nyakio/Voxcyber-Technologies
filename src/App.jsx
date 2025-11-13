import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import NewInStore from "./sections/NewInStore";
import InfoSection from "./sections/InfoSection";
import AllProducts from "./sections/AllProducts";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/layout/Footer";
import AuthForm from "./Frontend/AuthForm";
import Dashboard from "./Frontend/Dashboard";

function App() {
  // Check if the user is logged in by seeing if a token exists
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="w-full h-full">
              <Header />
              <Hero />
              <About />
              <NewInStore />
              <InfoSection />
              <AllProducts />
              <Testimonials />
              
              {/* Login / Signup Buttons (just before footer) */}
              <div className="flex justify-center gap-4 my-10">
                <a
                  href="/auth"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </a>
                <a
                  href="/auth"
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  Sign Up
                </a>
              </div>

              <Footer />
            </div>
          }
        />

        {/* Authentication Page */}
        <Route path="/auth" element={<AuthForm />} />

        {/* Protected Dashboard Page */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
