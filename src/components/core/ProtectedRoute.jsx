import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}; 