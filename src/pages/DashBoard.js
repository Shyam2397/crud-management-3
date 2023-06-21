import { useNavigate } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";

export default function DashBoard() {
  const navigate = useNavigate();

  return (
    <NavSideBar>
      <div>
        <div className="text-center h-10 font-bold text-4xl">
          <h1 className=" m-5">Welcome</h1>
        </div>
        <div className="grid grid-cols-5 mt-10">
          <div className="card bg-white rounded-3xl w-52 p-3 place-items-center">
            <h1 className="font-bold">Students</h1>
            <button
              className="btn btn-primary rounded-full mt-3"
              onClick={() => navigate("/AddStudents")}
            >
              Add More Students
            </button>
          </div>
          <div className="card bg-white rounded-3xl w-52 p-3 place-items-center">
            <h1 className="font-bold">Teachers</h1>
            <button className="btn btn-primary rounded-full mt-3">
              Add more teachers
            </button>
          </div>
        </div>
      </div>
    </NavSideBar>
  );
}
