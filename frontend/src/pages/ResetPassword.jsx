import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios"; // Don't forget to import this
import { toast } from "react-toastify"; // Also import toast if you use it
import { AppContext } from "../context/AppContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const {backendUrl} = useContext(AppContext);
  axios.defaults.withCredentials = true;

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    const chars = paste.split("");
    chars.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault()

    try {
      const {data} = await axios.post(backendUrl + '/api/accounts/reset-password-otp', {email})
      data.success ? toast.success(data.message):
      toast.error(data.message)
      data.success && setIsEmailSent(true)
    } catch (error) {
      toast.error(error.message)
    }
  }

const onSubmitOtp = async (e) => {
  e.preventDefault();
  const otpArray = inputRefs.current.map((ref) => ref.value);
  const enteredOtp = otpArray.join("");

  try {
    const { data } = await axios.post(backendUrl + "/api/accounts/verify-otp", {
      email,
      otp: enteredOtp,
    });

    if (data.success) {
      toast.success(data.message);
      setOtp(enteredOtp); // Save valid OTP
      setIsOtpSubmitted(true);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};


  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/accounts/reset-password",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      if (data.success) navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#141414] text-white font-[Poppins] min-h-screen overflow-hidden">
      <div className="flex justify-between items-center px-[6%] py-2 sm:py-5 fixed w-full z-10 bg-[#141414]">
        <div className="flex gap-8 items-center">
          <img src={logo} alt="Logo" className="w-12 sm:w-24" />
        </div>
        <h1
          className="cursor-pointer text-red-600 font-bold hover:text-white"
          onClick={() => navigate("/")}
        >
          Sign in
        </h1>
      </div>

      <div className="flex justify-center items-center pt-28 pb-12 min-h-screen">
        <div className="z-10 bg-black bg-opacity-90 rounded-lg p-12 w-[90%] max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Reset Password
          </h1>

          {/* Step 1: Enter Email */}
          {!isEmailSent && (
            <form
              className="flex flex-col gap-4"
              onSubmit={onSubmitEmail}
            >
              <input
                className="rounded-sm py-3 w-full px-4 bg-[#333] text-white text-sm"
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded py-3"
              >
                Submit
              </button>
              <p className="text-sm text-center mt-2">
                Enter your registered email address.
              </p>
            </form>
          )}

          {/* Step 2: OTP */}
          {isEmailSent && !isOtpSubmitted && (
            <form
              onSubmit={onSubmitOtp}
              className="flex flex-col items-center text-sm"
            >
              <h1 className="text-white text-2xl font-bold mb-4 text-center">
                Reset Password OTP
              </h1>
              <p className="text-center mb-6 text-gray-400">
                Enter the 6-digit code sent to your email.
              </p>
              <div
                className="flex justify-between gap-2 mb-8"
                onPaste={handlePaste}
              >
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      required
                      className="w-12 h-12 bg-[#333] text-white text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onInput={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded"
              >
                Submit
              </button>
            </form>
          )}

          {/* Step 3: New Password */}
          {isEmailSent && isOtpSubmitted && (
            <form
              onSubmit={onSubmitNewPassword}
              className="flex flex-col items-center text-sm"
            >
              <h1 className="text-white text-2xl font-bold mb-4 text-center">
                New Password
              </h1>
              <p className="text-center mb-6 text-gray-400">
                Enter the new password below.
              </p>
              <div className="mb-4 w-full px-5 py-3 rounded bg-[#333] flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
