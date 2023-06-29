import { useState } from "react";
import { loginUser } from "../Reducers/LoginReducer";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

export default function LoginPage() {

    const navigate =useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const userLogin = ()=>{
        const userData = {
            username,
            password
        }
        // console.log(userData)
    dispatch(loginUser(userData))


    navigate("/")
    }
  return (
    <div className="flex flex-col w-full">
      <div className="grid h-screen bg-blue-500 place-items-center">
        <div className="card w-96 bg-base-100 rounded-xl shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl text-blue-700">
              LoginPage
            </h2>

            <div className="form-control">
              <p>UserName</p>
              <label className="input-group mt-4">
                <input
                  type="text"
                  placeholder="enter your username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </label>
              <p className="mt-4">Password</p>
              <label className="input-group mt-4">
                <input
                  type="password"
                  placeholder="enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary rounded-full mt-4"
               onClick={userLogin} 
              >
                login
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
