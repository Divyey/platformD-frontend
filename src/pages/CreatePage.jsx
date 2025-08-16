import { useState } from "react";
import CreateCommunityForm from "../components/CreateCommunityForm";
import CreateEventForm from "../components/CreateEventForm";

export default function CreatePage() {
  const [choice, setChoice] = useState("");

  return (
    <div className="create-container">
      <h2>Create</h2>
      <div className="create-choice-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setChoice("community")}>Create Community</button>
        <button onClick={() => setChoice("event")}>Create Event</button>
      </div>
      {choice === "community" && <CreateCommunityForm />}
      {choice === "event" && <CreateEventForm />}
    </div>
  );
}
