import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1em', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
