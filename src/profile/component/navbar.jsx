import React, { useState } from "react";
import Sideprofile from "./sideprofile";
import Sidenotification from "./sidenotification";
import Sidesearch from "./sidesearch";
import Sidenav from "./sidenav";

const Navbar = () => {
  const [sidebaropen, setSidebaropen] = useState(false);
  const [value, setvalue] = useState("");
  return (
    <div className="fixed h-[10vh]  top-0 left-0 navbg w-full gap-2 flex flex-row justify-between whitespace-nowrap items-center p-2">
      {/* sidebar animation */}
      <div
        className={`absolute w-full md:w-90 right-0 top-0 h-screen overflow-auto pt-10 pb-5 bg2nd md:border-l border-l-[#1111112b]  scrollbar-hide transform transition-all  duration-300 ${
          sidebaropen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex justify-between px-4 items-center">
          <span className="text-[25px] font-bold">
            {value === 1 && "Profile "}
            {value === 2 && "Search"}
            {value === 3 && "Notification"}
          </span>

          <div
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              setSidebaropen(false), setvalue("");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <div className="px-2 py-5  ">
          {value === 1 && <Sideprofile />}
          {value === 2 && <Sidesearch />}
          {value === 3 && <Sidenotification />}
          {value === 4 && <Sidenav />}
        </div>
      </div>

      <div className="flex flex-row gap-5 w-full items-center">
        <a href="/">
          <div className="cursor-pointer font-bold text-3xl">K-EXC</div>
        </a>

        {/* absolute */}
        <div className="flex flex-row w-full justify-between">
          <ul className="flex flex-row gap-5 items-center navitem">
            <li>Add funds</li>
            <li>Markets</li>
            <li>Trade</li>
            <li>Derivatives</li>
            <li>Lunch Hub</li>
            <li>Earn</li>
            <li>Institutional</li>
            <li>More</li>
          </ul>
          <ul className="sm:flex flex-row gap-1 py-1 px-2 rounded-full primarycolorbg items-center hidden ">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                />
              </svg>
            </li>
            <li>Add Funds</li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="flex flex-row gap-3 items-center">
          {/* profile */}
          <li
            className="cursor-pointer"
            onClick={() => {
              setSidebaropen(!sidebaropen), setvalue(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </li>
          {/* search bar */}
          <li
            className="cursor-pointer"
            onClick={() => {
              setSidebaropen(!sidebaropen), setvalue(2);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </li>
          {/* notification */}
          <li
            className="cursor-pointer"
            onClick={() => {
              setSidebaropen(!sidebaropen), setvalue(3);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              {setSidebaropen(!sidebaropen),
                setvalue(4)
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-border-width"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
