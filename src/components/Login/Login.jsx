import React, { useState } from "react";
import s from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.message == "Login successful!") {
        navigate("/personalPage");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error("Error:", error);
    }
    setLoading(false);
  }

  return (
    <div className={s.loginCard}>
      <div className={s.loginHeader}>
        <h2 className={s.loginTitle}>Welcome Back</h2>
        <p className={s.loginSubtitle}>Sign in to track your career journey</p>
      </div>

      <form className={s.loginForm}>
        <div className={s.inputGroup}>
          <label className={s.inputLabel}>Username</label>
          <div className={s.inputWrapper}>
            <input
              type="username"
              className={s.input}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className={s.inputIcon}>
              <svg
                className={s.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={s.inputGroup}>
          <label className={s.inputLabel}>Password</label>
          <div className={s.inputWrapper}>
            <input
              type="password"
              className={s.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={s.inputIcon}>
              <svg
                className={s.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={s.formOptions}>
          <label className={s.checkboxLabel}>
            <input type="checkbox" className={s.checkbox} />
            <span>Remember me</span>
          </label>
          <a href="#" className={s.forgotLink}>
            Forgot password?
          </a>
        </div>

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <CircularProgress size={30} />
          </div>
        )}

        <button onClick={handleSubmit} type="submit" className={s.loginButton}>
          Sign In
        </button>
        {message && <p>{message}</p>}

        <div className={s.signupLink}>
          <p>
            Don't have an account? <a href="/register">Sign up for free</a>
          </p>
        </div>
      </form>
    </div>
  );
}
