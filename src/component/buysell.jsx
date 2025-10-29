import React, { useState } from "react";
import { useBuy } from "../context/BuyContext";

const BuySell = () => {
  const [slot, setSlot] = useState(1);
  const [manual, setManual] = useState(1);

  // context
  const { ShowBuy, buy, setBuy } = useBuy();

  const tabs = ["Slot", "Spot grid", "Auto Invent"];
  return (
    <div className=" text-[.85rem] w-full  pb-[20px] lg:px-5  ">
      <div className=" lg:min-w-[250px] md:min-w-[250px] m-0 p-2 ">
        <div className="flex flex-row  ">
          <div className="relative flex flex-row  w-full justify-around items-center left-0 right-0 ">
            {/* Tabs */}
            {tabs.map((tab, i) => (
              <span
                key={i}
                onClick={() => setSlot(i + 1)}
                className={`flex-1 text-center text-[13px] cursor-pointer max-w-1/3 pb-2 transition-all duration-300 whitespace-nowrap ${
                  slot === i + 1
                    ? " font-semibold"
                    : "lighttext hover:font-bold"
                }`}
              >
                {tab}
              </span>
            ))}

            {/* Underline animation */}
            <span
              className="absolute bottom-0 h-[2px] w-1/3 primarycolorbg transition-all duration-500 lg:px-5 px-2 "
              style={{
                left: `${(slot - 1) * (100 /3)}%`,
              }}
            ></span>
          </div>
        </div>

        <div className="w-full md:h-full h-[400px] overflow-auto scrollbar-hide">
          {slot === 1 && (
            <div className=" w-full">
              <div className="relative flex flex-row my-3 w-full bg2nd rounded-sm overflow-hidden">
                <div
                  className={`absolute top-0 h-full w-1/2 transition-all duration-300 ease-in-out ${
                    buy
                      ? "greenbg rounded-sm translate-x-0 "
                      : "translate-x-full rounded-sm  bg-[#f72020]"
                  }`}
                ></div>
                <div
                  className={`z-10 font-semibold text-center text-[1rem] rounded-l-md w-1/2 py-2 cursor-pointer ${
                    buy ? "  rounded-r-full  text-white" : " "
                  }`}
                  onClick={() => setBuy(true)}
                >
                  Buy
                </div>
                <div
                  className={`z-10 font-semibold text-center text-[1rem] rounded-r-md w-1/2 py-2 cursor-pointer  ${
                    !buy ? " rounded-l-full text-white " : " "
                  }`}
                  onClick={() => setBuy(false)}
                >
                  Sell
                </div>
              </div>

              <div className="flex flex-row justify-around mb-3  overflow-auto scroll-m-0">
                <span className="text-md border-b-2 border-b-white">Limit</span>
                <span className="text-md lighttext">Market</span>
                <span className="text-md lighttext">Stop&nbsp;Limit</span>
              </div>

              {/* ----- Price Row ----- */}
              <div className="flex flex-row items-center justify-between rounded-lg bg2nd py-2 px-3 text-[1.1rem] font-semibold mb-3">
                <span className="lighttext pl-3">Price</span>
                <div className="flex flex-row gap-3 items-center">
                  <span>121936</span>
                  <span>USDT</span>
                </div>
              </div>

              {/* ----- Amount (KNCH) Row ----- */}
              <div className="flex flex-row bg2nd items-center justify-between w-full  rounded-lg  py-2 px-3 text-[1.1rem] font-semibold mb-3">
                <div className=" px-2 lg:pr-0">
                  <input
                    type="text"
                    className="w-[80%] right-0  bg-transparent  placeholder-gray-500 focus:border focus:border-gray-700 focus:outline-none focus:ring-0"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex flex-row gap-3 items-center right-0">
                  <img
                    src="./coinlogo.png"
                    alt=""
                    style={{
                      "object-fit": "cover",
                      "max-height": "20px",
                      "max-width": "20px",
                    }}
                  />
                  <span>KNCH</span>
                </div>
              </div>

              {/* ----- Total (USDT) Row ----- */}
              <div className="flex flex-row bg2nd items-center justify-between rounded-lg py-2 px-3 text-[1.1rem] font-semibold mb-3">
                <div className=" px-2">
                  <input
                    type="text"
                    className="w-full bg-transparent  placeholder-gray-500 focus:border focus:border-gray-700 focus:outline-none focus:ring-0"
                    placeholder="Total"
                  />
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <span>$</span>
                  <span>USDT</span>
                </div>
              </div>

              {/* ----  */}

              <div className="">
                <div className="flex flex-col justify-between py-3 rounded-sm ">
                  <div className="flex flex-col">
                    <span className="lighttext">Available </span>
                    <div className="flex flex-wrap items-center justify-between">
                      <span
                        className={`${buy ? "text-2xl " : "text-xl lighttext"}`}
                      >
                        1.0001&nbsp;USDT
                      </span>
                      <span
                        className={`${buy ? "text-xl lighttext" : "text-2xl "}`}
                      >
                        1.0001&nbsp;KNCH
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className={`${buy ? "" : " lighttext"}`}>
                        Max Buy
                      </span>
                      <span className={`${buy ? "" : " lighttext"}`}>
                        00000 KNCH
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-end ${buy ? " lighttext" : ""}`}>
                        Max Sell
                      </span>
                      <span className={`text-end ${buy ? " lighttext" : ""}`}>
                        00000 KNCH
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- */}

              {/* ---- */}
              <div className="flex flex-col gap-3 my-3">
                <a href="signup">
                  <div className="primarycolorbg font-bold text-black w-full p-2 text-center items-center rounded-sm">
                    Register Now
                  </div>
                </a>
                <a href="login">
                  <div className="font-bold  bg2nd w-full p-2 text-center items-center rounded-sm">
                    Login
                  </div>
                </a>
              </div>

              {/* --- */}
              <div className="text-sm lighttext">Fee rate | Futures</div>

              {/* --- */}
              <div className="flex flex-wrap gap-3 justify-center  text-sm mt-3 w-full">
                <div className="flex gap-3 w-full items-center justify-between py-1 px-10 bg-linear-to-r from-green-600 to-gray-800 rounded-sm">
                  <span className="text-sm">KNCH5L</span>
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-red-500 text-sm">-4.5%</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 w-full items-center justify-between py-1 px-10  bg-linear-to-r from-red-900 to-gray-800 rounded-sm">
                  <span className="text-sm">KNCH5L</span>
                  <div className="flex flex-row items-center gap-1">
                    <span className="text-green-500 text-sm">+4.5%</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {slot === 2 && (
            <div className=" w-full">
              <div className=" relative">
                <div className="flex flex-row py-3 w-full ">
                  {/* ------ */}
                  <div className="relative flex flex-row  w-full bg2nd rounded-sm overflow-hidden">
                    <div
                      className={`absolute top-0 h-full w-1/2 transition-all duration-300 ease-in-out ${
                        manual == 1
                          ? "primarycolorbg rounded-sm translate-x-0 "
                          : "translate-x-full rounded-sm  bg-[#f72020]"
                      }`}
                    ></div>
                    <div
                      className={`z-10 font-semibold text-center text-[1rem] rounded-l-md w-1/2 py-2 cursor-pointer ${
                        manual == 1 ? "  rounded-r-full  text-white" : " "
                      }`}
                      onClick={() => setManual(1)}
                    >
                      All
                    </div>
                    <div
                      className={`z-10 font-semibold text-center text-[1rem] rounded-r-md w-1/2 py-2 cursor-pointer  ${
                        !manual == 2 ? " rounded-l-full text-white" : " "
                      }`}
                      onClick={() => setManual(2)}
                    >
                      Manual
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {/* card 1 */}
                <div className="bg2nd rounded-md p-2 flex flex-col gap-.5">
                  <div className="flex flex-row justify-between">
                    <span className="text-md font-semibold text-[#feaa03]">
                      Short-term consolidation: 7D
                    </span>
                    <button className="py-1 px-2 rounded-sm primarycolorbg text-black">
                      Use
                    </button>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Profit/Grid {"(fees deducted)"}
                    </span>
                    <span className="text-sm  text-green-500">
                      0.20% - 0.34%
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Price Range (USDT)</span>
                    <span className="text-sm  ">109,825.77 - 134,231.5</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Grid Number</span>
                    <span className="text-sm  ">30</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Copy to Manual Settings {">"}
                    </span>
                    <span className="text-sm  text-green-500"></span>
                  </div>
                </div>
                {/* card 2 */}
                <div className="bg2nd rounded-md p-2 flex flex-col gap-.5">
                  <div className="flex flex-row justify-between">
                    <span className="text-md font-semibold text-[#feaa03]">
                      Short-term consolidation: 7D
                    </span>
                    <button className="py-1 px-2 rounded-sm primarycolorbg text-black">
                      Use
                    </button>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Profit/Grid {"(fees deducted)"}
                    </span>
                    <span className="text-sm  text-green-500">
                      0.20% - 0.34%
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Price Range (USDT)</span>
                    <span className="text-sm  ">109,825.77 - 134,231.5</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Grid Number</span>
                    <span className="text-sm  ">30</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Copy to Manual Settings {">"}
                    </span>
                    <span className="text-sm  text-green-500"></span>
                  </div>
                </div>
                {/* card 3 */}
                <div className="bg2nd rounded-md p-2 flex flex-col gap-.5">
                  <div className="flex flex-row justify-between">
                    <span className="text-md font-semibold text-[#feaa03]">
                      Short-term consolidation: 7D
                    </span>
                    <button className="py-1 px-2 rounded-sm primarycolorbg text-black">
                      Use
                    </button>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Profit/Grid {"(fees deducted)"}
                    </span>
                    <span className="text-sm  text-green-500">
                      0.20% - 0.34%
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Price Range (USDT)</span>
                    <span className="text-sm  ">109,825.77 - 134,231.5</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">Grid Number</span>
                    <span className="text-sm  ">30</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="text-sm  ">
                      Copy to Manual Settings {">"}
                    </span>
                    <span className="text-sm  text-green-500"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {slot === 3 && (
            <div className="flex flex-col gap-3 py-5  w-full">
              {/* 1st card */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-[.9rem] lighttext ">
                    Select Trading Pairs
                  </span>
                  <span className="lighttext">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                  </span>
                </div>

                <div class="w-full">
                  <div class="relative">
                    <select class="w-full bg-transparent placeholder:text-white text-slate-400 text-sm border border-gray-800 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-gray-800 hover:border-gray-800 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                      <option
                        value="KNCH/USD"
                        className="bg2nd hover:bg-[#1c1c20]"
                      >
                        KNCH/USD
                      </option>
                      <option
                        value="BTC/USD"
                        className="bg2nd hover:bg-[#1c1c20]"
                      >
                        BTC/USD
                      </option>
                      <option
                        value="ETH/USD"
                        className="bg2nd hover:bg-[#1c1c20]"
                      >
                        ETH/USD
                      </option>
                      <option
                        value="ABC/USD"
                        className="bg2nd hover:bg-[#1c1c20]"
                      >
                        ABC/USD
                      </option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2nd card */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-start">
                  <span className="text-[.9rem] lighttext ">
                    How often do you buy KNCH ?
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between  gap-3 ">
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                  <span className="py-1 px-5 text-[.9rem] rounded-sm bg2nd text-center">
                    10&nbsp;min
                  </span>
                </div>
              </div>

              {/* 3rd card */}
              {/* 1st card */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-start">
                  <span className="text-[.9rem] lighttext ">
                    Amount per period
                  </span>
                </div>
                <div className="flex flex-row items-center justify-start px-3 py-2 rounded-sm bg2nd text-[.8rem] lighttext">
                  <span>Investment each time {"(<=1.50 USDT)"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuySell;
