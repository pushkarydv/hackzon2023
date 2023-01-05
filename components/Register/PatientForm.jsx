import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import AuthButton from "../AuthenticationButtons/AuthButton";
export default function PatientForm() {
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPatientsDetails() {
      const docRef = doc(db, "patients", session.user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const data = docSnap.data();

        const form = document.querySelector("#patientRegForm");

        form.gender.value = data.gender;
        form.mobile.value = data.mobile;
        form.blood.value = data.blood;
        form.dob.value = data.dob;
        form.height.value = data.height;
        form.weight.value = data.weight;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    fetchPatientsDetails();
  }, []);

  return (
    <form
      id="patientRegForm"
      action=""
      className="w-10/12 flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        let name = form.get("fullname");
        let email = form.get("email");
        let gender = form.get("gender");
        let mobile = form.get("mobile");
        let blood = form.get("blood");
        let dob = form.get("dob");
        let height = form.get("height");
        let weight = form.get("weight");
        let isDoctor = false;

        await setDoc(doc(db, "patients", form.get("email")), {
          name,
          email,
          gender,
          mobile,
          blood,
          dob,
          height,
          weight,
          isDoctor,
        }).then(() => {
          alert("saved successfully");
        });
      }}
    >
      {/* {JSON.stringify(session)} */}
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered input-info w-full input-disabled"
        defaultValue={session.user.name}
        name="fullname"
      />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered input-info w-full input-disabled"
        defaultValue={session.user.email}
        name="email"
      />
      <select
        className="select w-full select-bordered border-info select-info"
        name="gender"
      >
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
        name="mobile"
      />
      <input
        type="text"
        placeholder="Enter your blood group (ex: A+, A-...)"
        className="input input-bordered input-info w-full"
        onKeyUp={(e) => {
          e.target.value = e.target.value.toUpperCase();
          //   console.log(e.target.value);
        }}
        name="blood"
      />
      <input
        type="date"
        name="dob"
        id=""
        className="input input-bordered input-info"
      />
      <input
        type="number"
        placeholder="Enter Your Height (cm)"
        className="input input-bordered input-info w-full"
        name="height"
      />
      <input
        type="number"
        placeholder="Enter Your Weight (kg)"
        className="input input-bordered input-info w-full"
        name="weight"
      />
      <div className="flex gap-4">
        <button type="submit" className="btn  btn-info self-start px-12">
          Save
        </button>
        <AuthButton />
      </div>
    </form>
  );
}
