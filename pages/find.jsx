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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-4 py-8"
          id="results"
        >
          <div className="ring rounded-3xl flex flex-col items-center p-2">
            <img
              src="https://lh3.googleusercontent.com/a/AEdFTp6lbEqUQdLWw42mDUg4q0zbd1L7HJEUHAar_OFZ"
              alt=""
              srcset=""
              className="ring-2 rounded w-10/12 object-cover h-10/12"
            />
            <div className="text-lg font-bold flex flex-col gap-2 items-center">
              Dr. Ashish Kumar (MBBS)
              <div className="badge badge-info badge-lg">Cardiologist</div>
              Over 7 Years Experiance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
