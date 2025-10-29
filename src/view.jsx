import React, { useState, useEffect } from "react";
import Chart from "./chart";
import HeroData from "./component/herodata";
import BuySell from "./component/buysell";
import Order from "./component/order";
import Trade from "./component/trade";
import "./View.css";
import { useBuy } from "./context/BuyContext";

const View = () => {
  const { ShowBuy, setShowBuy, setBuy } = useBuy();
  const [open, setOpen] = useState(1);

  useEffect(() => {
    if (ShowBuy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ShowBuy]);

  return (
    <div className="view-container">
      {/* Hero Section */}
      <div className="hero-section ">
        <HeroData />
      </div>

      {/* Main Layout */}
      <div className="main-layout ">
        {/* Left Section */}
        <div className="left-section">
          <Chart />

          {/* Second Row */}
          <div className="orders-section whitespace-nowrap">
            <div className="orders-header ">
              <ul className="orders-tabs scrollbar-hide ">
                <li className="active">Open&nbsp;Order</li>
                <li>Bot&nbsp;Order (0)</li>
                <li>Order&nbsp;History</li>
                <li>Trade&nbsp;History</li>
                <li>Funds</li>
              </ul>
            </div>

            <div className="orders-content lighttext">
              <span>Please</span>
              <a href="login"><span className="primarycolor">log&nbsp;in</span></a>
              <span>or</span>
              <a href="signup"><span className="primarycolor">register</span></a>
              <span>first</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="right-inner ">
            <BuySell />
          </div>
        </div>
      </div>

      {/* Fixed Bottom Panel (Mobile) */}
      <div className="bottom-panel">
        {/* Buy/Sell Buttons */}
        <div className="bottom-buttons">
          <button
            className="buy-button"
            onClick={() => {
              setShowBuy(true), setBuy(true);
            }}
          >
            BUY
          </button>
          <button
            className="sell-button"
            onClick={() => {
              setShowBuy(true), setBuy(false);
            }}
          >
            SELL
          </button>
        </div>

        {/* Popup Section */}
        {/* {ShowBuy && (
          <div className="popup ">
            <div></div>
            <BuySell />
          </div>
        )} */}

        {ShowBuy && (
          <div className="popup overscroll-none pb-2">
            <div className=" flex flex-row items-center justify-between px-5 h-[40px] border-y border-y-gray-700">
              <span className="lighttext text-sm">Heading</span>
              {/* Close (cross) icon — visible only on mobile */}
              <button
                className=" md:hidden lighttext hover:text-white transition-colors duration-200"
                onClick={() => setShowBuy(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
                  />
                </svg>
              </button>
            </div>
            <div className="bottom-0">
              <div className=" relative flex flex-row gap-10 px-2 pt-2 border-b border-b-gray-800 ">
                <span
                  className={`text-md cursor-pointer w-1/2 text-center ${
                    open === 1 ? "font-bold" : "lighttext"
                  }`}
                  onClick={() => setOpen(1)}
                >
                  Orders
                </span>
                <span
                  className={`text-md cursor-pointer w-1/2 text-center ${
                    open === 2 ? "font-bold" : "lighttext"
                  }`}
                  onClick={() => setOpen(2)}
                >
                  Trades
                </span>
                <span
                  className="absolute bottom-0 h-[2px] primarycolorbg transition-all duration-500"
                  style={{ width: "50%", left: `${(open - 1) * 50}%` }}
                ></span>
              </div>
              {/* Data */}
              <div className="text-sm h-[300px] overflow-auto scrollbar-hide lg:px-5 md:px-3 px-2 py-2 text-[.7rem]  font-[300]">
                {open === 1 ? <Order /> : <Trade />}
              </div>
            </div>
            <div className="">
              <BuySell />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
