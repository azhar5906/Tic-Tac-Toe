import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login validation (you can replace this with your backend API call)
    if (username === "user" && password === "password") {
      onLogin(); // Notify parent component
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  const handleFocus = (setValue) => {
    setValue("");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Here</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label className="input-label">Username:</label>
          <input
            type="text"
            value={username}
            onFocus={() => handleFocus(setUsername)}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password:</label>
          <input
            type="password"
            value={password}
            onFocus={() => handleFocus(setPassword)}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
