import React from "react";
import Message from "./Message";
import GetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealtimeMessages from "../hooks/useGetRealtimeMessages";
const Mesaages = () => {
  GetMessages();
  useGetRealtimeMessages();
  const { messages } = useSelector((store) => store.message);
  if (!messages) {
    return;
  }

  return (
    <div className="overflow-auto px-4  " style={{ maxHeight: "500px" }}>
      {messages &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
    </div>
  );
};

export default Mesaages;
