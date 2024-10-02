import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export default function Education() {
  return (
    <div className="border-t-2 border-gray-500 lg3:mt-10 py-8">
      <div className="textGradient">
        <span className="text-4xl uppercase">Education</span>
      </div>
      <div className="flex justify-center items-stretch flex-wrap mt-6 px-10 sm:px-0">
        <LeftCard name={"New Bright Sun School"} place={"Hamirpur, Himachal Pradesh (2018)"} desc={"Completed the 10th-grade curriculum in HPBOSE with 78.40% marks"} />
        <div className="w-[50%] sm:block hidden"></div>
        <div className="w-[50%] sm:block hidden border-r border-black relative">
          <div className="w-[8px] h-[8px] rounded-full bg-black absolute right-[-4px] top-[50%] translate-y-[-25%]"></div>
        </div>
        <RightCard name={"G.S.S.SCHOOL"} place={"Hamirpur, Himachal Pradesh (2020)"} desc={"Completed the 12th-grade curriculum focused on Mathematics, Physics and Chemistry with 60% marks."} />
        <LeftCard name={"National Institute of Technology Hamirpur"} place={"Hamirpur, Himachal Pradesh (2020-2024)"} desc={"B.Tech in Mechanical Engineering with 6.61 CGPA."} />
        <div className="w-[50%] sm:block hidden"></div>
      </div>
    </div>
  );
}
