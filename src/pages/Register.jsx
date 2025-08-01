import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    contact_number: '',
    bio: '',
    interests: [''],
    avatar_url: '',
    locale: 'en',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'interests' ? value.split(',').map(i => i.trim()) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="text"
        name="contact_number"
        placeholder="Contact Number"
        value={form.contact_number}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="text"
        name="bio"
        placeholder="Bio"
        value={form.bio}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="text"
        name="interests"
        placeholder="Interests (comma separated)"
        value={form.interests}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="text"
        name="avatar_url"
        placeholder="Avatar URL"
        value={form.avatar_url}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Register</button>
    </form>
  );
}
