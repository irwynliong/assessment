import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import './Login.css'; // Your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // This replaces useHistory

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform the login logic here
    console.log('Login with:', email, password);
    // Redirect to the dashboard or relevant page on successful login
    navigate('/dashboard'); // Example of how to navigate on successful login
  };

  const navigateToHome = () => {
    navigate('/'); // This replaces history.push('/')
  };

  return (
    <div className="login-page">
      <button onClick={navigateToHome} className="back-arrow">
        ←
      </button>
      <div className="login-container">
        <div className="login-form">
          <img src="./images/sign.svg" alt="logo" className="logo2" />
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
          <div className="login-links">
            <a href="#">Forgot your password?</a>
            <a href="#">Don't have an account? Request Access</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
