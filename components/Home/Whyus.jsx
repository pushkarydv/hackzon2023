import React from "react";
import { MdAccessible, MdOutlineSavings } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GrGrow, GrConnect } from "react-icons/gr";

export default function WhyUs() {
  return (
    <div className="w-11/12 md:w-10/12 m-auto flex items-center justify-center py-4  flex-col  relative gap-32">
      <div className="md:text-8xl text-5xl font-bold">Why Us!!</div>
      <div className="flex flex-wrap justify-center md:justify-around w-full flex-shrink-0 gap-4 items-center">
        <div className="text-2xl flex flex-col items-center gap-4 ring border-2 rounded-lg bg-info bg-opacity-50 w-[200px] justify-center text-center aspect-square flex-shrink-0">
          <FaHandsHelping size={64} /> Convenience
        </div>
        <div className="text-2xl flex flex-col items-center gap-4 ring border-2 rounded-lg bg-info bg-opacity-50 w-[200px] justify-center text-center aspect-square flex-shrink-0">
          <MdAccessible size={64} />
          Accessibility
        </div>
        <div className="text-2xl flex flex-col items-center gap-4 ring border-2 rounded-lg bg-info bg-opacity-50 w-[200px] justify-center text-center aspect-square flex-shrink-0">
          <GrGrow size={64} />
          Efficiency
        </div>
        <div className="text-2xl flex flex-col items-center gap-4 ring border-2 rounded-lg bg-info bg-opacity-50 w-[200px] justify-center text-center aspect-square flex-shrink-0">
          <GrConnect size={64} />
          Improved communication
        </div>

        <div className="text-2xl flex flex-col items-center gap-4 ring border-2 rounded-lg bg-info bg-opacity-50 w-[200px] justify-center text-center aspect-square flex-shrink-0">
          <MdOutlineSavings size={64} />
          Cost savings
        </div>
      </div>
    </div>
  );
}
