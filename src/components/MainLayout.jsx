import TopNav from "./layout/TopNav";
import BottomNav from "./layout/BottomNav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <TopNav />
      <div className="main-content">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
