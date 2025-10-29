import React from "react";

const Sidesearch = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full overflow-y-auto scrollbar-hide px-4">
      <div class="w-full flex px-4 py-3 rounded-full border-2 border-gray-500 overflow-hidden ">
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

      <span className="text-[12px] lighttext font-semibold">
        Popular Assets
      </span>

      <div className="flex flex-row overflow-auto scrollbar-hide gap-2">
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
      </div>

      <span className="text-[12px] lighttext font-semibold">
        Popular Assets
      </span>

      <div className="flex flex-row overflow-auto scrollbar-hide gap-2">
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
        <div class="p-4 bg-[#1111111b] rounded-2xl w-40 h-20">
          <div class="flex items-center text-[15px] font-bold mb-2">
            <span class="">KNCH/USDT</span>
          </div>
          <div class="text-[13px] font-semibold mb-1">
            114,532.5
            <span class="text-green-700 font-semibold text-[13px]">-0.78%</span>
          </div>
        </div>
      </div>

      <span className="text-[12px] lighttext font-semibold">Earns</span>

      <div class=" flex flex-col items-center justify-center space-y-4 ">
        <div class="w-full bg-[#1111111b] rounded-xl p-4 shadow-md flex flex-col space-y-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img src="eth-logo.png" alt="" class="w-6 h-6" />
              <h2 class=" font-semibold">KNCH</h2>
            </div>
            <p class="text-green-700 font-medium">7.99% - 545.58%</p>
          </div>
          <div className="flex justify-between">
            <p class="lighttext text-sm">Dual Booster</p>
            <p class="lighttext text-xs">Reference APR</p>
          </div>
        </div>

        <div class="w-full bg-[#1111111b] rounded-xl p-4 shadow-md flex flex-col space-y-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img src="arb-logo.png" alt="" class="w-6 h-6" />
              <h2 class=" font-semibold">ARB</h2>
            </div>
            <p class="text-green-700 font-medium">429.98% - 486.15%</p>
          </div>
          <div className="flex justify-between">
            <p class="lighttext text-sm">Dual Booster</p>
            <p class="lighttext text-xs">Reference APR</p>
          </div>
        </div>

        <div class="w-full bg-[#1111111b] rounded-xl p-4 shadow-md flex flex-col space-y-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <img src="bnb-logo.png" alt="" class="w-6 h-6" />
              <h2 class=" font-semibold">BNB-U</h2>
            </div>
            <p class="text-green-700 font-medium">1.07% - 484.19%</p>
          </div>
          <div className="flex justify-between">
            <p class="lighttext text-sm">Dual Booster</p>
            <p class="lighttext text-xs">Reference APR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidesearch;
