// frontend/src/pages/Home.jsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import BottomNav from "../components/layout/BottomNav";
import SocialPostCard from "../components/SocialPostCard";
import "./Home.css";

const posts = [
  {
    id: 1,
    user: {
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/100?img=15",
      username: "@janedoe",
    },
    content: "Exploring new creative designs! #designerlife",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    likes: 123,
    comments: 14,
  },

  {
    id: 2,
    user: {
      name: "John Roe",
      avatar: "https://i.pravatar.cc/100?img=20",
      username: "@johnroe",
    },
    content: "Sunsets & good vibes ☀️🌅 #weekendmood",
    image:
      "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=80",
    likes: 58,
    comments: 6,
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* <TopNav /> */}
      <main className="feed-container" role="main" aria-label="Social media feed">
        {posts.map((post) => (
          <SocialPostCard key={post.id} post={post} />
        ))}
      </main>
      <BottomNav />
    </div>
  );
}
