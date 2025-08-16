import { useState, useEffect } from "react";
import { getCommunities } from "../api/community";
import { createEvent } from "../api/event";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateEventForm() {
  const [communities, setCommunities] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    event_time: "",
    location: "",
    mode: "online",
    category: "",
    subcategories: [""],
    banner_image_url: "",
    image_urls: [""],
    community_id: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCommunities() {
      try {
        const data = await getCommunities();
        setCommunities(data);
      } catch {
        message.error("Failed to load communities");
      }
    }
    fetchCommunities();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent({
        ...form,
        community_id: Number(form.community_id),
        subcategories: form.subcategories.filter(s => s.trim()),
        image_urls: form.image_urls.filter(i => i.trim()),
      });
      message.success("Event created!");
      navigate("/"); // Optionally, navigate to event detail
    } catch {
      message.error("Failed to create event.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-container">
      <h2>Create Event</h2>
      <select
        name="community_id"
        value={form.community_id}
        onChange={handleChange}
        required
      >
        <option value="">Select Community</option>
        {communities.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <input
        name="title"
        placeholder="Event Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Event Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <input
        name="event_date"
        type="date"
        value={form.event_date}
        onChange={handleChange}
        required
      />

      <input
        name="event_time"
        type="time"
        value={form.event_time}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
      />

      <select name="mode" value={form.mode} onChange={handleChange}>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="both">Both</option>
      </select>

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />

      {/* For subcategories: simple comma-separated input */}
      <input
        name="subcategories"
        placeholder="Subcategories (comma separated)"
        value={form.subcategories}
        onChange={e =>
          setForm({ ...form, subcategories: e.target.value.split(",") })
        }
      />

      <input
        name="banner_image_url"
        placeholder="Banner Image URL"
        value={form.banner_image_url}
        onChange={handleChange}
      />

      {/* For image URLs: simple comma-separated input */}
      <input
        name="image_urls"
        placeholder="Image URLs (comma separated)"
        value={form.image_urls}
        onChange={e =>
          setForm({ ...form, image_urls: e.target.value.split(",") })
        }
      />

      <button type="submit">Create Event</button>
    </form>
  );
}
