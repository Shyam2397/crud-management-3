import { useNavigate } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";

export default function Profile() {
  const navigate = useNavigate()
  return (
    <NavSideBar>
      <div>Profile
      <div className="card bg-white rounded-3xl w-52 p-3 place-items-center">
            <h1 className="font-bold">login</h1>
            <button 
              className="btn btn-primary rounded-full mt-3"
              onClick={() => navigate("/login")}
              >
              LoginPage
            </button>
          </div>
      </div>
    </NavSideBar>
  );
}
