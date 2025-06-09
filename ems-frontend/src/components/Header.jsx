import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className=" h-full w-full">
      <Navbar />
      <div className="w-full  text-center  text-2xl">Employee Management</div>
    </div>
  );
};

export default Header;
