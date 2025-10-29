import React from "react";
import "./App.css";
import Navbar from "./navbar";
import View from "./view";
import Banner from "./banner";
import { BuyProvider } from "./context/BuyContext";

function Trade() {
  return (
    <>
      <BuyProvider>
        <Navbar />
        <View />
        <Banner />
      </BuyProvider>
    </>
  );
}

export default Trade;
