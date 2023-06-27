import { useNavigate } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";

export default function Profile() {
  const navigate = useNavigate()
  return (
    <NavSideBar>
      <div>Profile</div>
    </NavSideBar>
  );
}
