import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-circle">▲</div>
        </div>
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>EMAIL</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label>PASSWORD</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;