// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      element={authUser ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
