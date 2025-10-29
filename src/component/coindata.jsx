import React, { useState } from "react";

const Coindata = () => {
  const [open, setOpen] = useState(0);

  const coin = ["USD", "KNCH", "ETF", "BTC", "ETH", "HOTCOIN"];

  const datasets = [
    Array(50).fill([["☆", "XT/USDT", "20X"], "6.8003", "-1.95%"]),
    Array(50).fill([["☆", "KNCH/USDT", "10X"], "0.8321", "+2.45%"]),
    Array(50).fill([["☆", "ETF/USDT", "5X"], "2.1103", "+0.75%"]),
    Array(50).fill([["☆", "BTC/USDT", "50X"], "66250.45", "-0.45%"]),
    Array(50).fill([["☆", "ETH/USDT", "20X"], "3050.32", "+1.15%"]),
    Array(50).fill([["☆", "HOTCOIN/USDT", "3X"], "0.00085", "+8.92%"]),
  ];

  const activeData = datasets[open];

  return (
    <div className="min-h-10 bg2nd w-[300px] flex flex-col p-2 gap-3 h-full">
      {/* Search Box */}
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter the token or contract address"
          className="border border-white rounded-sm w-full bg-transparent px-2 py-1  text-sm outline-none"
        />
      </div>

      {/* Tab Bar */}
      <div className="flex flex-row overflow-auto scrollbar-hide items-center justify-between text-sm text-semibold">
        {coin.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpen(i)}
            className={`cursor-pointer py-1 px-2 text-[.8rem] rounded-sm hover:text-white ${
              open === i ? "bg-[#434343] text-white" : "lighttext hover: hover:bg-[#434343] "
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Table Header */}
      <div className="flex flex-row items-center justify-between lighttext text-[0.8rem] font-medium">
        <span>Pairs</span>
        <span>Last Price</span>
        <span>Changes</span>
      </div>

      {/* Data List */}
      <div className="w-full">
        <ul className="w-full flex flex-col gap-2 max-h-[500px] overflow-auto scrollbar-hide">
          {activeData.map((data, i) => (
            <li
              className="w-full flex flex-row justify-between items-center text-sm lighttext hover:bg-[#17161683] px-2 py-1 rounded-md cursor-pointer"
              key={i}
            >
              <div className="flex items-center gap-2">
                <span>{data[0][0]}</span>
                <span>{data[0][1]}</span>
                <span className="text-xs lighttext bg-gray-500 p-1 rounded-sm">{data[0][2]}</span>
              </div>
              <span>{data[1]}</span>
              <span
                className={`font-semibold ${
                  data[2].includes("+") ? "greencolor" : "redtext"
                }`}
              >
                {data[2]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coindata;
