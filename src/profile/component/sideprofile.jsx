import React, { useState } from "react";

const Sideprofile = () => {
  const [Accountopen, setAccountOpen] = useState(false);
  const [Orderopen, setOrderOpen] = useState(false);
  const order = [
    "Spot Order",
    "Margin Order",
    "Features Order",
    "Earn order",
    "Option Order",
  ];
  const accounts = [
    "Overview",
    "Funding Account",
    "Trading Account",
    "Margin Account",
    "Futures Account",
    "Options Account",
    "Trading Bot Account",
    "Financial Account",
    "Copy Trading Account",
  ];
  return (
    <div className="flex flex-col gap-5 w-full h-full overflow-y-auto scrollbar-hide">
      <div class="w-full flex px-5 py-3 rounded-full border-2 border-gray-500 overflow-hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          class="fill-gray-600 mr-3 rotate-90"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search Something..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm"
        />
      </div>

      <div className="flex flex-col gap-2 py-5 px-2">
        <span className="text-[25px] font-bold">mah***@gmail.com</span>
        <div className="flex gap-2 rounded-full py-1 px-4 w-fit bg-[#11111163] items-center">
          <span className="text-[15px] lighttext">UID:2111112</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-copy"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500"></div>

      <div className="flex flex-col px-3 hover:bg-[#11111137] rounded-sm">
        <div className="flex justify-between">
          <span className="lighttext">Spot</span>
          <div className="flex gap-1">
            <span className="lighttext">Maker/Trader:</span>
            <span>0.1%/0.1%</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="lighttext">Features</span>
          <div className="flex gap-1">
            <span className="lighttext">Maker/Trader:</span>
            <span>0.2%/0.2%</span>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500"></div>

      {/* dropdown */}

      <div className="px-3 flex flex-col gap-5">
        {/* orders */}
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => setOrderOpen(!Orderopen)}
        >
          <h2 className="text-lg font-semibold">Orders</h2>
          <div
            className={`transform trasition-all duration-300 ${
              Orderopen ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>

        {/* Dropdown List */}
        <ul className={`space-y-2 py-2 ${Orderopen ? "h-full" : "hidden"}`}>
          {order.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm hover:font-bold hover:translate-x-1 transition-all cursor-pointer"
            >
              <span className="mr-2 text-[15px] font-semibold">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Assets */}
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => setAccountOpen(!Accountopen)}
        >
          <h2 className="text-lg font-semibold">Assets</h2>
          <div
            className={`transform trasition-all duration-300 ${
              Accountopen ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>

        {/* Dropdown List */}
        <ul className={`space-y-2 py-2 ${Accountopen ? "h-full" : "hidden"}`}>
          {accounts.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm hover:font-bold hover:translate-x-1 transition-all cursor-pointer"
            >
              <span className="mr-2 text-[15px] font-semibold">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-lg font-semibold">KCS Loyalty Level</span>
          <div className="flex items-center gap-1">
            <img src="./kcsicon.png" alt="" className="w-4 h-4" />
            <span className="text-xs lighttext">To be Unlocked</span>
          </div>
        </div>

        <span className="text-lg font-semibold">Fees & VIP</span>
        <span className="text-lg font-semibold">Account Security</span>
        <span className="text-lg font-semibold">API Management</span>
      </div>

      <div className="h-[1px] bg-gray-500"></div>

      <span className="py-2 w-full text-center font-semibold hover:bg-[#11111143] rounded-md">Log Out</span>
      <div className="h-[1px] bg-gray-500"></div>
    </div>
  );
};

export default Sideprofile;
