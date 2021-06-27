import { useEffect } from "react";
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
  const [actualTheme, setActualTheme] = useState<Theme>(() => {
    const StorageTheme = localStorage.getItem("theme");

    return (StorageTheme ?? "light") as Theme
  });

  useEffect(() => {
    localStorage.setItem("theme", actualTheme)
  }, [actualTheme])
  

  const toggleTheme = () => {
    setActualTheme(actualTheme === "light" ? "dark" : "light");
    localStorage.setItem("theme", actualTheme)
    
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
