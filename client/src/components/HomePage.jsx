import React from "react";
import Sidebar from "./Sidebar";
import MessagePage from "./MessagePage";

const HomePage = () => {
  return (
    <div className="flex sm:h-[550px] md:h-[550px] border  border-b-slate-300 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessagePage />
    </div>
  );
};

export default HomePage;
