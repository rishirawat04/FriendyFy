import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUser } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8080", {
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socket));

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
      });
      return () => socket.close();
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return user ? children : <Navigate to="/login" replace />;
};

export default App;
