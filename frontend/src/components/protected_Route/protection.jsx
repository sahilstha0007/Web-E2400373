import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteProtection({ authenticated, element }) {
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/auth" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteProtection;