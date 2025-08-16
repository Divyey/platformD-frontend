import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { loginUser } from "../api/auth";
import googleLogo from "../assets/google.png";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd"; // Only ant-d feedback, rest custom css

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      login(data.access_token);
      message.success("User authenticated!");
      navigate("/");
    } catch (err) {
      message.error(err.response?.data?.detail || "Incorrect credentials!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <a href="https://platformd-backend.onrender.com/api/v1/auth/google-login" className="google-login-btn">
        <img src={googleLogo} className="google-icon" alt="Google" />
        Login with Google
      </a>
      <p>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
