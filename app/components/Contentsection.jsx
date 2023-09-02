import Image from "next/image";
import React from "react";
import clockIcon from "../Assets/clockIcon.svg";
import sumIcon from "../Assets/sumIcon.svg";
import sumColorIcon from "../Assets/sumColorIcon.svg";
import horizontalThreedots from "../Assets/horizontalThreedots.svg";

const Contentsection = () => {
  return (
    <div className="w-full p-4 flex gap-4 flex-col md:flex-row">
      {/* col1 */}
      <div className="md:w-[25%] ">
        <div className="flex justify-between m-4 ">
          <p className="text-white text-xl">{`To-Do List(24)`}</p>
          <div className="flex justify-center items-center bg-[#6418C3] p-3 rounded-md">
            <Image src={sumIcon} alt="horizontal dots" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full bg-[#211A75]  hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            {/* card1 */}
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FFAB2D]"></span>
                <p className="text-[#FFAB2D]">Important</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Create sign up sheet for holiday student/parent conferences.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#FFAB2D] h-full w-[30%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#E328AF]"></span>
                <p className="text-[#E328AF]">Instructor Meeting</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Plan holiday demonstration program. Create outline.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#E328AF] h-full w-[40%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#38E25D]"></span>
                <p className="text-[#38E25D]">Databse</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Determine how many boards need to be ordered for testing and demo.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#38E25D] h-full w-[30%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* col2 */}
      <div className="md:w-[25%]">
        <div className="flex justify-between m-4">
          <p className="text-white text-xl">{`In Progress (2)`}</p>
          <div className="flex justify-center items-center bg-[#211A75] p-3 rounded-md">
            <Image src={sumColorIcon} alt="horizontal dots" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* card1 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#5ECFFF]"></span>
                <p className="text-[#5ECFFF]">Video</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Create sparring tutorial video for the weekly class.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#5ECFFF] h-full w-[80%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FF4A55]"></span>
                <p className="text-[#FF4A55]">BUGS FIXING</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Payment gateway needs reauthorization.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#FF4A55] h-full w-[95%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* col3 */}
      <div className="md:w-[25%]">
        <div className="flex justify-between m-4 ">
          <p className="text-white text-xl">{`Done(3)`}</p>
          <div className="flex justify-center items-center bg-[#211A75] p-3 rounded-md">
            <Image
              src={sumColorIcon}
              alt="horizontal dots"
              className="filter-[#211A75]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            {/* card1 */}
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FF4A55]"></span>
                <p className="text-[#FF4A55]">BUGS FIXING</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Action Button needed for Google Maps visits.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#FF4A55] h-full w-[100%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#38E25D]"></span>
                <p className="text-[#38E25D]">Database</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">Update new instructor photos.</p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#38E25D] h-full w-[100%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="w-full bg-[#211A75] hover:-rotate-6 transform rotate-0 transition-transform cursor-grab p-3 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between   ">
              <div className="w-[50%] flex items-center gap-3">
                <span className="w-[10px] h-[10px] rounded-full bg-[#E328AF]"></span>
                <p className="text-[#E328AF]">Instructor Meeting</p>
              </div>
              <div className="">
                <Image src={horizontalThreedots} alt="horizontal dots" />
              </div>
            </div>
            <p className="text-white text-xl">
              Review/correct yellow belt techniques.
            </p>
            <div className="bg-[#1E1C3A] w-full h-[10px] rounded-full flex">
              <div className="bg-[#E328AF] h-full w-[100%] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <button className="flex">
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3  rounded-full "></div>
                <div className="bg-[#C4C4C4] -mr-2 border border-black  p-3 rounded-full "></div>
              </button>
              <div className="flex text-white opacity-70 gap-3">
                <Image src={clockIcon} alt="clock icon" />
                <p>Due in 4 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* col4 */}
      <div className="md:w-[25%]">
        <div className="flex justify-between m-4 ">
          <p className="text-white text-xl">{`Revised (0)`}</p>
          <div className="flex justify-center items-center bg-[#211A75] p-3 cursor-pointer rounded-md">
            <Image src={sumColorIcon} alt="horizontal dots" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* card1 */}
          <div className="w-full cursor-pointer bg-[#211A75] p-4 rounded-md flex justify-center items-center  gap-2 h-[150px]">
            <div className="border rounded-lg border-spacing-4 border-dashed bg-[#15132B] flex justify-center items-center px-10 py-6 border-white">
              <p className="text-[#7879F1]">Move card here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentsection;
