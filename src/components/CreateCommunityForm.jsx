import { useState } from "react";
import { createCommunity } from "../api/community";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateCommunityForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCommunity({ name, description });
      message.success("Community created!");
      navigate("/"); // Optionally, navigate to communities list or detail
    } catch (err) {
        console.log(err);
      message.error("Failed to create community.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-container">
      <h2>Create Community</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Community Name"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Create</button>
    </form>
  );
}
