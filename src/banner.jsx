import React,{useState} from "react";

const Banner = () => {
  const [open, setOpen] = useState(false)
  const bannerdata = [
    "KANCH/USDT_+5.005%_1756420",
    "BTC/USDT_+5.005%_1756420",
    "ETH/USDT_+5.005%_1756420",
    "DATA1/USDT_+5.005%_1756420",
    "DATA2/USDT_+5.005%_1756420",
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full primarycolorbg text-black flex items-center h-[30px] text-[0.7rem] font-medium">
      {/* Left Section */}
      <div className="w-1/3 lg:w-1/4 text-center font-semibold">
      <div className="flex items-center justify-center gap-1 px-3 text-[.7rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-reception-4"
              viewBox="0 0 16 16"
            >
              <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
            <span className="">Network&nbsp;connection</span>
          </div>
      </div>

      {/* Center Section - Ticker */}
      <div className="w-1/3 lg:w-2/4 flex overflow-hidden relative">
        <div className="flex whitespace-nowrap section gap-8">
          {[...bannerdata, ...bannerdata].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap section gap-8">
          {[...bannerdata, ...bannerdata].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap section gap-8">
          {[...bannerdata, ...bannerdata].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/3 lg:w-1/4 text-center font-semibold" onClick={() => setOpen(!open)}>
        <div
          className="flex items-center gap-1 text-[.7rem]  justify-center w-full cursor-pointer"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-megaphone"
            viewBox="0 0 16 16"
          >
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
          </svg>
          <span className="">Announcements</span>
        </div>
      </div>


      {/* Announcements */}
      <div
        className={`absolute md:w-[300px] flex flex-col rounded-t-xl bg-[#1b1b1e] p-2 bottom-20 md:bottom-10 md:mx-3 w-full right-0 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between p-2 border-b border-b-gray-700 text-gray-300">
          <span className="">Announcements</span>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 max-h-[300px]  overflow-auto scrollbar-hide">
          {/* card-1 */}
          <div className="flex justify-between items-center border-b border-b-gray-700">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 primarycolor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
                <span className="text-[.7rem]">Hot Campaing</span>
              </div>
              <span className="text-[.8rem] text-gray-400">UPAL lucky draw is live</span>
              <span className="text-[.8rem] text-gray-400">
                2025-10-14&nbsp;02:25
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
          {/* card-1 */}
          <div className="flex justify-between items-center border-b border-b-gray-700">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 primarycolor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
                <span className="text-[.7rem]">Hot Campaing</span>
              </div>
              <span className="text-[.8rem] text-gray-400">UPAL lucky draw is live</span>
              <span className="text-[.8rem] text-gray-400">
                2025-10-14&nbsp;02:25
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
          {/* card-1 */}
          <div className="flex justify-between items-center border-b border-b-gray-700">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 primarycolor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
                <span className="text-[.7rem]">Hot Campaing</span>
              </div>
              <span className="text-[.8rem] text-gray-400">UPAL lucky draw is live</span>
              <span className="text-[.8rem] text-gray-400">
                2025-10-14&nbsp;02:25
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
          {/* card-1 */}
          <div className="flex justify-between items-center border-b border-b-gray-700">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 primarycolor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
                <span className="text-[.7rem]">Hot Campaing</span>
              </div>
              <span className="text-[.8rem] text-gray-400">UPAL lucky draw is live</span>
              <span className="text-[.8rem] text-gray-400">
                2025-10-14&nbsp;02:25
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>

          {/* card-1 */}
          <div className="flex justify-between items-center border-b border-b-gray-700">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 primarycolor">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
                <span className="text-[.7rem]">Hot Campaing</span>
              </div>
              <span className="text-[.8rem] text-gray-400">UPAL lucky draw is live</span>
              <span className="text-[.8rem] text-gray-400">
                2025-10-14&nbsp;02:25
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
