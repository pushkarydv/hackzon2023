import React from "react";

export default function About() {
  return (
    <div className="w-11/12 md:w-10/12 m-auto flex items-center justify-center min-h-screen flex-col md:flex-row relative">
      <div className="w-10/12 md:w-1/2 absolute md:relative bottom-0 left-0 ">
        <img src="/images/bg2.png" alt="" />
      </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4 self-center md:self-auto justify-center">
        <div className="md:text-8xl text-5xl font-bold">About Us</div>
        <div className="md:text-2xl text-xl ">
          <p>
            One of the main challenges patients face when seeking medical care
            is the lack of access to experienced doctors, especially those who
            specialize in specific areas of medicine. This can be especially
            difficult for people who live in remote areas or have mobility
            issues. Our platform aims to address this problem by making it easy
            for patients to consult with doctors from the comfort of their own
            homes.
          </p>
          <p>
            Our online resource for consulting doctors aims to provide a
            convenient and accessible way for patients to connect with medical
            professionals from around the world. With our platform, patients can
            search through profiles of verified doctors and select the one that
            best meets their needs.
          </p>
        </div>
      </div>
    </div>
  );
}
