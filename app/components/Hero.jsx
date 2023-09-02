import React from "react";
import threeDotsIcon from "../Assets/threeDots.svg";
import addFriendIcon from "../Assets/addFriendIcon.svg";
import companyLogoIcon from "../Assets/companyLogo.svg";
import chatLogo from "../Assets/chatIcon.svg";
import leftArrowButtonIcon from "../Assets/btnLeftIcon.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-[#15132B] rounded-lg p-4 flex flex-col md:flex-row justify-between w-full gap-4 md:gap-0">
      {/* left */}
      <div className="flex gap-2">
        <div>
          <Image
            className="w-[30px]"
            src={leftArrowButtonIcon}
            alt="left arrow Icon"
          />
        </div>
        <div className="  gap-2 flex flex-col ">
          <h3 className="text-white text-xl font-semibold">
            School November Tasks
          </h3>
          <p className="text-white text-xs ">
            Created by Instructor Day on November 31, 2022
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <button className="flex items-center">
              <div className="p-4 border -ml-4 border-black  bg-[#C4C4C4] rounded-full"></div>
              <div className="p-4 border -ml-4 border-black  bg-[#C4C4C4] rounded-full"></div>
              <div className="p-4 border -ml-4 border-black  bg-[#C4C4C4] rounded-full"></div>
              <div className="p-4 border -ml-4 border-black  bg-[#C4C4C4] rounded-full"></div>
              <button className="py-2 px-3 border -ml-4 border-black text-white font-semibold text-lg  bg-[#E328AF] rounded-full">5+</button>
            </button>
            <button className="bg-[#6418C3] flex gap-2 px-4 py-2 rounded-2xl items-center">
              <Image
                src={addFriendIcon}
                className="w-[20px]"
                alt="add friend icon"
              />
              <p className="text-white">Invite People</p>
            </button>
            <button className="text-white font-semibold border px-4 py-2 rounded-2xl border-[#6418C3]">
              Private
            </button>
            <button className="text-white font-semibold  rounded-2xl bg-[#7879F1] px-4 py-2">
              Edit
            </button>
            <button className="text-white font-semibold border px-4 py-2 rounded-2xl border-[#6418C3] flex gap-2">
              <Image src={chatLogo} alt="Chat Icon" />
              <p>45 Comments</p>
            </button>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-3 w-full md:w-[25%]">
        <div className="flex items-center ">
          <div className="text-white flex flex-col items-end">
            <h3 className=" font-semibold">Centered Martial Arts</h3>
            <p className="  opacity-80">Sunnyvale, Ca</p>
          </div>
          <Image className="" src={companyLogoIcon} alt="company logo" />
          <Image className="" src={threeDotsIcon} alt="threedots" />
        </div>
        <div className="flex gap-2 items-center flex-col md:flex-row ">
          <p className="text-white font-semibold w-[50%]">Total Progress 60%</p>
          <div className="bg-[#1E1C3A] h-[12px] flex  rounded-full w-[50%]">
            <div className="bg-[#6418C3] w-[60%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
