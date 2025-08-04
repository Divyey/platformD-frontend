import React, { useState } from "react";

export default function ChatInput({ disabled }) {
  const [msg, setMsg] = useState("");

  const handleSend = e => {
    e.preventDefault();
    if (!msg.trim() || disabled) return;
    // TODO: Send the message to the backend or socket
    setMsg("");
  };

  return (
    <form className="chat-input-bar" onSubmit={handleSend}>
      <input
        className="chat-input"
        placeholder={disabled ? "Select a chat to start messaging..." : "Type a message…"}
        value={msg}
        onChange={e => setMsg(e.target.value)}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !msg.trim()} className="chat-send-btn">
        <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z"/></svg>
      </button>
    </form>
  );
}
