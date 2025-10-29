import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/themeprovider";
import Trade from "./trade.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import ProfileIndex from "./profile/index";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfileIndex />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
