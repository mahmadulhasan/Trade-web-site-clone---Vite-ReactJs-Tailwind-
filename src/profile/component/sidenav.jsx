import React, { useState } from "react";
import {useTheme} from '../../context/themeprovider'

const Sidenav = () => {
  const { dark, setDark } = useTheme();
  const [activeDropdown, setactiveDropdown] = useState(null);
  const handleDropdown = (menu) => {
    setactiveDropdown(activeDropdown === menu ? null : menu);
  };
  const menudata = {
    
    "Add Funds": ["P2P Trading", "Deposite Fait", "Third-Party"],
    Markets: [],
    Trade: ["Spot", "Margin", "Convert", "Strategy"],
    Derivatives: ["Futures", "Options", "Funding Rate"],
    "Copy Trading": ["Top Traders", "Leaderboard", "My Copy Trades"],
    Finance: ["Earn", "Staking", "Savings", "Launchpad"],
    Activity: ["Events", "Tasks", "Referrals"],
    More: ["Help Center", "About Us", "Announcements"],
  };
  return (
    <div className=" flex flex-col gap-5 w-full h-full overflow-y-auto scrollbar-hide px-4">
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
      <div className="w-full flex flex-row items-center justify-between">
        <ul className="flex flex-col  relative gap-5 w-full">
          {Object.entries(menudata).map(([menu, submenu]) => (
            <li key={menu} className="group relative text-md">
              {/* Main Menu Item */}
              <div
                className="w-full flex flex-row items-center  justify-between text-[18px] cursor-pointer  hover:bg-[#11111138] p-1 rounded-md  transform transition-transform duration-300 hover:-translate-y-1"
                onClick={() => handleDropdown(menu)}
              >
                <span className=" font-[500] ">{menu}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === menu ? "rotate-180" : ""
                  }`}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
              {/* Dropdown List */}
              {submenu.length > 0 && (
                <ul
                  className={`ml-4 lighttext text-sm overflow-hidden transition-all ease-initial duration-300 ${
                    activeDropdown === menu ? "h-fit mt-1 " : "max-h-0"
                  }`}
                >
                  {submenu.map((item, i) => (
                    <li
                      key={i}
                      className="py-1 hover:text-[#fbbb3b] cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-row items-center  justify-between text-[18px] cursor-pointer  hover:bg-[#11111138] p-1 rounded-md  transform transition-transform duration-300 hover:-translate-y-1"
        onClick={()=>setDark(!dark)}
      >
        <span>Theme</span>
        {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-moon-fill text-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              )}
      </div>
    </div>
  );
};

export default Sidenav;
