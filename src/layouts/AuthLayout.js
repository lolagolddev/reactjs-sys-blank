import React from "react";
import { images } from "../constants";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col w-full sm:max-w-screen-sm mx-auto p-3">
      <div className="mx-auto">
        <img src={images.Logo} alt="" className="w-16 h-16 mx-auto mt-16" />
        <h3 className="text-center"> {title}</h3>
        <p className="text-center p-2 mb-3 w-full"> {subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
