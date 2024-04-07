import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className='flex items-center h-screen justify-center'>{children}</div>
  );
};

export default AuthLayout;
