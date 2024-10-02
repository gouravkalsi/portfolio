import React from "react";

export default function LeftCard({ name, place, desc }) {
  return (
    <div className="sm:w-[50%] w-full p-4 border-l sm:border-l-0 sm:border-r border-black sm:text-right relative">
      <div className="w-[8px] h-[8px] rounded-full bg-black absolute left-[-4px] sm:left-auto sm:right-[-4px] top-[50%] translate-y-[-25%]"></div>
      <div className="font-semibold text-lg">{name}</div>
      <div className="font-xs italic">{place}</div>
      <div className="font-sm">{desc}</div>
    </div>
  );
}
