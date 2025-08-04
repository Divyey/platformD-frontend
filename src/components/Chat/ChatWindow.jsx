import React from "react";
import ChatInput from "./ChatInput";

// Dummy messages for demonstration
const MESSAGES = [
  { id: 1, fromMe: false, text: "Hey! Are you coming tonight?", time: "08:50" },
  { id: 2, fromMe: true, text: "Yes, see you at 8!", time: "08:52" },
];

export default function ChatWindow({ user }) {
  return (
    <section className="chat-main">
      <div className="chat-header">
        {user ? (
          <>
            <img src={user.avatar} alt={user.name} className="chat-avatar-small" />
            <span className="chat-open-username">{user.name}</span>
          </>
        ) : (
          <span className="chat-header-placeholder">Select a user to start chatting</span>
        )}
      </div>
      <div className="chat-messages-pane">
        {!user && (
          <div className="chat-placeholder">
            <span>Select a user to view messages</span>
          </div>
        )}
        {user && (
          <div>
            {MESSAGES.map(msg => (
              <div key={msg.id} className={`chat-msg-bubble${msg.fromMe ? " me" : ""}`}>
                <span>{msg.text}</span>
                <div className="chat-msg-meta">{msg.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ChatInput disabled={!user} />
    </section>
  );
}
