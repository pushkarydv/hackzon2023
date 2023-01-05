import { useSession } from "next-auth/react";
import React from "react";

export default function PatientForm() {
  const { data: session, status } = useSession();

  return (
    <form
      action=""
      className="w-10/12 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* {JSON.stringify(session)} */}
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered input-info w-full input-disabled"
        defaultValue={session.user.name}
      />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered input-info w-full input-disabled"
        defaultValue={session.user.email}
      />
      <select className="select w-full select-bordered border-info select-info">
        <option disabled defaultValue>
          Select your gender
        </option>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
        <option value={"other"}>Other...</option>
      </select>
      <input
        type="tel"
        placeholder="+91 9876543210"
        className="input input-bordered input-info w-full"
      />
      <input
        type="text"
        placeholder="Enter your blood group (ex: A+, A-...)"
        className="input input-bordered input-info w-full"
        onKeyUp={(e) => {
          e.target.value = e.target.value.toUpperCase();
          //   console.log(e.target.value);
        }}
      />
      <input
        type="date"
        name=""
        id=""
        className="input input-bordered input-info"
      />
      <input
        type="number"
        placeholder="Enter Your Height (cm)"
        className="input input-bordered input-info w-full"
      />
      <input
        type="number"
        placeholder="Enter Your Weight (kg)"
        className="input input-bordered input-info w-full"
      />
      <button type="submit" className="btn  btn-info self-start px-12">
        Save
      </button>
    </form>
  );
}
