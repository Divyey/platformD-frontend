import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api/v1';

export async function login(email, password) {
  const params = new URLSearchParams();
  params.append('username', email);     // backend expects email in username field
  params.append('password', password);
  
  const response = await axios.post(`${API_BASE}/auth/token`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return response.data;  // contains access_token, token_type
}

export async function register(userData) {
  // userData should include keys: username, email, password, contact_number, bio, interests (array of strings), avatar_url, locale
  const response = await axios.post(`${API_BASE}/users/register`, userData, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
}
