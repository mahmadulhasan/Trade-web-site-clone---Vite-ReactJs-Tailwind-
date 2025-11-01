import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const Reward = () => {
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
            <div className="py-10  w-full flex flex-wrap justify-between">
              <span className="text-[25px] font-bold">My Rewards</span>

              <div className="flex gap-1 w-full md:w-fit overflow-auto scrollbar-hide whitespace-nowrap">
                <div className="flex gap-1 rounded-full px-5 py-1 border items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-postcard"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"
                    />
                  </svg>
                  <span className="font-bold">Get More Coupons</span>
                </div>
                <div className="flex gap-1 rounded-full px-5 py-1 border items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock-history"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <span className="font-bold">History</span>
                </div>
                <div className="flex gap-1 rounded-full px-5 py-1 border items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-journal-bookmark-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                  <span className="font-bold">How to Use</span>
                </div>
              </div>
            </div>

            {/* 2nd section */}
            <div className="flex gap-3 overflow-auto scrollbar-hide whitespace-nowrap ">
              <span className="text-[25px] font-bold">Coupons & Vouchers</span>
              <span className="text-[25px] font-bold">Crypto</span>
              <span className="text-[25px] font-bold">Others</span>
            </div>
            {/* 3rd section */}
            <div className="flex gap-3 overflow-auto scrollbar-hide whitespace-nowrap py-5">
              <span className="text-[15px] font-bold py-1 px-4 rounded-full border ">
                ALL
              </span>
              <span className="text-[15px] font-bold py-1 px-4 rounded-full border ">
                In Use
              </span>
              <span className="text-[15px] font-bold py-1 px-4 rounded-full border ">
                Used
              </span>
            </div>
            {/* 4th section */}
            <div className="flex gap-3 overflow-auto border-y border-y-[#605f5f68] scrollbar-hide whitespace-nowrap py-2">
              <span className="text-[12px] ">ALL</span>
              <span className="text-[12px] lighttext">
                Margin Interest Free Coupon
              </span>
              <span className="text-[12px] lighttext">
                Feature Deduction Coupon
              </span>
              <span className="text-[12px] lighttext">K-coin Earn Coupon</span>
              <span className="text-[12px] lighttext">
                Trading Bot Trail Fund
              </span>
              <span className="text-[12px] lighttext">
                Spot Deduction Trail
              </span>
              <span className="text-[12px] lighttext">Feature Trial Fund</span>
            </div>

            <div className="py-10 flex flex-wrap gap-5">
              {/* 1st card */}
              <div className="max-w-md w-full bg-[#0f0f0f] rounded-xl flex overflow-hidden border border-gray-800">
                {/* Left ticket section */}
                <div className="bg-gradient-to-b from-[#003b47] to-[#061d2a] w-28 flex flex-col items-center justify-center relative text-white">
                  <div className="font-bold text-3xl">10</div>
                  <div className="text-xs">USDT</div>

                  {/* Ticket edges */}
                  <div className="absolute -right-[6px] top-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                  <div className="absolute -right-[6px] bottom-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                </div>

                {/* Right content */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Futures Trial Fund
                    </p>
                    <p className="text-gray-400 text-xs">
                      Maximum Withdrawal: 1 USDT
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Activate Before:</p>
                    <p className="text-gray-300 text-sm">
                      11/4/2025 20:10:50 (UTC+8)
                    </p>
                  </div>

                  <button className="self-start bg-white text-black text-sm py-1.5 px-5 rounded-full font-medium hover:bg-gray-200 transition">
                    Activate
                  </button>

                  <div className="pt-1 border-t border-gray-700 text-xs text-gray-400 flex items-center justify-between">
                    <span>Usage Details</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </div>
              {/* 2nd card */}
              <div className="max-w-md w-full bg-[#0f0f0f] rounded-xl flex overflow-hidden border border-gray-800">
                {/* Left ticket section */}
                <div className="bg-gradient-to-b from-[#003b47] to-[#061d2a] w-28 flex flex-col items-center justify-center relative text-white">
                  <div className="font-bold text-3xl">10</div>
                  <div className="text-xs">USDT</div>

                  {/* Ticket edges */}
                  <div className="absolute -right-[6px] top-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                  <div className="absolute -right-[6px] bottom-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                </div>

                {/* Right content */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Futures Trial Fund
                    </p>
                    <p className="text-gray-400 text-xs">
                      Maximum Withdrawal: 1 USDT
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Activate Before:</p>
                    <p className="text-gray-300 text-sm">
                      11/4/2025 20:10:50 (UTC+8)
                    </p>
                  </div>

                  <button className="self-start bg-white text-black text-sm py-1.5 px-5 rounded-full font-medium hover:bg-gray-200 transition">
                    Activate
                  </button>

                  <div className="pt-1 border-t border-gray-700 text-xs text-gray-400 flex items-center justify-between">
                    <span>Usage Details</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </div>
              {/* 3rd card */}
              <div className="max-w-md w-full bg-[#0f0f0f] rounded-xl flex overflow-hidden border border-gray-800">
                {/* Left ticket section */}
                <div className="bg-gradient-to-b from-[#003b47] to-[#061d2a] w-28 flex flex-col items-center justify-center relative text-white">
                  <div className="font-bold text-3xl">10</div>
                  <div className="text-xs">USDT</div>

                  {/* Ticket edges */}
                  <div className="absolute -right-[6px] top-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                  <div className="absolute -right-[6px] bottom-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                </div>

                {/* Right content */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Futures Trial Fund
                    </p>
                    <p className="text-gray-400 text-xs">
                      Maximum Withdrawal: 1 USDT
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Activate Before:</p>
                    <p className="text-gray-300 text-sm">
                      11/4/2025 20:10:50 (UTC+8)
                    </p>
                  </div>

                  <button className="self-start bg-white text-black text-sm py-1.5 px-5 rounded-full font-medium hover:bg-gray-200 transition">
                    Activate
                  </button>

                  <div className="pt-1 border-t border-gray-700 text-xs text-gray-400 flex items-center justify-between">
                    <span>Usage Details</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </div>
              {/* 4th card */}
              <div className="max-w-md w-full bg-[#0f0f0f] rounded-xl flex overflow-hidden border border-gray-800">
                {/* Left ticket section */}
                <div className="bg-gradient-to-b from-[#003b47] to-[#061d2a] w-28 flex flex-col items-center justify-center relative text-white">
                  <div className="font-bold text-3xl">10</div>
                  <div className="text-xs">USDT</div>

                  {/* Ticket edges */}
                  <div className="absolute -right-[6px] top-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                  <div className="absolute -right-[6px] bottom-0 h-3 w-3 bg-[#0f0f0f] rounded-full"></div>
                </div>

                {/* Right content */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Futures Trial Fund
                    </p>
                    <p className="text-gray-400 text-xs">
                      Maximum Withdrawal: 1 USDT
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Activate Before:</p>
                    <p className="text-gray-300 text-sm">
                      11/4/2025 20:10:50 (UTC+8)
                    </p>
                  </div>

                  <button className="self-start bg-white text-black text-sm py-1.5 px-5 rounded-full font-medium hover:bg-gray-200 transition">
                    Activate
                  </button>

                  <div className="pt-1 border-t border-gray-700 text-xs text-gray-400 flex items-center justify-between">
                    <span>Usage Details</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </div>
              <div className="py-5 flex justify-center w-full">
                <span className="lighttext">
                  Looking for your reward history?
                  <span className="text-[#03fd0f93]">Find it here</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
