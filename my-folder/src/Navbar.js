import React from "react";
import "./Navbar.css";

const Navbar = () => {
 
  return (
    <div className="bg-white flex justify-between h-14 w-full px-4 items-center">
      <div className="text-indigo-500 font-bold text-2xl">LOGO</div>
      <ul className="md:flex hidden">
        <li className="px-2 text-indigo-500">home</li>
        <li className="px-2 text-indigo-500">about us</li>
        <li className="px-2 text-indigo-500">contact</li>
      </ul>
      <div className="hidden md:block"><button className="bg-indigo-500 text-white p-2 rounded-md">login</button></div>
     
    </div>
  );
};

export default Navbar;
