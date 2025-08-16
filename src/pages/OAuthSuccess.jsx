import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function OAuthSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      login(token);
      navigate("/", { replace: true });
    } else {
      alert("OAuth failed");
      navigate("/login");
    }
  }, []);

  return <div>Logging you in...</div>;
}
