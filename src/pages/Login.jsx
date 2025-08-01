import React, { useState } from 'react';
import { login } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: doLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      doLogin(data.access_token);
      alert('Logged in successfully');
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', paddingTop: "2rem" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
    </form>
  );
}
