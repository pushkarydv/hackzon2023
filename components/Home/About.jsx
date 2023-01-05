import React from "react";

export default function About() {
  return (
    <div className="w-full md:w-10/12 m-auto flex flex-col md:flex-row justify-center items-center justify-between min-h-screen">
      <div className="w-full md:w-1/2">
        <img src="/images/bg2.png" alt="" />
      </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <div className="text-8xl font-bold">About Us</div>
        <div className="text-3xl font-mono">
          Elevate your healthcare experience with our convenient online
          scheduler.
        </div>
      </div>
    </div>
  );
}
