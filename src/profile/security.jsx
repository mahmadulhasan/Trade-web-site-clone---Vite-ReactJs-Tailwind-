import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const Security = () => {
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
            <div className="flex items-center justify-between pb-5 border-b border-b-[#605f5f68] ">
              <span className="text-[25px] font-bold">
                Security Settings
              </span>
              <div className="flex flex-col gap-2 p-2 rounded-md bg2nd">
                <span className="text-[15px] font-semibold">
                  Security Level: Moderate
                </span>
                <span className="lighttext">
                  Safeguard is protecting your account.
                </span>
              </div>
            </div>

            {/* 1st section */}
            <div className="flex flex-col gap-3 py-5">
              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-semibold">
                  Two-Factor Authentication (2FA)
                </span>
                <span className="text-sm lighttext ">
                  Choose [Google Verification + Email + Trading Password] or
                  [Mobile Phone + Trading Password] to ensure the safety of your
                  assets.
                </span>
              </div>

              {/* 1st card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68]  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Passkeys{" "}
                      <span className="text-sm rounded-sm p-1 bg-[#03fc4d28]">
                        recomended
                      </span>
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      Passkeys deliver strong, phishing-resistant protection
                      while being a simple and secure sign-in method.{" "}
                      <span className="text-[#03fc4e92]"> Learn more</span>{" "}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
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
                    <span>Not Enabled</span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Configure</div>
                </div>
              </div>

              {/* 2nd card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68]  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Google Verification
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      PUsed to verify account logins, withdrawals, API creation,
                      etc. You can switch between this and SMS verification at
                      any time.{" "}
                      <span className="text-[#03fc4e92]">
                        {" "}
                        View instructions
                      </span>{" "}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
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
                    <span>Not Enabled</span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Configure</div>
                </div>
              </div>

              {/* 3rd card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68] gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">Phone</span>
                    <span className="text-sm lighttext max-w-100">
                      Used to verify account logins, withdrawals, API creation,
                      etc. You can switch between this and Google 2FA at any
                      time.{" "}
                      <span className="text-[#03fc4e92]">
                        {" "}
                        View list of supported countries/regions
                      </span>{" "}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
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
                    <span>Not Enabled</span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Link</div>
                </div>
              </div>

              {/* 4th card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68]  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Trading Password
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      Used to verify transactions, withdrawals, API creation,
                      etc. Be sure to use a strong password and keep it secure.
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
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
                    <span>Not Enabled</span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Configure</div>
                </div>
              </div>
            </div>

            {/* 2nd section */}
            <div className="flex flex-col gap-3 py-5">
              <div className="flex flex-col gap-1">
                <span className="text-[20px] font-semibold">
                  Advanced Settings
                </span>
              </div>

              {/* 1st card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68]  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Anti-Phishing Code
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      Protects you from fake websites, phishing emails, scam
                      messages, and withdrawal risks.
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
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
                    <span>Not Enabled</span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Configure</div>
                </div>
              </div>

              {/* 3rd card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68] gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Third-Party Accounts
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      Google: ma**@**.com
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg> */}
                    <span> </span>
                  </div>
                  <div className="py-1 px-5 rounded-full border">Link</div>
                </div>
              </div>
              {/* 2nd card */}
              <div className="flex flex-row items-center py-5 border-b border-b-[#605f5f68]  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-lock"
                  viewBox="0 0 16 16"
                  className="p-2 text-2xl h-15 bg2nd rounded-full"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                  <div className="flex flex-col gap-0">
                    <span className="text-[17px] font-semibold">
                      Restrict Login IP{" "}
                      <span className="text-sm rounded-sm p-1 bg-[#03fc4d28]">
                        Recommended when balance {">"} 0.1 BTC
                      </span>
                    </span>
                    <span className="text-sm lighttext max-w-100">
                      When enabled, you will be logged out automatically
                      whenever your login IP changes.
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg> */}
                    <span> </span>
                  </div>
                  <div className="">
                    <label class="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
