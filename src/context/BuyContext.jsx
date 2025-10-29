import React, { createContext, useContext, useState } from "react";

//create contex
const BuyContext = createContext();

//contex provider
export const BuyProvider = ({ children }) => {
  const [ShowBuy, setShowBuy] = useState(false); // for popup
  const [buy, setBuy] = useState(true); // for buy/sell button toggle

  return (
    <BuyContext.Provider value={{ ShowBuy, setShowBuy, buy, setBuy }}>
      {children}
    </BuyContext.Provider>
  );
};

// Custom hook for easy usage
export const useBuy = () => useContext(BuyContext);

