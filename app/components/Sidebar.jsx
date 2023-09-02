import Image from "next/image";
import React from "react";
import hamburgermenuIcon from "../Assets/hamburgermenu.svg";
import dashboardIcon from "../Assets/sidebar/dashboard.svg";
import emailIcon from "../Assets/sidebar/email.svg";
import commentIcon from "../Assets/sidebar/comment.svg";
import thumbnailIcon from "../Assets/sidebar/thumbnail.svg";
import contactIcon from "../Assets/sidebar/contact.svg";
import calenderIcon from "../Assets/sidebar/calendar.svg";
import invoiceIcon from "../Assets/sidebar/invoice.svg";
import invoiceColorIcon from "../Assets/sidebar/invoiceColor.svg";
import onlineShoppingIcon from "../Assets/sidebar/online-shopping.svg";
import settingIcon from "../Assets/sidebar/setting.svg";
import arrow_downIcon from "../Assets/sidebar/arrow_down.png";
import arrow_rightIcon from "../Assets/sidebar/arrow_right.svg";
import bg_1Image from "../Assets/sidebar/bg_1.png";
import bg_2Image from "../Assets/sidebar/bg_2.svg";
import dotMaskIcon from "../Assets/sidebar/dotMask.svg";
import rightArrow from "../Assets/sidebar/rightFullarrow.svg";
const Sidebar = (props) => {
  const { changeFn } = props;
  return (
    <div className="bg-[#15132B] w-[20%] flex flex-col hidden md:block  ">
      <div className="flex justify-center items-center gap-9 p-6">
        <h2 className="text-white p-2 block text-center font-semibold text-2xl">
          weframetech
        </h2>

        <button
          onClick={() => {
            changeFn(false);
          }}
        >
          <Image src={hamburgermenuIcon} alt="hamburgermenu" />
        </button>
      </div>
      <div className="p-10 flex flex-col gap-10 w-full">
        <h3 className="text-white text-xl">MAIN MENU</h3>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-3 items-center">
            <Image src={dashboardIcon} alt="Dashboard" />
            <p className="text-[#464366]">Dashboard</p>
          </li>
          <li className="flex  justify-between">
            <div className="flex gap-3 items-center">
              <Image alt="Email" src={emailIcon} />
              <p className="text-[#464366]">Email</p>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#5ECFFF] rounded-full px-2  py-1 text-sm  text-white">
                17
              </span>
              <Image alt="downarrow" src={arrow_downIcon} />
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <Image alt="Chat" src={commentIcon} />
            <p className="text-[#7879F1]">Chat</p>
          </li>
          <li className="flex  justify-between">
            <div className="flex gap-3 items-center">
              <Image alt="Kanban" src={thumbnailIcon} />
              <p className="text-[#6418C3]">Kanban</p>
            </div>
            <Image alt="right arrow" src={arrow_rightIcon} />
          </li>
          <li className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Image alt="Contact" src={contactIcon} />
              <p className="text-[#7879F1]">Contact</p>
            </div>
            \
            <p className="bg-[#E328AF] px-3 py-2 rounded-full text-white  font-semibold">
              NEW
            </p>
          </li>
          <li className="flex gap-3 items-center">
            <Image alt="Calender" src={calenderIcon} />
            <p className="text-[#7879F1]">Calender</p>
          </li>

          <li className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Image alt="Courses" src={invoiceIcon} />
              <p className="text-[#7879F1]">Courses</p>
            </div>
            <Image alt="rightarrow" src={arrow_rightIcon} />
          </li>
          <li className="flex gap-3 items-center">
            <Image alt="Shop" src={onlineShoppingIcon} />
            <p className="text-[#7879F1]">Shop</p>
          </li>
          <li className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Image alt="Invoices" src={invoiceColorIcon} />
              <p className="text-[#7879F1]">Invoices</p>
            </div>
            <Image alt="rightarrow" src={arrow_rightIcon} />
          </li>
          <li className="flex gap-3 items-center">
            <Image alt="Settings" src={settingIcon} />
            <p className="text-[#7879F1]">Settings</p>
          </li>
        </ul>
        <div className="w-[94%]  overflow-hidden rounded-lg   relative">
          <div className="absolute p-6 flex flex-col  gap-4">
            <Image alt="dotIcon" src={dotMaskIcon} className="w-[30px]" />
            <p className="text-2xl font-semibold text-white">
              Increase your work with kanban
            </p>
            <Image alt="rightarrow" src={rightArrow} className="w-[30px]" />
          </div>
          <Image alt="backgroudone" src={bg_1Image} className="w-full " />
          <Image
            alt="backgroundtwo"
            src={bg_2Image}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
