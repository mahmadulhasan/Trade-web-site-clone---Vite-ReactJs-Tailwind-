import React, { useState } from "react";
import Order from "./component/order";
import Trade from "./component/trade";
import TradeChart from "./component/tradechart";

const Chart = () => {
  const [open, setOpen] = useState(1);
  const [chartopen, setChartopen] = useState(1);

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full backgraound">
        {/* right side chart */}
        <div className="lg:w-2/3 w-full  lg:h-[500px] h-[300px]   flex flex-col ">
          <div className="lg:hidden">
            {/* Tabs open close*/}
            <div className="flex flex-row gap-10 px-2 pt-2 border-b border-b-gray-800">
              <span
                className={`text-[13px] cursor-pointer ${
                  chartopen === 1
                    ? "border-b-2 border-b-[#fbcf32]"
                    : "text-gray-400"
                }`}
                onClick={() => setChartopen(1)}
              >
                Chart
              </span>
              <span
                className={`text-[13px] cursor-pointer ${
                  chartopen === 2
                    ? "border-b-2 border-b-[#ffd84d]"
                    : "text-gray-400"
                }`}
                onClick={() => setChartopen(2)}
              >
                Orders
              </span>
              <span
                className={`text-[13px] cursor-pointer ${
                  chartopen === 3
                    ? "border-b-2 border-b-[#ffd84d]"
                    : "text-gray-400"
                }`}
                onClick={() => setChartopen(3)}
              >
                Trades
              </span>
            </div>

            <div className=" px-5 ">
              {chartopen === 1 && <TradeChart />}
              {chartopen === 2 && <Order />}
              {chartopen === 3 && <Trade />}
            </div>
          </div>
          <div className="hidden lg:flex borderl h-full">
            <TradeChart />
          </div>
        </div>
        {/* left side orders/trades */}
        <div className="hidden lg:w-1/3 w-full lg:flex flex-col  lg:h-[500px] h-[400px]  lg:px-5  md:px-3 px-2 ">
          {/* Tabs */}
          <div className=" relative flex flex-row gap-10 px-2 pt-1  ">
            <span
              className={`text-[13px] cursor-pointer w-1/2 text-center pb-2 ${
                open === 1 ? "font-bold" : "lighttext"
              }`}
              onClick={() => setOpen(1)}
            >
              Orders
            </span>
            <span
              className={`text-[13px] cursor-pointer w-1/2 text-center ${
                open === 2 ? "font-bold" : "lighttext"
              }`}
              onClick={() => setOpen(2)}
            >
              Trades
            </span>
            <span className="absolute bottom-0 h-[2px] primarycolorbg transition-all duration-500"
            style={{width: "50%", left:`${(open-1)*50}%`}}
            
            >

            </span>
          </div>

          {/* Data */}
          <div className="text-sm h-[500px] overflow-auto scrollbar-hide  py-2 text-[.7rem]  font-[300]">
            {open === 1 ? <Order /> : <Trade />}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Chart;
