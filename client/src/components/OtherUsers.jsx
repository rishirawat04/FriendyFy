import React from "react";
import OtherUser from "./OtherUser";
import GetOtherUser from "../hooks/getOtherUser";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  //custom hook for getting other users
  GetOtherUser();

  const { otherUser } = useSelector((store) => store.user);
  if (!otherUser) return; // early return in react

  return (
    <div className="overflow-auto  flex-1" style={{ maxHeight: "400px" }}>
      {otherUser.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
