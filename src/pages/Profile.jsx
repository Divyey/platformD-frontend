import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { logout } = useAuth();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Profile</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
