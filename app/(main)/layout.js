import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className='h-screen flex'>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1'>
        <Navbar />
        <div className='pl-8  flex-1 py-5'>{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
