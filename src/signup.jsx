import React, { useState } from "react";
import Massage from "./component/massage";
import { useTheme } from "./context/themeprovider.jsx";

const Signup = () => {
  const { dark, setDark } = useTheme();
  const [slot, setslot] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="m-0 p-0 min-h-screen w-full flex flex-col ">
      <Massage />
      {/* Top bar */}
      <div className="flex flex-row items-center justify-between p-2 w-full ">
        <a href="/">
          <h1 className="font-bold text-[1.5rem]">K-Exchange</h1>
        </a>

        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-globe-central-south-asia-fill "
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 0 0-3.115.73.48.48 0 0 0 .137.292.488.488 0 0 1-.126.78l-.292.145a.7.7 0 0 0-.187.136l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.461-.041A6.97 6.97 0 0 0 1 8a6.96 6.96 0 0 0 .883 3.403l.86-.213c.444-.112.757-.512.757-.971v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .153-1.54L3.12 6.622a.415.415 0 0 1 .542-.624l1.09.817a.5.5 0 0 0 .523.047A.5.5 0 0 1 6 7.31v.455a.8.8 0 0 0 .13.432l.796 1.193a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189q.042-.127.116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.083.392.218.557.875 1.63 2.282 2.365 2.282l.04-.003A7 7 0 0 0 8 1"
            />
          </svg>
          {/* theme */}
            <div
              className="text-md font-semibold"
              onClick={() => setDark(!dark)} >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-moon-fill text-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              )}
            </div>
        </div>
      </div>

      {/* Main section */}
      <div className="flex flex-row flex-wrap-reverse md:pt-15 h-full items-center  justify-center lg:justify-around lg:px-25 md:px-10 min-h-[70vh] ">
        {/* Left: Form */}
        <div className=" flex flex-col gap-7.5 lg:w-1/2 w-full px-10  md:mt-0 py-5 md:py-0 max-w-[400px]  ">
          <div className="flex flex-col">
            <span className=" text-[28px]   font-bold whitespace-nowrap ">
              Sign up for K-Exchange
            </span>
            <span className="text-sm lighttext">
              Sign up a K-Exchange account with your email or phone number
            </span>
          </div>

          <div className="relative">
            <div className="flex flex-row gap-2 justify-between w-full ">
              <span
                className="hover:font-bold cursor-pointer text-center w-1/2"
                onClick={() => {
                  setslot(1);
                  setShowPassword(false);
                }}
              >
                Email
              </span>
              <span
                className="hover:font-bold cursor-pointer text-center w-1/2"
                onClick={() => {
                  setslot(2);
                  setShowPassword(false);
                }}
              >
                Mobile
              </span>
            </div>
            <div
              className="absolute h-[2px] primarycolorbg w-1/2 transform transition-all duration-300"
              style={{
                left: `${(slot - 1) * (100 / 2)}%`,
              }}
            ></div>
          </div>

          <div>
            {slot == 1 && (
              <div className="flex flex-col gap-5">
                <span className="">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-700 rounded-sm bg2nd "
                />
                {!showPassword && (
                  <div
                    onClick={() => setShowPassword(true)}
                    className="w-full bg-[#a83535] text-center font-semibold p-2 rounded-sm cursor-pointer hover:bg-[#c33b3b] transition"
                  >
                    <span>Next</span>
                  </div>
                )}
                {showPassword && (
                  <>
                    <span className="lighttext">Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full p-2 border border-gray-700 rounded-sm bg2nd "
                    />
                    <div className="w-full bg-[#a83535] text-center font-semibold p-2 rounded-sm cursor-pointer hover:bg-[#c33b3b] transition">
                      <span>Login</span>
                    </div>
                  </>
                )}
              </div>
            )}
            {slot == 2 && (
              <div className="flex flex-col gap-5">
                <span className="">Mobile</span>
                <div className="flex flex-row w-full gap-1 items-center">
                  <select className="w-[35%] p-2 bg2nd border border-gray-700  rounded-l-md focus:outline-none focus:border-gray-500">
                    <option value="+91">India +91</option>
                    <option value="+1">USA +1</option>
                    <option value="+44">UK +44</option>
                    <option value="+81">Japan +81</option>
                    <option value="+61">Australia +61</option>
                    <option value="+49">Germany +49</option>
                    <option value="+33">France +33</option>
                    <option value="+971">UAE +971</option>
                    <option value="+86">China +86</option>
                    <option value="+55">Brazil +55</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-[65%] p-2 bg2nd border border-gray-700  rounded-r-md focus:outline-none focus:border-gray-500 placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-5 ">
                  {!showPassword && (
                    <div
                      onClick={() => setShowPassword(true)}
                      className="w-full bg-[#a83535] text-center font-semibold p-2 rounded-sm cursor-pointer hover:bg-[#c33b3b] transition"
                    >
                      <span>Next</span>
                    </div>
                  )}
                  {showPassword && (
                    <>
                      <span className="lighttext">Password</span>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-2 border border-gray-700 rounded-sm bg2nd "
                      />
                      <div className="w-full bg-[#a83535] text-center font-semibold p-2 rounded-sm cursor-pointer hover:bg-[#c33b3b] transition">
                        <span>Login</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-0 w-full my-4">
            <div className="flex-1 h-[2px] bg-gray-500"></div>
            <span className="px-3  text-sm">OR</span>
            <div className="flex-1 h-[2px] bg-gray-500"></div>
          </div>

          <div className="flex flex-row w-full items-center justify-center gap-5">
            {/* Google button */}
            <button className="p-2 border rounded-full  hover:bg-gray-800 transition">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-google"
              >
                <path
                  d="M15.8757 6.58203H8.00098V9.64042H12.5423C12.3288 10.2165 12.0069 10.7465 11.5941 11.2015C11.3308 11.4981 11.0369 11.7641 10.708 11.9879L13.2487 14.0262C14.2949 13.1201 15.0871 11.9571 15.5476 10.6519C16.008 9.34668 16.1208 7.94406 15.8748 6.58203"
                  fill="#278BE6"
                ></path>
                <path
                  d="M10.7077 11.9898C9.91072 12.5369 8.96658 12.8296 7.99985 12.8292C6.56816 12.8292 5.29646 12.1938 4.4121 11.2025C4.00345 10.7457 3.68616 10.2149 3.47742 9.63867L1.41752 11.2025L0.871094 11.6186C1.53833 12.9364 2.55773 14.0436 3.81613 14.8172C5.07453 15.5908 6.52269 16.0005 7.99985 16.0008C8.50404 16.0008 8.99564 15.9487 9.47377 15.8597C10.8735 15.5979 12.1773 14.9653 13.2493 14.0281L10.7077 11.9898Z"
                  fill="#15B457"
                ></path>
                <path
                  d="M3.17253 8.00184C3.17253 7.40867 3.29476 6.84696 3.49068 6.3212L0.90143 4.32422C0.309185 5.45961 -5.99668e-05 6.72126 8.72215e-09 8.00184C8.72215e-09 8.76037 0.11324 9.49193 0.310063 10.1876C0.408923 10.5363 0.528455 10.876 0.671354 11.2031C0.733366 11.3451 0.80167 11.4817 0.870872 11.6192L1.4182 11.204L3.4763 9.64023C3.40732 9.45731 3.34969 9.27032 3.30374 9.08031C3.21932 8.72695 3.1753 8.36514 3.17253 8.00184Z"
                  fill="#F0BB2F"
                ></path>
                <path
                  d="M9.4734 0.140358C8.98739 0.0490486 8.494 0.00271793 7.99948 0.00195312C5.13432 0.00195312 2.62776 1.51182 1.21495 3.77663C1.12507 3.92043 1.0334 4.06423 0.952518 4.21432C0.934543 4.24937 0.918365 4.28621 0.900391 4.32216L3.48964 6.32184C3.60737 6.00639 3.75207 5.70531 3.93002 5.42491C4.2266 4.95757 4.60497 4.55493 5.03906 4.21432C5.8587 3.57262 6.87786 3.17358 7.99948 3.17358C8.51625 3.17358 9.00606 3.27065 9.4734 3.42073C10.0216 3.59778 10.5249 3.86651 10.9671 4.21432C11.039 4.27004 11.1199 4.31497 11.1864 4.37519L11.3482 4.21342L13.4296 2.12656C12.325 1.10386 10.9533 0.414911 9.4734 0.139459"
                  fill="#EC3838"
                ></path>
              </svg>
            </button>

            {/* Apple button */}
            <button className="p-2 border rounded-full  hover:bg-gray-800 transition">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-apple"
              >
                <path
                  d="M12.6187 10.5291C13.0586 11.1515 13.563 11.5539 14.1317 11.7364C13.8849 12.4983 13.4932 13.2924 12.9567 14.1187C12.1304 15.3635 11.3148 15.9859 10.51 15.9859C10.2095 15.9859 9.76421 15.8839 9.174 15.68C8.62671 15.4761 8.14918 15.3742 7.7414 15.3742C7.33362 15.3742 6.88292 15.4815 6.38929 15.6961C5.8742 15.9 5.45032 16.002 5.11766 16.002C4.15187 16.002 3.20217 15.181 2.26857 13.5392C1.33496 11.9188 0.868164 10.3252 0.868164 8.75849C0.868164 7.3098 1.22229 6.12402 1.93054 5.20115C2.66025 4.27828 3.56166 3.81684 4.63476 3.81684C4.87085 3.81684 5.13376 3.84635 5.4235 3.90537C5.71323 3.96439 6.0137 4.07439 6.3249 4.23535C6.65757 4.41778 6.93121 4.54387 7.14583 4.61362C7.36045 4.68337 7.52678 4.71825 7.64482 4.71825C7.78433 4.71825 7.99895 4.68606 8.28869 4.62167C8.57842 4.55729 8.86816 4.43924 9.1579 4.26755C9.4691 4.09585 9.73738 3.96708 9.96273 3.88123C10.1881 3.79538 10.4188 3.75246 10.6549 3.75246C11.4061 3.75246 12.0821 3.95635 12.6831 4.36413C13.005 4.57875 13.3323 4.89531 13.6649 5.31382C13.1713 5.74307 12.8118 6.11865 12.5865 6.44058C12.168 7.04152 11.9587 7.69612 11.9587 8.40437C11.9587 9.18773 12.1787 9.89598 12.6187 10.5291ZM9.38326 3.01201C9.00767 3.36614 8.66427 3.59686 8.35307 3.70417C8.24576 3.73636 8.10894 3.76587 7.94261 3.7927C7.77628 3.81953 7.5858 3.84367 7.37118 3.86513C7.38191 2.9208 7.62873 2.10524 8.11162 1.41845C8.59452 0.731665 9.38862 0.259498 10.4939 0.00195312C10.5154 0.109264 10.5315 0.184381 10.5422 0.227305V0.404368C10.5422 0.790685 10.451 1.22529 10.2686 1.70819C10.0754 2.18036 9.7803 2.61496 9.38326 3.01201Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>

          <div className="text-center">
            <a href="/login" className="primarycolor ">
              Already have account ? Login
            </a>
          </div>
          <div>
            <div className=" font-semibold  flex flex-col  w-full text-center justify-center">
              <span className="whitespace-nowrap">By registering an account, you agree to</span> 
              <div className="flex justify-between">
              <a href="#">
                <span className="primarycolor "> XT's User Agreement</span>
              </a>
              <a href="#">
                <span className="primarycolor">Privacy Policy</span>
              </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="max-w-[400px] flex flex-col-reverse justify-between md:flex-col h-full ">
          <img
            src="./signup.png"
            alt=""
            className="hidden lg:flex  lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
