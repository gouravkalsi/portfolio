import React from "react";

export default function RightCard({ name, place, desc }) {
  return (
    <div className="sm:w-[50%] w-full p-4 border-l sm:border-0 border-black relative">
      <div className="font-semibold text-lg">{name}</div>
      <div className="font-xs italic">{place}</div>
      <div className="font-sm">{desc}</div>
      <div className="w-[8px] h-[8px] rounded-full bg-black absolute left-[-4px] top-[50%] translate-y-[-25%] sm:hidden"></div>
    </div>
  );
}
