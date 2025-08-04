import React, { useState } from "react";
import ChatUserItem from "./ChatUserItem";

const users = [
  {
    id: 1,
    name: "Priya S.",
    avatar: "/avatar.png",
    lastMessage: "Hey! Are you coming tonight?",
    unreadCount: 2,
    muted: false,
    lastActiveTime: "08:52",
  },
  {
    id: 2,
    name: "Divyey",
    avatar: "/avatar.png",
    lastMessage: "Let’s meet at 7PM sharp.",
    unreadCount: 0,
    muted: true,
    lastActiveTime: "Yesterday",
  },
  {
    id: 3,
    name: "Aman",
    avatar: "/avatar.png",
    lastMessage: "Great job!",
    unreadCount: 1,
    muted: false,
    lastActiveTime: "07:32",
  },
];

export default function ChatUserList({ selectedUser, onSelectUser }) {
  const [query, setQuery] = useState("");
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <aside className="chat-sidebar">
      <div className="chat-search-wrap">
        <input
          className="chat-search"
          placeholder="Search users..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <span className="chat-search-icon">
          {/* Magnifier glass SVG */}
          <svg width="20" height="20" fill="#bbb" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 015.92 12.14l5 5a1 1 0 01-1.42 1.42l-5-5A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 104.77 8.36l.15-.14a5.5 5.5 0 00-4.92-8.22z"/></svg>
        </span>
      </div>
      <div className="chat-user-list">
        {filtered.length === 0 && <div className="chat-empty">No users found</div>}
        {filtered.map(user => (
          <ChatUserItem
            key={user.id}
            user={user}
            selected={selectedUser?.id === user.id}
            onClick={() => onSelectUser(user)}
          />
        ))}
      </div>
    </aside>
  );
}
