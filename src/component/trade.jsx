import React from "react";

// Move static trade data outside the component to avoid re-creation on each render
const trades = [
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:05", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:06", price: 121773.79, amount: 0.00039, type: "buy" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "sell" },
  { time: "15:21:07", price: 121773.79, amount: 0.00039, type: "buy" },
  
];

const Trade = () => {
  return (
    <div className="w-full  flex flex-col  text-xs font-[500]">
      {/* Header */}
      <div className="flex justify-between font-semibold border-b border-gray-700 pb-1 mb-1">
        <span>Time</span>
        <span>Price (USDT)</span>
        <span>Amount (BTC)</span>
      </div>

      {/* Trades List */}
      <div className=" lg:h-[470px] h-[230px] space-y-0.5 tradelist">
        {trades.map((trade, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-0.5 hover:bg-gray-800/30 transition-colors duration-100"
          >
            <span>{trade.time}</span>
            <span
              className={
                trade.type === "buy" ? "greencolor" : "text-red-500"
              }
            >
              {trade.price.toLocaleString()}
            </span>
            <span>{trade.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
