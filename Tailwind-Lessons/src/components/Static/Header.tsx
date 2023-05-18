import React from "react";
import logo from "../../assets/download.png";

const Header = () => {
  return (
    <div className="w-full h-20 bg-[rgba(0,0,0,0.9)] flex justify-center items-center">
      <div className="w-[90%] h-[80%] flex justify-between items-center ">
        <img src={logo} className="h-14 w-[100px]" alt="" />
        <div className="flex items-center text-white">
          <p className="m-4 text-base">Home</p>
          <p className="m-4 text-base">About</p>
          <p className="m-4 text-base">Contact Us</p>
          <p className="m-4 text-base">Services</p>
        </div>
        <div className="">
          <button className="mr-[5px]">Sign up</button>
          <button className="">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
