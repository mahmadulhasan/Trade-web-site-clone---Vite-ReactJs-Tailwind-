import React, { useState } from "react";
import Coindata from "./coindata";

const HeroData = () => {
  const [isHovering, setIsHovering] = useState(false);
  const stats = [
    { label: "24h Change", value: "416.23 +0.34%", color: "#236533" },
    { label: "24H High", value: "124,192.60" },
    { label: "24H Low", value: "121,311.91" },
    { label: "24 Vol(KNCH)", value: "4,951.25324" },
    { label: "24 Vol(USDT)", value: "24 Vol(USDT)" },
  ];

  return (
    <div className="flex flex-row gap-1 relative md:h-[75px] w-full  items-center  md:px-4 py-4  mb-[62px] md:mb-0 ">
      {/* start icon */}
      <div className="  border border-gray-800 rounded-sm p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      </div>

      {/* coin logo */}

      <div className=" bg-white rounded-sm coinlogo">
        <img src="./coinlogo.png" alt="" 
        className="h-[25px] w-[30px] p-1  "/>
      </div>

      {/* large data */}

      <div className="flex flex-col gap-0">
        <div className="relative z-10">
          <div
            className="flex flex-row gap-2 items-center relative cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsHovering((prev) => !prev)}
          >
            <span className="text-xl font-semibold">KNCH/USDT</span>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-caret-down-fill transition-transform duration-300 ${
                  isHovering ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>

          {/* Dropdown */}
          {isHovering && (
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="
                absolute top-full left-0
                transform transition-all duration-300 ease-in-out
                bg-[#1a1a1a] rounded-md shadow-lg z-20 mt-1
              "
                  >
              <Coindata />
            </div>
          )}
        </div>

        <span className="block text-md  lighttext w-fit">
          Kanch Network
        </span>
      </div>

      <div className=" ">
        <span className="text-md text-red-600">121,975.50</span>
        <span className="block text-sm lg:text-md">121,987.42&nbsp;USD</span>
      </div>

      {/* mobile gear icon */}
      <div className="md:hidden flex justify-end  p-2 border border-gray-800 rounded-sm h-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-gear"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </svg>
      </div>

      {/* main data */}
      <div className="flex flex-row md:static absolute w-full  top-[85px] py-2 h-[60px] text-[.7rem] lg:text-[.8rem] md:h-fit  lg:bg-transparent  md:bg-none md:py-0 left-0 md:px-2 px-5">
        {/* data */}
        <div className="w-full">
          <div className="flex flex-row gap-3 w-full md:w-[350px] lg:w-full overflow-auto scrollbar-hide">
            {stats.map(({ label, value, color }, idx) => (
              <div key={idx} className="flex flex-col md:px-3">
                <span className=" lighttext whitespace-nowrap">
                  {label}
                </span>
                <span className=" font-semibold whitespace-nowrap" style={{ color: color }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* gear icon */}
        <div className="hidden md:flex p-2 border border-gray-800 rounded-sm h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroData;
