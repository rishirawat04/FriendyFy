import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      toast.error("All Fields are required    ");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      dispatch(setAuthUser(response.data));
      localStorage.setItem("authUser", JSON.stringify(response.data));
    } catch (error) {
      toast.error("Invalid Username or Password");
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-w-96 text-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8">
        <h2 className="text-2xl text-center font-bold mb-4">Log In</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              name="username"
              placeholder="Username"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 py-1"
            />
          </div>
          <div>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 py-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded"
          >
            Log In
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
