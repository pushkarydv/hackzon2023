import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import AuthButton from "../AuthenticationButtons/AuthButton";

export default function DoctorForm() {
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPatientsDetails() {
      const docRef = doc(db, "doctors", session.user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const data = docSnap.data();

        const form = document.querySelector("#patientRegForm");

        form.aadhar.value = data.aadhar;
        form.speciality.value = data.speciality;
        form.experiance.value = data.experiance;
        form.degree.value = data.degree;
        form.gender.value = data.gender;
        form.mobile.value = data.mobile;
        form.blood.value = data.blood;
        form.dob.value = data.dob;
        form.fromDay.value = data.from.day;
        form.fromTime.value = data.from.time;
        form.toDay.value = data.to.day;
        form.toTime.value = data.to.time;
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
        let aadhar = form.get("aadhar");
        let speciality = form.get("speciality");
        let experiance = form.get("experiance");
        let degree = form.get("degree");
        let gender = form.get("gender");
        let mobile = form.get("mobile");
        let blood = form.get("blood");
        let dob = form.get("dob");
        let isDoctor = true;
        let from = {
          time: form.get("fromTime"),
          day: form.get("fromDay"),
        };
        let to = {
          time: form.get("toTime"),
          day: form.get("toDay"),
        };
        let ppf = session.user.image;

        await setDoc(doc(db, "doctors", form.get("email")), {
          name,
          email,
          aadhar,
          speciality,
          experiance,
          degree,
          gender,
          mobile,
          blood,
          dob,
          from,
          to,
          isDoctor,
          ppf,
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
      <input
        type="text"
        placeholder="Aadhar (xxxx-xxxx-xxxx)"
        className="input input-bordered input-info w-full "
        name="aadhar"
      />
      <input
        type="text"
        placeholder="Speciality (ex: Cardiology)"
        className="input input-bordered input-info w-full "
        name="speciality"
      />
      <input
        type="text"
        placeholder="Experiance"
        className="input input-bordered input-info w-full "
        name="experiance"
      />
      <input
        type="text"
        placeholder="Highest Degree"
        className="input input-bordered input-info w-full "
        name="degree"
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

      <div className="flex justify-between items-center">
        <div className="">
          <input
            type="time"
            name="fromTime"
            id=""
            className="input input-bordered input-info mr-2"
          />
          <select
            name="fromDay"
            id=""
            className="select select-bordered select-info"
          >
            <option disabled defaultValue selected>
              Select your time
            </option>
            <option value={"Monday"}>Monday</option>
            <option value={"Tuesday"}>Tuesday</option>
            <option value={"Wednesday"}>Wednesday</option>
            <option value={"Thursday"}>Thursday</option>
            <option value={"Friday"}>Friday</option>
            <option value={"Saturday"}>Saturday</option>
            <option value={"Sunday"}>Sunday</option>
          </select>
        </div>
        <span>to</span>
        <div className="">
          <input
            type="time"
            name="toTime"
            id=""
            className="input input-bordered input-info mr-2"
          />
          <select
            name="toDay"
            id=""
            className="select select-bordered select-info"
          >
            <option disabled defaultValue selected>
              Select your time
            </option>
            <option value={"Monday"}>Monday</option>
            <option value={"Tuesday"}>Tuesday</option>
            <option value={"Wednesday"}>Wednesday</option>
            <option value={"Thursday"}>Thursday</option>
            <option value={"Friday"}>Friday</option>
            <option value={"Saturday"}>Saturday</option>
            <option value={"Sunday"}>Sunday</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button type="submit" className="btn  btn-info self-start px-12">
          Save
        </button>
        <AuthButton />
      </div>
    </form>
  );
}
