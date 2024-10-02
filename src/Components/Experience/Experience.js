import React from "react";
import LeftCard from "../Education/LeftCard";
import RightCard from "../Education/RightCard";

export default function Experience() {
  return (
    <div className="border-t-2 border-gray-500 lg3:mt-10 py-8">
      <div className="textGradient">
        <span className="text-4xl uppercase">Experience</span>
      </div>
      <div className="flex justify-center items-stretch flex-wrap mt-6 px-10 sm:px-0">
        
        <div className="w-[50%] sm:block hidden"></div>
        <div className="w-[50%] sm:block hidden border-r border-black relative">
          <div className="w-[8px] h-[8px] rounded-full bg-black absolute right-[-4px] top-[50%] translate-y-[-25%]"></div>
        </div>
        <RightCard name={"ReactJS Developer"} place={"Plexus Solutions - Remote"} desc={"April 2024 - September 2024"} />
      </div>
    </div>
  );
}
