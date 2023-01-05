import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col text-center justify-center items-center min-h-[80vh] p-2">
      <div className="text-lg md:text-xl my-2">
        Scheduling your doctor today
      </div>

      <Link
        className="transition-all text-white bg-purple-500 p-2 rounded-lg text-lg active:scale-95"
        href="/register"
      >
        Schedule / Manage
      </Link>
    </div>
  );
}
