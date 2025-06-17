import React, { useContext, useState } from "react";
import background from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/accounts/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedIn(true);
          getUserData();
          navigate("/home");
        } else {
          toast.error(data.message);
        }
      }else{
        const {data} = await axios.post(backendUrl + '/api/accounts/login',{
          email,
          password
        })

        if(data.success){
          setIsLoggedIn(true)
          getUserData()
          navigate("/home")
        }else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex justify-center items-center relative">
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 bg-black bg-opacity-90 rounded-lg p-12 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-white text-center">{state}</h1>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 mt-6">
          {state === "Sign Up" && (
            <input
              className="rounded-sm py-3 px-4 bg-[#333] text-white text-sm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          )}

          <input
            className="rounded-sm py-3 px-4 bg-[#333] text-white text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />

          <input
            className="rounded-sm py-3 px-4 bg-[#333] text-white text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <p onClick={() => navigate("/reset-password")} className="text-sm text-white cursor-pointer hover:underline text-right">
            Forgot Password?
          </p>

          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 mt-4">
            {state}
          </button>

          <p className="text-xs text-white text-center mt-2">
            {state === "Sign In" ? (
              <>
                New to Netflix?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="cursor-pointer hover:underline hover:text-red-500"
                >
                  Signup here
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Sign In")}
                  className="cursor-pointer hover:underline hover:text-red-500"
                >
                  Login here
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
