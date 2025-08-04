import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001/api/v1';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('access_token'));
  const [user, setUser] = useState(null);

  // Save / remove token in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token);
    } else {
      localStorage.removeItem('access_token');
      setUser(null); // Clear user info on logout
    }
  }, [token]);

  // Fetch user info when token changes (login)
  useEffect(() => {
    let isMounted = true; // to handle cleanup

    async function fetchUser() {
      try {
        if (token) {
          const response = await axios.get(`${API_BASE}/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (isMounted) {
            setUser(response.data);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        setUser(null);
        // Optionally, logout user if token invalid/expired
        setToken(null);
      }
    }

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const login = (newToken) => setToken(newToken);

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
