import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-11/12 md:w-10/12 m-auto flex items-center justify-center min-h-[90vh] flex-col md:flex-row relative">
      <div className="flex flex-col w-full md:w-1/2 gap-4 self-center md:self-auto justify-center">
        <div className="md:text-8xl text-5xl font-bold">Scheduler</div>
        <div className="md:text-3xl text-2xl font-mono">
          Elevate your healthcare experience with our convenient online
          scheduler.
        </div>
        <Link className="btn btn-info self-start" href="/find">
          Find doctors
        </Link>
      </div>
      <div className="w-10/12 md:w-1/2 absolute md:relative bottom-0 right-0 ">
        <img src="/images/bg.png" alt="" />
      </div>
    </div>
  );
}
