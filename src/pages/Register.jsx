import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    contact_number: '',
    bio: '',
    interests: '',
    avatar_url: '',
    locale: 'en',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert interests string to array of trimmed strings
    const interestsArray = form.interests.split(',').map(i => i.trim()).filter(Boolean);

    try {
      await register({ ...form, interests: interestsArray });
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.detail || err.message));
    }
  };

  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google-login`;
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Register</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required className="auth-input" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="auth-input" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="auth-input" />
        <input name="contact_number" placeholder="Contact Number" value={form.contact_number} onChange={handleChange} className="auth-input" />
        <input name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} className="auth-input" />
        <input name="interests" placeholder="Interests (comma separated)" value={form.interests} onChange={handleChange} className="auth-input" />
        <input name="avatar_url" placeholder="Avatar URL" value={form.avatar_url} onChange={handleChange} className="auth-input" />
        <button type="submit" className="auth-button">Register</button>
      </form>

      <button onClick={googleLogin} className="google-login-button" aria-label="Register with Google">
        <img src="/google-icon.svg" alt="Google icon" className="google-icon" />
        Register with Google
      </button>

    </div>
  );
}
