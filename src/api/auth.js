import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api/v1';

// Login with email/password, backend expects email in username field
export async function login(email, password) {
  const params = new URLSearchParams();
  params.append('username', email);
  params.append('password', password);

  const response = await axios.post(`${API_BASE}/auth/token`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return response.data;
}

// Register user
export async function register(userData) {
  const response = await axios.post(`${API_BASE}/users/register`, userData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
}
