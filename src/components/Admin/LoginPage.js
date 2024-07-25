import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import "./LoginPage.css"; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
      
    });

    console.log(response.data)

    if (response.data.message === 'Login successful') {
    setMessage('Great! Your login was successful!');
    history.push('/locations');
    } else {
      setMessage("Oops! Login failed. Please try again.");
    }
    setUsername("");
    setPassword("");
  } catch (error) {
    console.error("Login error:", error);
    setMessage("Oops! Login failed. Please try again.");
  }
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
