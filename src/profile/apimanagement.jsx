import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const Apimanagement = () => {
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
            <div className="py-10 border-b border-b-[#605f5f68]">
              <span className="text-[25px] font-bold">API Management</span>
            </div>

            <div className="py-10 flex flex-col gap-5">
              <span className="text-[20px] font-semibold">
                For security, enable at least two of the following options:
              </span>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span className="lighttext">
                  Link your phone number or add Google 2FA.
                </span>
                <span className="text-[#03fc4e95]">Edit</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span className="lighttext">Set trading password.</span>
                <span className="text-[#03fc4e95]">Edit</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span className="lighttext">Linked an email.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apimanagement;
