import Image from "next/image";
import React from "react";
import searchImage from "../Assets/searchIcon.svg";
import notificationIcon from "../Assets/notification.svg";
import profilePicIcon from "../Assets/profilePicture.svg";
import folderIcon from "../Assets/folder.svg";
import checkIcon from "../Assets/check.svg";
import activitiIcon from "../Assets/Activities.svg";
import usIcon from "../Assets/usIcon.svg";
import downArrowIcon from "../Assets/arrow.svg";
import hamburgerMenuIcon from "../Assets/hamburgermenu.svg";

const Navbar = () => {
  return (
    <div className="flex md:justify-between md:items-center p-2 gap-3 flex-col md:flex-row bg-[#15132B]">
      <h3 className="text-white p-2 block md:hidden text-center font-semibold text-lg">
        We Frame Tech
      </h3>
      <button className="hidden md:block">
        <Image
          src={hamburgerMenuIcon}
          alt="menuIcon"
          className="hidden md:block"
        />
      </button>
      <div className="bg-[#211A75] flex p-2 rounded-full gap-2 w-[250px] md:w-[18%] ">
        <Image
          src={searchImage}
          className="w-[20px] cursor-pointer"
          alt="search Icon"
        />

        <input
          type="text"
          placeholder="Search Here"
          className="bg-transparent outline-none pl-4 "
        />
      </div>
      <p className="text-[#6418C3] uppercase text-sm">other menus</p>
      <div className="flex">
        <Image
          className="w-[55px] hover:scale-150 duration-300 cursor-pointer"
          src={notificationIcon}
          alt="notifactuion icon"
        />
        <Image
          className="w-[55px] hover:scale-150 duration-300 cursor-pointer"
          src={activitiIcon}
          alt="activity icon"
        />
        <Image
          className="w-[55px] hover:scale-150 duration-300 cursor-pointer"
          src={checkIcon}
          alt="check icon"
        />
        <Image
          className="w-[55px] hover:scale-150 duration-300 cursor-pointer"
          src={folderIcon}
          alt="folder icon"
        />
      </div>
      <div className="flex gap-3 items-center">
        <Image src={usIcon} className="w-[22px]" alt="united state Icon" />
        <p className="text-white uppercase">english</p>
        <Image
          src={downArrowIcon}
          className="hover:scale-125 duration-300 cursor-pointer"
          alt="down Arrow Icon"
        />
      </div>
      <div className="flex gap-4 items-center px-2">
        <Image
          src={profilePicIcon}
          className="w-[36px]"
          alt="profile picture image"
        />
        <div className="">
          <p className="text-white">Instructor Day</p>
          <p className="text-[#7879F1]">Super Admin</p>
        </div>
        <Image src={downArrowIcon} className="hover:scale-125 duration-300 cursor-pointer" alt="down Arrow Icon" />
      </div>
    </div>
  );
};

export default Navbar;
