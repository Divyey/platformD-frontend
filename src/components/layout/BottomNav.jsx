// frontend/src/components/layout/BottomNav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiPlusCircle,
  FiVideo,
  FiUser,
} from "react-icons/fi";
import "./layout.css";

const links = [
  { to: "/", label: "Home", icon: <FiHome /> },
  { to: "/search", label: "Search", icon: <FiSearch /> },
  { to: "/create", label: "Create", icon: <FiPlusCircle /> },
  { to: "/videos", label: "Videos", icon: <FiVideo /> },
  { to: "/profile", label: "Profile", icon: <FiUser /> },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Footer Navigation">
      {links.map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to}
          aria-current={location.pathname === to ? "page" : undefined}
          title={label}
          className={`bottom-nav-link ${
            location.pathname === to ? "active" : ""
          }`}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
}
