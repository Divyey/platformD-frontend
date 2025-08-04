import React from "react";

export default function ChatUserItem({ user, selected, onClick }) {
  return (
    <div
      className={`chat-user-item${selected ? " selected" : ""}`}
      onClick={onClick}
      tabIndex={0}
      aria-selected={selected}
      role="button"
    >
      <img src={user.avatar} alt={user.name} className="chat-avatar" />
      <div className="chat-user-details">
        <div className="chat-user-row">
          <span className="chat-user-name">{user.name}</span>
          <span className="chat-last-msg-time">{user.lastActiveTime}</span>
          {user.unreadCount > 0 && (
            <span className="chat-unread">{user.unreadCount}</span>
          )}
          <span className="chat-mute-icon" title={user.muted ? "Muted" : "Notifications On"}>
            {user.muted ?
              (<svg width="16" height="16" fill="#bbb" viewBox="0 0 32 32">
                <path d="M16 3.2A7.8 7.8 0 0 1 23.8 11c0 3.9 2 6.1 5.3 9.5a1 1 0 0 1-.7 1.7H3.6a1 1 0 0 1-.7-1.7C6.2 17.1 8.2 14.9 8.2 11A7.8 7.8 0 0 1 16 3.2zm0 25a3.6 3.6 0 0 0 3.4-2.1h-6.8A3.6 3.6 0 0 0 16 28.2z"/>
              </svg>)
             :
              (<svg width="16" height="16" fill="#2563eb" viewBox="0 0 24 24">
                <path d="M12 2C7.03 2 3 6.03 3 11c0 2.86 1.11 5.45 2.93 7.43C6.22 19.02 6.92 20 8 20h8c1.08 0 1.78-.98 2.07-1.57C19.89 16.45 21 13.86 21 11c0-4.97-4.03-9-9-9zm1 16h-2v2h2v-2z"/>
              </svg>)
            }
          </span>
        </div>
        <div className="chat-user-msg">{user.lastMessage}</div>
      </div>
    </div>
  );
}
