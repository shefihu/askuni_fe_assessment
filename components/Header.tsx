"use client";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import Navbar from "./navbar";
import NavItem from "./navItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="w-full bg-white">
      <div className="h-[80px] px-[40px] lg:px-[120px] fixed  top-0 bg-white z-[9999] flex justify-between w-full  items-center shadow-sm  mx-auto">
        <div className="font-bold text-3xl ">askuni</div>
        <Navbar isOpen={isOpen} closeModal={closeModal} />
        <NavItem view="screen" />
        <GrMenu
          className="lg:hidden flex w-6 h-6 text-gray-700 cursor-pointer"
          onClick={openModal}
        />
        <ul className="lg:flex hidden space-x-[20px] items-center ">
          <li className="text-[#2c3e50] ">Universities</li>
          <li className="text-[#2c3e50] ">About Us</li>
          <li className="text-[#2c3e50]">How to Apply?</li>
          <li className="text-[#2c3e50] ">Partner</li>
          <li className="text-[#2c3e50] ">Fairs</li>
          <li className="bg-[#0195ff] rounded-[4px] mt-1 disabled:cursor-not-allowed shadow-md px-[30px] h-[42px] text-white py-[5px] flex justify-center items-center ">
            Sign Up
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
