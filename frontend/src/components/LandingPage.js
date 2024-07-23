import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const LandingPage = () => {
  const token = localStorage.getItem('token');

  // Redirect to login page if no token is found
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to the Assessment Application!</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;