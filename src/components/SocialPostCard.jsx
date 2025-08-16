
// frontend/src/components/SocialPostCard.jsx
import React from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
// import "./SocialPostCard.css";
import "../pages/Home.css"; // Assuming styles are in Home.css

export default function SocialPostCard({ post }) {
  return (
    <article className="post-card" tabIndex="0" aria-label={`Post by ${post.user.name}`}>
      <header className="post-header">
        <img
          src={post.user.avatar}
          alt={`${post.user.name} avatar`}
          className="post-avatar"
          width="48"
          height="48"
          loading="lazy"
        />
        <div>
          <h3 className="post-user-name">{post.user.name}</h3>
          <p className="post-user-username">{post.user.username}</p>
        </div>
      </header>
      <p className="post-content">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post image"
          className="post-image"
          loading="lazy"
        />
      )}
      <footer className="post-footer" aria-label="Post engagement">
        <button aria-label={`${post.likes} likes`} className="post-action-btn">
          <FiHeart /> <span>{post.likes}</span>
        </button>
        <button aria-label={`${post.comments} comments`} className="post-action-btn">
          <FiMessageCircle /> <span>{post.comments}</span>
        </button>
      </footer>
    </article>
  );
}
