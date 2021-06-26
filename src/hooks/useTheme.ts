import { themeContext } from "../contexts/themeContext";
import { useContext } from "react";

export function useTheme() {
  const value = useContext(themeContext);
  return value;
}
