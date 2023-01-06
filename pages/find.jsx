import React from "react";
import { BsFillGrid3X3GapFill, BsListCheck, BsSearch } from "react-icons/bs";

export default function find() {
  return (
    <div className="w-full">
      <div className="w-full m-auto">
        <h1 className="text-4xl md:text-6xl w-full text-center font-bold py-32 bg-blue-200">
          Search Doctors
        </h1>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto">
        <form
          action=""
          className="flex py-8 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button className="btn btn-outline btn-info btn-xl">
            <BsFillGrid3X3GapFill />
          </button>
          <button className="btn btn-outline btn-info btn-xl">
            <BsListCheck />
          </button>
          <input
            type="text"
            placeholder="Search Doctor by name, speciality..."
            className="input input-bordered input-info w-full"
          />
          <button type="submit" className="btn btn-outline btn-info btn-xl">
            <BsSearch />
          </button>
        </form>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4"
          id="results"
        ></div>
      </div>
    </div>
  );
}
