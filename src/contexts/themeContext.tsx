import { createContext, ReactNode, useState } from "react";



type Theme = string;

type themeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type themeContextProviderPropsType = {
  children: ReactNode;
};

export const themeContext = createContext<themeContextType>(
  {} as themeContextType
);

export const ThemeContextProvider = (props: themeContextProviderPropsType) => {
  const [actualTheme, setActualTheme] = useState("light");
  const [actualIcon, setActualIcon] = useState("RiLightbulbLine");

  const toggleTheme = () => {
    setActualTheme(actualTheme === "light" ? "dark" : "light");
    
  };

  return (
    <themeContext.Provider
      value={{
        theme: actualTheme,
        toggleTheme,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};
