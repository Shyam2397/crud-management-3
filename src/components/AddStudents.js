import { useState } from "react";
import NavSideBar from "./NavSideBar";
import { useNavigate } from "react-router-dom";
import { Appstate } from "../context/AppProvider";

export default function AddStudents() {
  const { studentData, setData } = Appstate();
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Batch, setBatch] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  function addStudent() {
    const newStudentObj = {
      id,
      Name,
      Email,
      Qualification,
      Batch,
      mobile
    };
    setData([...studentData, newStudentObj]);

    navigate("/students/all");
  }

  return (
    <NavSideBar>
      <div className="form-control text-center items-center">
        <h1 className="m-5">Fill the Data to add a New Students</h1>
        <label className="input-group">
          <span className="w-48">ID</span>
          <input
            type="number"
            placeholder="Enter your id"
            className="input input-bordered w-auto m-5"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">NAME</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-auto m-5"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">MAIL</span>
          <input
            type="text"
            placeholder="Enter your mail"
            className="input input-bordered w-auto m-5"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">QUALIFICATION</span>
          <input
            type="text"
            placeholder="Enter your qualification"
            className="input input-bordered w-auto m-5"
            value={Qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">BATCH</span>
          <input
            type="text"
            placeholder="Enter your batch"
            className="input input-bordered w-auto m-5"
            value={Batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </label>
        <label className="input-group">
          <span className="w-48">MOBILE NUMBER</span>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="input input-bordered w-auto m-5"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <button
          className="btn btn-primary w-48 mt-20 rounded-full"
          onClick={() => addStudent()}
        >
          Add Student
        </button>
      </div>
    </NavSideBar>
  );
}
