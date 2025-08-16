import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthLayout from "../components/AuthLayout";
import MainLayout from "../components/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth pages, no Nav bars */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* App pages, with Nav bars if authenticated */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add other protected routes here */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
