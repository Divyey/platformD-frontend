import { Outlet } from "react-router-dom";
import "./authLayout.css"; 

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      {/* No TopNav, no BottomNav */}
      <Outlet />
    </div>
  );
}
