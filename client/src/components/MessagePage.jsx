import React from "react";
import Mesaages from "./Mesaages";
import SendInput from "./SendInput";
import { MdVideoCall } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdAddCall } from "react-icons/md";

const MessagePage = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );


  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] sm:min-w-[350px] flex flex-col">
          <div className="flex gap-2 items-center justify-between bg-zinc text-white border-b-2 px-4 py-2 mb-2">
            <div className={`avatar ${isOnline ? "online" : ""} `}>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser?.fullName}</p>
              </div>
            </div>
            <div className=" items-center flex space-x-3">
              <MdVideoCall size={30} />
              <MdAddCall size={27} />
            </div>
          </div>
          <Mesaages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">
            Hi,{authUser?.fullName}{" "}
          </h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessagePage;
