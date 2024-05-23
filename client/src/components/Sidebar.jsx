import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setOtherUser, setSearchUser } from "../redux/userSlice";
import { setMessages } from "../redux/messageSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { otherUser, searchUser } = useSelector((store) => store.user);

  const [search, setSearch] = useState("");

  //Search User logic
  const searchUserHandler = (e) => {
    e.preventDefault();
    const searchUser = otherUser?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (searchUser) {
      dispatch(setSearchUser(searchUser));
    } else {
      toast.error("User not found");
    }
  };

  // logout logic
  const logoutHandle = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");

      navigate("/login");
      toast.success("User logout successfully");
      localStorage.clear("authUser");
      dispatch(setAuthUser(null));
      dispatch(setMessages(null));
      dispatch(setOtherUser(null));
      dispatch(setSearchUser(null));
    } catch (error) {
      toast.error("Error occurred while logout");
      console.log(error);
    }
  };
  return (
    <div className="border-r  border-slate-500 p-4 flex-col">
      <form
        onSubmit={searchUserHandler}
        className="flex text-white border-b items-center gap-2 "
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent  border-gray-300 focus:outline-none focus:border-gray-500 py-1"
          type="text"
          placeholder="Search..."
        />
        <div className="dropdown">
          <div
            type="submit"
            tabIndex={0}
            role="button"
            className=" text-white ml-1"
          >
            <BiSearchAlt2 className="w-6 h-6" />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="bg-zinc-200  flex gap-2 hover:text-black items-center text-white hover:bg-zinc-200 rounded p-2 cursor-pointer">
              <div className={`avatar`}>
                <div className="w-12 rounded-full">
                  <img src={searchUser?.profilePhoto} alt="" />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between gap-2 ">
                  <p>{searchUser?.fullName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />

      <div className="mt-2">
        <button className="btn btn-sm" onClick={logoutHandle}>
          Logout
        </button>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Sidebar;
