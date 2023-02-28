import { useEffect, useState, createContext } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const preference = window.localStorage.getItem("current-theme");
    if (typeof preference === "string") {
      return preference;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  //
  const checkTheme = (exists) => {
    const root = window.document.documentElement;
    const isDark = exists === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(exists);
    //
    localStorage.setItem("current-theme", exists);
  };
  //
  if (initialTheme) {
    checkTheme(initialTheme);
  }
  //
  useEffect(() => {
    checkTheme(theme);
  }, [theme]);
  //
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
