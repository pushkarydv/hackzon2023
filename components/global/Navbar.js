import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  // state to manage navbar toggle
  const [navState, setNavState] = useState("closed");
  // function to toggle navbar using a custom className added at end of file using style jsx
  function ToggleNavbar() {
    let lines = document.querySelectorAll(".hamburger-line");
    let navItems = document.querySelector(".nav-items");
    if (navState === "closed") {
      lines[0].classList.add("rotate-45");
      lines[0].classList.add("translate-y-1");
      lines[1].classList.add("-rotate-45");
      lines[1].classList.add("-translate-y-1");
      navItems.classList.add("nav-items-open");
      setNavState("open");
    } else {
      lines[0].classList.remove("rotate-45");
      lines[0].classList.remove("translate-y-1");
      lines[1].classList.remove("-rotate-45");
      lines[1].classList.remove("-translate-y-1");
      navItems.classList.remove("nav-items-open");
      setNavState("closed");
    }
  }
  return (
    <nav className="p-1 text-xl flex flex-row justify-between items-center overflow-x-hidden sticky h-[10vh] top-0">
      <div className=" font-bold text-2xl mx-3 my-3 text-violet-600">
        Schedular
      </div>
      <button
        className="mx-3 my-3 md:hidden outline-none no-underline hamburger w-6 h-6 flex flex-col justify-evenly cursor-pointer relative z-50"
        onClick={() => {
          ToggleNavbar();
        }}
      >
        <div className="hamburger-line transition-all w-full bg-violet-500 h-1 rounded-full "></div>
        <div className="hamburger-line transition-all w-full bg-violet-500 h-1 rounded-full "></div>
      </button>
      <div className="transition-all nav-items hidden md:flex flex-row justify-between items-center gap-2 ">
        <NavigateTOPages text="Home" href="/" />
        <NavigateTOPages text="SignIn" href="/signin" />
        <NavigateTOPages text="Register" href="/register" />
      </div>
      <style jsx>{`
        .nav-items-open {
          overflow-x: hidden;
          display: flex;
          background-color: aliceblue;
          flex-direction: column;
          position: absolute;
          top: 0;
          left: 0;
          justify-content: center;
          flex-gap: 2rem;
          z-index: 10;
          width: 100vw;
          height: 100vh;
          transition: 0.6s ease;
        }
      `}</style>
    </nav>
  );
}

function NavigateTOPages({ href, text }) {
  return (
    <Link
      href={href}
      className="transition-all rounded-full no-underline hover:bg-violet-100 text-slate-700 py-1 px-3"
    >
      {text}
    </Link>
  );
}
