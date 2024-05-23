import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!user.fullName || !user.username || !user.password || !user.gender) {
      toast.error("All fields are required");
      return;
    }
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        navigate("/login");
        toast.success("Account Created Successfully");
      }
    } catch (error) {
      toast.error("Error Creating Account ");
      console.log(error.message);
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 text-white flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8">
        <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 py-1"
            />
          </div>
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
          <div>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 py-1"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox mx-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Signup;
