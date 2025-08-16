import React from "react";
import { FiInstagram } from "react-icons/fi"; // Instagram-inspired icon (or use FiHome, FiHeart, etc.)
import { FiSearch, FiHeart, FiMessageCircle } from "react-icons/fi";
import "./layout.css";

export default function TopNav() {
  return (
    <header className="top-nav" role="banner" aria-label="Primary Navigation">
      <div className="nav-left">
        {/* Use icon directly */}
        <FiInstagram className="logo" aria-label="PlatformD logo" />
      </div>
      <div className="nav-right" role="search">
        <button aria-label="Search" className="icon-btn">
          <FiSearch />
        </button>
        <button aria-label="Likes" className="icon-btn">
          <FiHeart />
        </button>
        <button aria-label="Messages" className="icon-btn">
          <FiMessageCircle />
        </button>
      </div>
    </header>
  );
}
