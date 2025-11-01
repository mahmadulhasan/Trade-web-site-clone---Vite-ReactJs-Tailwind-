import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const Exporthistory = () => {
  return (
    <div className="flex flex-col  relative scroll-smooth">
      <div className="fixed h-[10vh]  top-0 left-0 navbg z-50">
        <Navbar />
      </div>
      <div className=" mt-[10vh] flex flex-row mainbody ">
        <div className="sidebar background h-[89.7vh] overflow-auto scrollbar-hide">
          <Sidebar />
        </div>
        <div className="w-full   ">
          <div className="md:p-10 p-5 md:h-[89.7vh] overflow-auto scrollbar-hide">
            <div className="py-10 border-b border-b-[#605f5f68] w-full flex justify-between">
              <span className="text-[25px] font-bold">Export History</span>
              <div className="flex gap-1 rounded-full px-5 py-1 primarycolorbg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-bar-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <span className="font-bold">Export</span>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 lighttext">Time</th>
                  <th className="py-2 lighttext">Type</th>
                  <th className="py-2 lighttext">Coin</th>
                  <th className="py-2 lighttext">Period</th>
                  <th className="py-2 lighttext">Status</th>
                  <th className="py-2 lighttext">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2">******</td>
                  <td className="py-2">******</td>
                  <td className="py-2">******</td>
                  <td className="py-2">******</td>
                  <td className="py-2">******</td>
                  <td className="py-2">******</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exporthistory;
