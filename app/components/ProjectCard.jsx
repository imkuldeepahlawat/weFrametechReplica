import React from "react";
import horizontalThreedots from "../Assets/horizontalThreedots.svg";
import clockIcon from "../Assets/clockIcon.svg";
import Image from "next/image";
const ProjectCard = (props) => {
  const { title, textCont, progress, user, color } = props;
  
  return (
    <div>
      <div className="flex items-center">
        <span className={`w-[10px] h-[10px] rounded-full bg-${color}`}></span>
        <p className={`text-${color}`}>{title}</p>
        <Image src={horizontalThreedots} alt="horizontal dots" />
      </div>
      <p>{textCont}</p>
      <div className="">
        <div className=""></div>
      </div>
      <div className="">
        <button></button>
        <div className="flex text-white opacity-70 gap-3">
            <Image src={clockIcon}/>
            <p>Due in 4 days</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
