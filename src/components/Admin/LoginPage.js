import React, { useState } from "react";
import "./LoginPage.css"; // Import your CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., authentication)
    console.log(`Username: ${username}, Password: ${password}`);
    // Reset form fields after submission if needed
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
          className="login_logo"
          alt="logo"
        />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p> Forgot Password?</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
