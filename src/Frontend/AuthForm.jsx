import { useState } from "react";
import axios from "axios";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const url = isLogin
        ? "http://localhost:5000/api/login"
        : "http://localhost:5000/api/register";

      const payload = isLogin
        ? { email, password }
        : { email, password, confirmPassword };

      const res = await axios.post(url, payload);

      if (isLogin) {
        // ✅ Ensure token exists and store it
        const token = res.data.token;
        if (token) {
          localStorage.setItem("token", token);
          setMessage("Login successful! Redirecting...");

          // ✅ Navigate to dashboard
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1000);
        } else {
          setMessage("Login succeeded, but no token returned from server.");
        }
      } else {
        setMessage("Registration successful! You can now log in.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border mb-3 rounded"
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border mb-3 rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="mt-3 text-center text-sm text-gray-600">{message}</p>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-center text-blue-600 cursor-pointer"
        >
          {isLogin ? "Don’t have an account? Register" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}
