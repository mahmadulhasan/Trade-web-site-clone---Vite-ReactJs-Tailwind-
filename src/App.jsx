import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/themeprovider";
import Trade from "./trade.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import ProfileIndex from "./profile/index";
import Security from './profile/security'
import Identityverification from './profile/identityverification'
import Apimanagement from './profile/apimanagement'
import Subaccout from './profile/subaccout'
import Exporthistory from './profile/exporthistory'
import Reward from './profile/reward'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProfileIndex />} />
          <Route path="/account/security" element={<Security />} />
          <Route path="/account/identity-verification" element={<Identityverification />} />
          <Route path="/account/api-management" element={<Apimanagement />} />
          <Route path="/account/sub-account" element={<Subaccout />} />
          <Route path="/account/export-history" element={<Exporthistory />} />
          <Route path="/account/reward" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
