import { useStorage } from "@/hooks/useStorage";
import React from "react";

interface ThemeContextInfo {
  theme: "dark" | "light";
  setTheme: (value: "dark" | "light") => void;
}

interface ThemeProviderProps {
  children: React.ReactElement;
}

export const ThemeContext = React.createContext({} as ThemeContextInfo);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useStorage("theme", "dark");
  const [activeTheme, setActiveTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
