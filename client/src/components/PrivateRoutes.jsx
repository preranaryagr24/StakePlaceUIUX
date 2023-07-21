import React from "react";
import { Navigate, Outlet } from "react-router";

import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser !== null ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default PrivateRoutes;
