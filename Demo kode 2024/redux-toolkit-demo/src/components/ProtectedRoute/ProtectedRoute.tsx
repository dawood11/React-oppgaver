import { ProtectedRouteType } from "./ProtectedRoute.types";
import { ROUTES } from "../../router/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}: ProtectedRouteType) => {
  const auth = useSelector((state: any) => state.auth.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate(ROUTES.ROOT);
  }, [auth, navigate]);

  return children;
};

export default ProtectedRoute;
