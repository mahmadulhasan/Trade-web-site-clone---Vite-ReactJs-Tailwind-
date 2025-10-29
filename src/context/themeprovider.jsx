import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load saved theme from localStorage or default to dark
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("tradetheme");
    return savedTheme === "light" ? false : true;
  });

  useEffect(() => {
    if (!dark) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("tradetheme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("tradetheme", "dark");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
