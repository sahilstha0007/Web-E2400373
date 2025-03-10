import { Navigate, useLocation } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function RouteProtection({ element }) {
  const { auth, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (!auth.authenticate) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteProtection;