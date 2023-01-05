import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full md:w-10/12 m-auto flex items-center justify-between min-h-[90vh]">
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <div className="text-8xl font-bold">Scheduler</div>
        <div className="text-3xl font-mono">
          Elevate your healthcare experience with our convenient online
          scheduler.
        </div>
        <Link className="btn btn-info self-start" href="/find">
          Find doctors
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <img src="/images/bg.png" alt="" />
      </div>
    </div>
  );
}
