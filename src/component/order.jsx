import React from "react";

const Order = () => {
  // Sample data for "Orders"
  const sellOrders = [
    { price: 121909.5, amount: 0.55409, total: 10.882244, type: "sell" },
    { price: 121908.5, amount: 0.23409, total: 5.882244, type: "sell" },
    { price: 121907.5, amount: 0.75409, total: 15.882244, type: "sell" },
    { price: 121906.5, amount: 0.65409, total: 12.882244, type: "sell" },
    { price: 121905.5, amount: 0.95409, total: 18.882244, type: "sell" },
  ];

  const buyOrders = [
    { price: 121909.5, amount: 0.55409, total: 10.882244, type: "buy" },
    { price: 121908.5, amount: 0.23409, total: 5.882244, type: "buy" },
    { price: 121907.5, amount: 0.75409, total: 15.882244, type: "buy" },
    { price: 121906.5, amount: 0.65409, total: 12.882244, type: "buy" },
    { price: 121905.5, amount: 0.95409, total: 18.882244, type: "buy" },
  ];
  return (
    <div className=" font-[500]">
      <div>
        {/* Header */}
        <div className="flex justify-between text-[.8rem] font-semibold border-b border-gray-700 pb-1 mb-1  ">
          <span>Price (USDT)</span>
          <span>Amount (BTC)</span>
          <span>Total (BTC)</span>
        </div>
        <div className="h-[230px] lg:h-[470px] overflow-y-auto scrollbar-hide">
          {/* Sell Orders */}
          {sellOrders.map((item, idx) => (
            <div key={`sell-${idx}`} className="flex justify-between py-0.5 text-[0.75rem]">
              <span className="text-red-600 ">
                {item.price.toLocaleString()}
              </span>
              <span className="">{item.amount}</span>
              <span className="">{item.total}</span>
            </div>
          ))}

          {/* Middle separator */}
          <div className="flex justify-between my-2 font-bold">
            <span className="text-red-600 text-sm w-1/3 text-start ">
              121909.50
            </span>
            <span className="text-center w-1/3 text-sm">122,032.92 USD</span>
            <span className="text-end w-1/3 primarycolor text-sm">More</span>
          </div>

          {/* Buy Orders */}
          {buyOrders.map((item, idx) => (
            <div
              key={`buy-${idx}`}
              className="flex justify-between py-0.5 text-[0.75rem]"
            >
              <span className="greencolor  ">
                {item.price.toLocaleString()}
              </span>
              <span className="">{item.amount}</span>
              <span className="">{item.total}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
