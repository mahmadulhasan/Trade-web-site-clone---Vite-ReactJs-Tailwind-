import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const Identityverification = () => {
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
          <div className="md:p-10 p-5  md:h-[89.7vh] overflow-auto scrollbar-hide">
            <div className="py-5 border-b border-b-[#605f5f68] text-[25px] font-bold">
              Identity Verification
            </div>
            <div className="py-5">
              <span className="text-[20px] font-semibold">
                Let's get you verified!
              </span>
            </div>

            <div className="flex lg:flex-row flex-col w-full gap-5">
              <div className="lg:w-2/3 w-full flex flex-col gap-5">
                <div className="w-full border border-[#605f5f68] flex flex-row gap-5 items-center rounded-2xl px-5 py-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-plus"
                    viewBox="0 0 16 16"
                    className="h-[60px] w-[60px]"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <div className="flex flex-col gap-0">
                    <span className="text-2xl font-semibold">
                      Individual Verification
                    </span>
                    <span className="lighttext">
                      For individuals seeking to trade, send, receive, and
                      manage cryptocurrency independently.
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                    className="h-[60px] w-[60px]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </div>
                <div className="w-full border border-[#605f5f68] flex flex-row gap-5 items-center rounded-2xl px-5 py-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-buildings"
                    viewBox="0 0 16 16"
                    className="h-[60px] w-[60px]"
                  >
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                  </svg>
                  <div className="flex flex-col gap-0">
                    <span className="text-2xl font-semibold">
                      Institutional Verification
                    </span>
                    <span className="lighttext">
                      For institutions seeking to securely store, invest,
                      receive, pay, and manage crypto assets for their clients.
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                    className="h-[60px] w-[60px]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </div>
              </div>
              <div className="lg:w-1/3 w-full border border-[#605f5f68] rounded-2xl px-5 py-10 items-center flex flex-col gap-10">
                <span className="text-[20px] font-semibold flex justify-start">FAQ</span>

                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full gap-5">
                    <span className="text-[18px] font-semibold">
                      Can I complete both Individual and Institutional
                      Verification on the same account?
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      
                      fill="currentColor"
                      class="bi bi-dash-circle"
                      viewBox="0 0 16 16"
                      className="h-[40px] w-[40px]"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg>
                  </div>
                  <span className="lighttext">No, you may only choose one verification type per account.</span>
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full gap-5">
                    <span className="text-[18px] font-semibold">
                      What is the difference between Individual Verification and Institutional Verification?
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      
                      fill="currentColor"
                      class="bi bi-dash-circle"
                      viewBox="0 0 16 16"
                      className="h-[40px] w-[40px]"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg>
                  </div>
                  <span className="lighttext">Individual Verification (KYC) is intended for personal accounts and typically requires basic identity documents along with a facial recognition process. Institutional Verification (KYB) is intended for companies, organizations, or legal entities, and requires business licenses, legal representative information, company documents, and additional compliance reviews.</span>
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full gap-5">
                    <span className="text-[18px] font-semibold">
                      How can I identify my company type?
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      
                      fill="currentColor"
                      class="bi bi-dash-circle"
                      viewBox="0 0 16 16"
                      className="h-[40px] w-[40px]"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg>
                  </div>
                  <span className="lighttext">Click here to identify your company type.</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identityverification;
