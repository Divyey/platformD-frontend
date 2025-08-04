import React, { useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatWindow from "./ChatWindow";
import "./Chat.css";

// For demo, keep dummy users/messages here or move to context/API later
export default function ChatLayout() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-root">
      <ChatUserList selectedUser={selectedUser} onSelectUser={setSelectedUser} />
      <ChatWindow user={selectedUser} />
    </div>
  );
}
