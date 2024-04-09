import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className='h-screen flex'>
      <div className='hidden lg:block'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1'>
        <Navbar />
        <div className='p-6  flex-1 overflow-y-auto'>{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
