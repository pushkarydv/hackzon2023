import Link from "next/link";
import React from "react";

export default function Choose() {
  return (
    <div className="p-4 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full sm:w-[80%] md:w-[70%] lg:w-[70%] mx-auto lg:mt-4 xl:mt-8 gap-8 sm:gap-4">
        <div className="w-full lg:w-1/2 mt-4 sm:mt-0">
          <div className="text-lg text-slate-600 font-semibold">
            Using Schedular it&apos;s super easy to schedule an appointment
            within few steps
          </div>
          <div className="font-semibold mt-2 mb-4 text-xl">
            Which one is you?
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link
              className="transition-all no-underline px-4 py-6 bg-purple-50 rounded-xl ring-2 ring-purple-300 hover:ring-purple-400 active:scale-95 lg:w-1/2 lg:aspect-[2/1] lg:flex justify-center items-center lg:text-2xl lg:font-semibold"
              href="/register/doctor"
            >
              Doctor
            </Link>
            <Link
              className="transition-all no-underline px-4 py-6 bg-purple-50 rounded-xl ring-2 ring-purple-300 hover:ring-purple-400 active:scale-95 lg:w-1/2  lg:aspect-[2/1] lg:flex justify-center items-center lg:text-2xl lg:font-semibold"
              href="/register/patient"
            >
              Patient
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="/images/doctor.png"
            className="w-full p-2 jump-slow"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
}
