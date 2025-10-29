import React, { useState } from "react";

const MainBody = () => {
  const [payWithKCS, setPayWithKCS] = useState(false);
  const [hide, setHide] = useState(true);

  
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* email show */}
      <div className="flex flex-row gap-3 ">
        <span className="rounded-full md:h-[70px] md:w-[70px] h-[50px] w-[50px] text-2xl font-bold primarycolorbg flex items-center justify-center">
          MA
        </span>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span className="text-xl font-bold ">
              Hello, {hide && "ma***@gmail.com"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
            <div
              className="flex flex-row gap-1 py-1 px-2 rounded-full background items-center cursor-pointer whitespace-nowrap"
              onClick={() => setHide(!hide)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
              {hide ? "Hide info" : "Show info"}
            </div>
          </div>

          {hide && (
            <span className="lighttext text-sm">
              Last login: 10/10/25, 10:10:10 India Kolkata(110**200)
            </span>
          )}
        </div>
      </div>
      {hide && (
        <div className="flex flex-row flex-wrap gap-1 md:gap-5 ">
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">UID</span>
            <span className="text-md">2111112</span>
          </div>
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">Identity Verification</span>
            <span className="text-md">Unavailable</span>
          </div>
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">Safeguard</span>
            <span className="text-md primarycolor">Check Now</span>
          </div>
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">KCS Loyality</span>
            <span className="text-md">To Be Unlocked</span>
          </div>
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">Third party Account</span>
            <span className="text-md">Google</span>
          </div>
          <div className="flex w-full justify-between md:flex-col md:w-fit">
            <span className="text-sm lighttext">TimeZone</span>
            <span className="text-md">Kolkata/Asia</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-5 ">
        <div className="flex flex-col gap-5 lg:w-[50%] w-full">
          {/* deposite */}
          <div className="p-5 rounded-2xl flex flex-col gap-5 bg3">
            <span className="text-[18px] font-bold">
              You don't currently have assets. Deposit or buy crypto via the
              methods below.
            </span>
            <span className="text-[12px] ">
              New users will receive a gift pack worth up to 8,200 USDT in
              Rewards Hub by completing their first deposit or crypto purchase
              of any amount.
            </span>
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-cash-coin"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
              </svg>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold">By Crypto</span>
                  <span className="text-[12px] lighttext">
                    Deposite crypto ....
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                />
              </svg>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold">Deposite</span>
                  <span className="text-[12px] lighttext">
                    Deposite crypto ....
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* total asset */}
          <div className="p-5 background rounded-2xl flex flex-col gap-2 whitespace-nowrap">
            <div className="flex flex-row justify-between w-full">
              <span>Total Assets</span>
              <span>Assets Overview | Orders</span>
            </div>
            <div className="flex flex-row justify-between w-full">
              <span className="text-2xl font-bold">0 USDT</span>
              <div className="flex flex-wrap gap-2 justify-end">
                <span className="py-1 px-2 rounded-full border">Deposite</span>
                <span className="py-1 px-2 rounded-full border">
                  Buy Crypto
                </span>
                <span className="py-1 px-2 rounded-full border">Withdraw</span>
              </div>
            </div>
            <span className="lighttext">≈ $0</span>
          </div>
          {/* market */}
          <div className="w-full bg2nd rounded-xl p-6 ">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold">Market</h2>
              <div className="lighttext text-sm space-x-3">
                <button className="hover:text-yellow-500 cursor-pointer transition">
                  View More
                </button>
                <span>|</span>
                <button className="hover:text-yellow-500 cursor-pointer transition">
                  Help
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-4 border-b border-gray-700 pb-2">
              <button className="lighttext hover: transition">
                Favorites
              </button>
              <button className="flex items-center gap-1 border-b-2 border-red-500 pb-2 ">
                <span>🔥</span> Hot
              </button>
            </div>

            {/* Table Header */}
            <div className="flex lighttext text-xs uppercase mb-3 px-2 w-full">
              <span className="w-1/3 md:w-1/5 text-start">Coin</span>
              <span className="w-1/3 md:w-1/5 text-start">Price</span>
              <span className=" flex w-1/5 justify-center">24h Change</span>
              <span className="hidden md:flex w-1/5 justify-center">
                4h Trend
              </span>
              <span className="hidden md:flex w-1/5 justify-center">
                Action
              </span>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {[
                {
                  coin: "Bitcoin",
                  symbol: "BTC",
                  price: "$67,200",
                  change: "+2.1%",
                },
                {
                  coin: "Ethereum",
                  symbol: "ETH",
                  price: "$3,250",
                  change: "-1.3%",
                },
                {
                  coin: "Solana",
                  symbol: "SOL",
                  price: "$143.56",
                  change: "+5.6%",
                },
                {
                  coin: "Cardano",
                  symbol: "ADA",
                  price: "$0.42",
                  change: "-0.8%",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center  hover:bg-[#06060648] transition rounded-lg px-3 py-2"
                >
                  {/* Coin */}
                  <div className="w-1/3 md:w-1/5 text-start flex items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-red-400 rounded-full" />
                    <span className="font-medium">{item.symbol}</span>
                    <span className="lighttext text-xs hidden sm:inline">
                      {item.coin}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="w-1/3 md:w-1/5 text-start">{item.price}</div>

                  {/* 24h Change */}
                  <div
                    className={`flex w-1/5 justify-center ${
                      item.change.includes("-")
                        ? "text-red-400"
                        : "text-green-500"
                    }`}
                  >
                    {item.change}
                  </div>

                  {/* 4h Trend (hidden from md down) */}
                  <div className="hidden md:flex w-1/5 justify-center">
                    <div className="h-6 w-16 bg-gray-600 rounded"></div>
                  </div>

                  {/* Action (hidden from md down) */}
                  <div className="hidden md:flex w-1/5 justify-center">
                    <button className="text-xs bg-yellow-600 hover:bg-yellow-500 px-3 py-1 rounded">
                      Trade
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[40%] w-full">
          <div className="   rounded-xl p-5 shadow-md background">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-sm font-bold">
                  🛡️
                </div>
                <h2 className="font-semibold text-lg">VIP Lv. 0</h2>
              </div>
              <button className="text-xs lighttext hover:">View More</button>
            </div>

            {/* Toggle */}
            <div className="flex items-center gap-2 mt-2 mb-4">
              <label className="relative flex  items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={payWithKCS}
                  onChange={() => setPayWithKCS(!payWithKCS)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-yellow-500 transition-all"></div>
                <div className="absolute left-0.5 top-0.5 bg-white h-4 w-4 rounded-full transition-all peer-checked:translate-x-5"></div>
              </label>
              <span className="text-[12px] lighttext">Pay Fees with KCS</span>
            </div>

            {/* Rates */}
            <div className="flex justify-between text-sm mt-2">
              <div>
                <p className="lighttext text-xs mb-1">Maker / Taker (Spot)</p>
                <p className="font-semibold">
                  0.1% <span className="lighttext">/</span> 0.1%
                </p>
              </div>
              <div className="text-right">
                <p className="lighttext text-xs mb-1">
                  Maker / Taker (Futures)
                </p>
                <p className="font-semibold">
                  0.02% <span className="lighttext">/</span> 0.06%
                </p>
              </div>
            </div>

            {/* KCS Holdings */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs lighttext mb-1">
                <span>KCS Holdings</span>
                <span>▼</span>
              </div>
              <div className="relative w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-yellow-500 w-[10%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="lighttext">
                  Lv. 0{" "}
                  <span className="ml-1 lighttext">
                    Increase your KCS holdings by 1,000 KCS to upgrade to the
                    next level.
                  </span>
                </span>
                <span className="lighttext">Lv. 1</span>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            data-hs-carousel='{
                    "loadingClasses": "opacity-0",
                    "isAutoPlay": true,
                    "interval": 1000,
                    "dotsItemClasses": "hs-carousel-active:bg-green-500 hs-carousel-active:border-green-500 size-2 border border-gray-500 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-green-500 dark:hs-carousel-active:border-green-500"
                }'
            className="relative w-full rounded-2xl overflow-hidden "
          >
            <div className="hs-carousel relative overflow-hidden w-full min-h-[150px] rounded-lg">
              <div className="hs-carousel-body absolute inset-0 flex flex-nowrap transition-transform duration-700">
                {/* --- Slide 1 --- */}
                <div className="hs-carousel-slide flex justify-between items-center background p-5 rounded-xl w-full shrink-0">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">
                      Invite Friends for Rewards
                    </h2>
                    <p className="lighttext text-sm mb-3">
                      Invite friends and get 20% commissions.
                    </p>
                    <button className="text-[#a07e03] text-sm font-medium flex items-center gap-1 hover:underline">
                      Invite Friends <span>→</span>
                    </button>
                  </div>
                  <div className="w-[60px] h-[60px] relative flex items-center justify-center">
                    <div className="w-[45px] h-[45px] bg-gradient-to-b from-gray-400 to-gray-700 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4m-4 4v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                        />
                      </svg>
                    </div>
                    <div className="absolute right-0 bottom-0 bg-green-500  rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Pagination */}
            <div className="hs-carousel-pagination flex justify-center absolute bottom-3 inset-x-0 gap-x-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
