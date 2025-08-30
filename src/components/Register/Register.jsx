import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import s from "./Register.module.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Header />
      <section className={s.registerSection}>
        <div className={s.loginCard}>
          <form className={s.loginForm}>
            <label className={s.inputLabel}>Registration</label>
            <div className={s.inputGroup}>
              <div className={s.inputWrapper}>
                <input
                  type="name"
                  className={s.input}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                      d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className={s.inputGroup}>
              <div className={s.inputWrapper}>
                <input
                  type="email"
                  className={s.input}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                      d="M16 12H8m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className={s.inputGroup}>
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

            <button
              onClick={handleSubmit}
              type="submit"
              className={s.loginButton}
            >
              Sign In
            </button>
            {message && <p>{message}</p>}

            <div className={s.signupLink}>
              <p>
                Already have an account? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
