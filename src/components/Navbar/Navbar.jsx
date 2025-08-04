import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer';
import './Navbar.css';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  // State to control dropdown open/close with delay to avoid flicker
  const [drawerOpen, setDrawerOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Open dropdown immediately and clear any existing close timeout
  const openDrawer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDrawerOpen(true);
  };

  // Close dropdown after a short delay (e.g., 250ms)
  const closeDrawerWithDelay = () => {
    timeoutRef.current = setTimeout(() => {
      setDrawerOpen(false);
    }, 250);
  };

  // Cleanup timeout on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Search input state
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Placeholder search submit handler — replace with real logic
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // TODO: Replace with actual navigation or search API call
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Get the first letter of username or fallback to "U"
  // Trim username to be safe and uppercase the initial
  const userInitial = user?.username?.trim()?.[0]?.toUpperCase() || "U";

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Left section: Logo and company name */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo-link" aria-label="Company Home">
          <svg
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#2563eb"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="6" ry="6" fill="#2563eb" />
            <text
              x="15"
              y="21"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
              fontFamily="Verdana, sans-serif"
              pointerEvents="none"
            >
              P
            </text>
          </svg>
          <span className="company-name">PlatformD</span>
        </Link>
      </div>

      {/* Center section: Search bar */}
      <div className="navbar-center">
        <form
          onSubmit={handleSearchSubmit}
          className="search-form"
          role="search"
          aria-label="Search events"
        >
          <input
            type="search"
            aria-label="Search events by name or place"
            placeholder="Search events by name or place"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
            autoComplete="off"
            spellCheck={false}
          />
          <button type="submit" className="search-button" aria-label="Submit search">
            🔍
          </button>
        </form>
      </div>

      {/* Right section: Organise, Messages, Profile Icon with dropdown */}
      <div className="navbar-right">
        <Link to="/organise" className="navbar-link organise-link" tabIndex={0}>
          Organise
        </Link>

        <Link to="/messages" className="navbar-link messages-link" aria-label="Messages" tabIndex={0}>
          <svg
            aria-hidden="true"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </Link>

        {/* Profile avatar and dropdown */}
        <div
          className="profile-icon"
          onMouseEnter={openDrawer}
          onMouseLeave={closeDrawerWithDelay}
          onFocus={openDrawer}     // keyboard accessibility
          onBlur={closeDrawerWithDelay} // keyboard accessibility
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={drawerOpen}
        >
          {/* Show initial letter in circle */}
          <div
            className="avatar-img avatar-initial"
            aria-label={`User: ${user?.username || 'User'}`}
          >
            {userInitial}
          </div>

          {drawerOpen && <ProfileDrawer onSignOut={handleLogout} />}
        </div>
      </div>
    </nav>
  );
}
