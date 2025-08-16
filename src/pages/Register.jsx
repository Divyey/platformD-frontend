import { useState } from "react";
import { registerUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd"; // Only for feedback popup
import googleLogo from "../assets/google.png";
import { useAuth } from "../contexts/AuthContext";
import "../styles/global.css"; // Assuming you have global styles
export default function Register() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    contact_number: "",
    bio: "",
    interests: [""],
    avatar_url: "",
    locale: "en",
    password: ""
  });

  const handleInterestChange = (i, value) => {
    const interests = [...form.interests];
    interests[i] = value;
    setForm({ ...form, interests });
  };

  const addInterest = () => setForm({ ...form, interests: [...form.interests, ""] });

  const removeInterest = (i) => {
    const interests = form.interests.filter((_, idx) => idx !== i);
    setForm({ ...form, interests });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      interests: form.interests.filter((interest) => interest.trim() !== "")
    };
    try {
      await registerUser(payload);
      message.success("User registered! Please login.");
      navigate("/login");
    } catch (err) {
      message.error(err.response?.data?.detail || "Registration failed!");
    }
  };

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="contact_number"
          placeholder="Contact Number"
          value={form.contact_number}
          onChange={handleChange}
        />
        <input
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
        />

        <label style={{ marginTop: "1em", display: "block" }}>Interests:</label>
        {form.interests.map((interest, i) => (
        <div key={i} className="interests-row">
            <input
            value={interest}
            onChange={e => handleInterestChange(i, e.target.value)}
            placeholder={`Interest ${i + 1}`}
            name={`interest-${i}`}
            className="interest-input"
            />
            <button
            type="button"
            onClick={() => removeInterest(i)}
            disabled={form.interests.length === 1}
            className="remove-btn"
            aria-label="Remove interest"
            title="Remove"
            >
            &times;
            </button>
        </div>
        ))}
        <button
        type="button"
        onClick={addInterest}
        style={{
            marginBottom: "8px",
            background: "linear-gradient(90deg, #7b2ff7, #f107a3, #f7b733)",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "18px",
            fontSize: "1rem",
            cursor: "pointer"
        }}
        >
        + Add Interest
        </button>


        <input
          name="avatar_url"
          placeholder="Avatar URL"
          value={form.avatar_url}
          onChange={handleChange}
        />
        <input
          name="locale"
          placeholder="Locale (default: en)"
          value={form.locale}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      <a
        href="https://platformd-backend.onrender.com/api/v1/auth/google-login"
        className="google-login-btn"
      >
        <img src={googleLogo} className="google-icon" alt="Google" />
        Sign up with Google
      </a>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
