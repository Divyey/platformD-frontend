import React from 'react';
import './ProfileDrawer.css';
import { Link } from 'react-router-dom';

export default function ProfileDrawer({ onSignOut }) {
  return (
    <div className="profile-drawer" role="menu" aria-label="Profile options">
      <Link to="/profile" className="drawer-link" role="menuitem" tabIndex={-1}>
        Profile
      </Link>
      <button className="drawer-link" role="menuitem" onClick={onSignOut} tabIndex={-1}>
        Sign Out
      </button>
    </div>
  );
}
