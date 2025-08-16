import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api/v1';

export const loginUser = async (email, password) => {
  const params = new URLSearchParams();
  params.append('username', email);
  params.append('password', password);

  const res = await axios.post(`${API_BASE_URL}/auth/token`, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE_URL}/users/register`, data);
  return res.data;
};
