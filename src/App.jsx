import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import OAuthSuccess from './pages/OAuthSuccess';
import { useAuth } from './contexts/AuthContext';
import TopNav from './components/layout/TopNav';
import BottomNav from './components/layout/BottomNav';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Create a MainLayout to wrap protected routes with nav bars
function MainLayout() {
  return (
    <>
      <TopNav />
      <main style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        {/* space to avoid navbars overlap */}
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without nav */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />

        {/* Protected routes with nav using MainLayout */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
