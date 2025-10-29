import { React, useState, } from "react";
import Icon from "./icon";
import { useTheme } from "./context/themeprovider.jsx";

const Navbar = () => {
  const { dark, setDark } = useTheme();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  

  const menuItems = {
    "Buy crypto": ["Credit Card", "Third Party", "P2P Trading", "Quick Buy"],
    Markets: ["Spot Market", "Futures Market", "Top Gainers", "New Listings"],
    Trade: ["Spot", "Margin", "Convert", "Strategy"],
    Derivatives: ["Futures", "Options", "Funding Rate"],
    "Copy Trading": ["Top Traders", "Leaderboard", "My Copy Trades"],
    Finance: ["Earn", "Staking", "Savings", "Launchpad"],
    Activity: ["Events", "Tasks", "Referrals"],
    More: ["Help Center", "About Us", "Announcements"],
    "App Download": ["Android", "iOS", "Windows", "Mac"],
    English: ["English", "हिंदी", "বাংলা", "Español"],
    "Exchange rate": ["USD", "INR", "EUR"],
  };
  const menuData = {
    "Buy Crypto": [
      {
        icon: <Icon />,
        title: "Credit/Debit card",
        desc: "Buy crypto instantly via Visa, Mastercard",
      },
      {
        icon: <Icon />,
        title: "Third-Party Payment",
        desc: "Buy cryptocurrency using Visa or Mastercard, etc.",
      },
      {
        icon: <Icon />,
        title: "P2P Trading",
        desc: "Buy USDT or cryptocurrency using your bank card",
      },
      {
        icon: <Icon />,
        title: "XT OTC",
        desc: "Provide secure settlement services for clients",
        tag: "NEW",
      },
      {
        icon: <Icon />,
        title: "Quick Buy",
        desc: "Buy cryptos in just a few steps",
      },
    ],
    Markets: [],
    Trade: [
      {
        icon: <Icon />,
        title: "Spot",
        desc: "Cryptocurrency trading, 800+ market trading pairs",
      },
      {
        icon: <Icon />,
        title: "Spot Grid",
        desc: "Buy low and sell high, a tool for range consolidation",
      },
      {
        icon: <Icon />,
        title: "Auto-invest Bot",
        desc: "Invest regularly — Let time work for you",
      },
      {
        icon: <Icon />,
        title: "EPF",
        desc: "Built-in leverage, no liquidation risk",
      },
      {
        icon: <Icon />,
        title: "Margin",
        desc: "Low-interest loan, up to 20x margin",
      },
      {
        icon: <Icon />,
        title: "Pre-market",
        desc: "Stay ahead and take the lead",
      },
    ],
    Derivatives: [
      {
        icon: <Icon />,
        title: "Derivatives Overview",
        desc: "One-stop platform for all things Derivatives",
      },
      {
        icon: <Icon />,
        title: "USDT-M Features",
        desc: "Perpetual futures specified in the settlement currency USDT",
      },
      {
        icon: <Icon />,
        title: "Coin-M Fearture",
        desc: "Perpetual futures paid with cryptocurrency",
      },
      {
        icon: <Icon />,
        title: "Feature Grid",
        desc: "Simple and intelligent automated trading tools",
      },
      {
        icon: <Icon />,
        title: "Demo",
        desc: "USDT-M Futures, COIN-M Futures Demo",
      },
    ],
    "Copy Trading": [
      {
        icon: <Icon />,
        title: "Feature Copy Trading",
        desc: "Make money with elite global traders",
      },
      {
        icon: <Icon />,
        title: "Spot Copy Trading",
        desc: "One-click copy of real-time trades of elite traders",
      },
    ],
    Finance: [
      {
        icon: <Icon />,
        title: "Simple Earn",
        desc: "Deposit to earn, simple to grow",
      },
      {
        icon: <Icon />,
        title: "Advance Invesment",
        desc: "Enjoy excessive profit with structured products",
      },
      {
        icon: <Icon />,
        title: "Crypto Loan",
        desc: "Flash loans backed with crypto assets",
      },
      {
        icon: <Icon />,
        title: "VIP Loan Service",
        desc: "Customizable high-value loans to meet diverse needs",
      },
      {
        icon: <Icon />,
        title: "XT Exclusive Membership",
        desc: "Enjoy Exclusive Privileges and Prosper Together",
      },
    ],
  };
  const Language = ["English", "हिंदी", "বাংলা", "Español"];

  return (
    <div className="fixed top-0 left-0 w-full   z-50 h-[60px] navbg whitespace-nowrap">
      <div className="hidden lg:flex flex-row fixed items-center justify-start gap-5 h-[60px] top-0 m-0 w-full py-3 px-5 navbg">
        <div className=" h-[30px] w-[30px]">
          <img
            src="./coinlogo.png"
            alt=""
            className="h-[30px] w-[30px] p-1 bg-[#ffd84d] rounded-sm"
          />
        </div>
        <div className="w-full flex flex-row items-center justify-between gap-3">
          <ul className="flex flex-row items-center relative gap-.5">
            {Object.entries(menuData).map(([menu, subItems]) => (
              <li key={menu} className="group relative text-md">
                {/* Main Menu Item */}

                <span className="inline-block py-1 px-4 rounded-sm cursor-pointer font-[500] hover:text-[#fbbb3b] bghover transform transition-transform duration-300 hover:-translate-y-1" >
                  {menu}
                </span>

                {/* Dropdown */}
                {/* <div className="absolute group-hover:inline-block left-0 top-4 mt-3 hidden min-w-[280px] flex-col rounded-lg bg-[#1a1a1a]  shadow-lg group-hover:flex  z-50 transition-all duration-1000 ease-in-out -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 "> */}
                <div
                  className="absolute left-0 top-4 mt-3 w-[300px] whitespace-normal flex-col rounded-lg bg2nd  shadow-lg z-50 
                  opacity-0 -translate-y-5 pointer-events-none 
                  transition-all duration-500 ease-in-out 
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                  
                >
                  {subItems.length > 0 &&
                    subItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-5 p-3 m-2 hover:bg-[#a0a0a051] rounded-md cursor-pointer transition"
                      >
                        <div className="primarycolor">{item.icon}</div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-[500] text-sm">
                              {item.title}
                            </span>
                            {item.tag && (
                              <span className="text-[10px] bg-green-500 text-black px-1 rounded-sm font-bold">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs lighttext">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row items-center gap-2 ">
            {/* Search icon in navbar */}
            <li
              className="text-md font-[500] cursor-pointer"
              onClick={() => setSearch(!search)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 
                  3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 
                  6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </li>

            {/* Fullscreen search popup */}
            {search && (
              <div className="fixed inset-0 bg-[#0f0f0fed] flex flex-col items-center justify-start left-[25%] w-[50%] mt-[70px] py-5 z-[9999] transition-all duration-500">
                <div className="flex flex-row w-full gap-2 items-center justify-center">
                  <div className="w-[90%] md:w-[50%]">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search..."
                      className="w-full px-4 py-3 text-lg rounded-md border text-white border-gray-700 focus:ring-2 focus:ring-cyan-400 bg-black "
                    />
                  </div>

                  <button
                    onClick={() => setSearch(false)}
                    className="min-w-fit text-white cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <a href="/login">
              <li className="text-md font-[500] hover:cursor-pointer hover:text-[#fbbb3b] bghover py-1 px-4 rounded-sm">
                Log in
              </li>
            </a>
            <a href="signup">
              <li className="text-md font-[500] py-2 px-3 bg-white text-black rounded-md hover:cursor-pointer hover:bg-[#fbbb3b]">
                Sign up
              </li>
            </a>
            <a href="/profile">
              <li className="text-md font-[500] py-2 px-3 bg-white text-black rounded-md hover:cursor-pointer hover:bg-[#fbbb3b]">
                Profile
              </li>
            </a>

            {/* download app qr */}
            <li className="text-md font-[500] relative">
              <div
                className="inline-block cursor-pointer relative group bghover  transform transition-transform duration-300 
                  hover:-translate-y-1 px-2 py-1 rounded-sm"
              >
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>

                {/* Tooltip */}
                <div
                  className="absolute flex flex-col p-2 gap-2 right-0 top-4.5  mt-3 items-center w-[200px] rounded-lg bg2nd  shadow-lg z-50 
                  opacity-0 -translate-y-5 pointer-events-none 
                  transition-all duration-500 ease-in-out 
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  "
                >
                  <img
                    src="./download.png"
                    alt="QR"
                    className="w-[150px] h-[150px] rounded-xl bg-white"
                  />
                  <span className="text-center  text-sm">
                    Scan to Download the APP
                  </span>
                  <div className="w-full primarycolorbg text-center text-black py-2 rounded-sm font-bold hover:opacity-80 transition">
                    SEE MORE
                  </div>
                </div>
              </div>
            </li>
            {/* language */}
            <li
              className="relative inline-block py-1 px-4 rounded-sm cursor-pointer  group 
               bghover transform transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Globe Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
              </svg>

              {/* Dropdown */}
              <div
                className="absolute right-0 mt-1.5 w-32 bg2nd lighttext rounded-sm shadow-lg 
               opacity-0 scale-95 transform transition-all duration-300 origin-top 
               pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
              >
                {Language.map((lang, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 text-center border-b border-gray-700 hover:bg-[#4a4949] hover:text-white last:border-none"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </li>
            {/* theme */}
            <li
              className="text-md font-[500]"
              onClick={() => setDark(!dark)}
            >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-moon-fill text-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* tblet-mobile view */}
      {/* <div className="lg:hidden fixed h-screen top-0 m-0 w-full flex flex-col justify-between"> */}
      <div className="lg:hidden fixed top-0 m-0 w-full navbg h-[60px] flex flex-row items-center justify-between py-2 px-5 border-b border-b-gray-600 ">
        {/* Logo */}
        <div className="w-[40px]">
          <img
            src="./coinlogo.png"
            alt=""
            className="h-[30px] w-[30px] p-1 bg-[#ffd84d] rounded-sm"
          />
        </div>

        {/* Sidebar */}
        <div
          className={`absolute w-full md:w-70 flex flex-col bg2nd h-[100vh] right-0 transform transition-all top-0 duration-500  overflow-auto py-10 px-5 gap-10 ${
            open ? "translate-x-0" : "translate-x-[100%] "
          }`}
        >
          {/* Close Button */}
          <div
            onClick={() => setOpen(!open)}
            className="flex w-full justify-end md:justify-start cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>

          {/* Login / Signup */}
          <ul className="flex flex-col gap-5 text-center items-center">
            <a href="login">
              <li className="w-full">Log in</li>
            </a>
            <a href="signup">
              <li className="w-full text-md font-[500] py-2 px-3 text-black rounded-md primarycolorbg bg-white">
                Sign Up
              </li>
            </a>
            <a href="/profile">
              <li className="w-full text-md font-[500] py-2 px-3 text-black rounded-md primarycolorbg bg-white">
                Profile
              </li>
            </a>
          </ul>

          {/* Main Menu */}
          <ul className="flex flex-col gap-3 items-start z-50 mb-[50px]  w-full">
            {Object.entries(menuItems).map(([menu, subItems], index) => (
              <li key={index} className="w-full">
                {/* Parent Menu */}
                <div
                  onClick={() => handleDropdown(menu)}
                  className="w-full flex justify-between items-center hover:primarycolor cursor-pointer py-2"
                >
                  <span>{menu}</span>
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
                {subItems.length > 0 && (
                  <ul
                    className={`ml-4 lighttext text-sm overflow-hidden transition-all ease-initial duration-300 ${
                      activeDropdown === menu ? "h-fit mt-1 " : "max-h-0"
                    }`}
                  >
                    {subItems.map((item, i) => (
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

            {/* Static Item */}
            <li className="w-full border-t border-gray-600 my-3"></li>
            <li className="w-full flex justify-between items-center py-2">
              <span>Theme Selection</span>
              {/* theme */}
              <div
                className="text-md font-[500]"
                onClick={() => setDark(!dark)}
              >
                {dark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-brightness-high-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-moon-fill text-black"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                  </svg>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Right icons */}
        <div className="flex flex-row">
          <ul className="flex flex-row gap-5 items-center">
            {/* Search icon in navbar */}
            <li
              className="text-md font-[500] cursor-pointer"
              onClick={() => setSearch(!search)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 
                  3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 
                  6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </li>

            {/* Fullscreen search popup */}
            {search && (
              <div className="fixed inset-0 bg-[#0f0f0fed] flex flex-col items-center justify-start left-[5%] w-[90%] mt-[70px] py-5 z-[9999] transition-all duration-500">
                <div className="flex flex-row w-full gap-2 items-center justify-center">
                  <div className="w-[90%] md:w-[50%]">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search..."
                      className="w-full px-4 py-3 text-lg rounded-md border text-white border-gray-700 focus:ring-2 focus:ring-cyan-400 bg-black "
                    />
                  </div>

                  <button
                    onClick={() => setSearch(false)}
                    className="min-w-fit text-white cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <a href="/signup">
              <li className="text-md font-[500] py-2 px-3 bg-white text-black rounded-md">
                Sign up
              </li>
            </a>
            <a href="/profile">
              <li className="text-md font-[500] py-2 px-3 bg-white text-black rounded-md">
                Profile
              </li>
            </a>
            <li onClick={() => setOpen(!open)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-border-width"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
