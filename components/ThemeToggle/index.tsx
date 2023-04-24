import { ThemeContext } from "@/contexts/theme";
import React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <div
      className={`cursor-pointer rounded-full p-1 ease-in duration-200 hover:scale-110 md:p-2 ${
        theme === "light" ? "bg-sky-950" : "bg-yellow-300"
      }`}
    >
      {theme === "light" ? (
        <img
          src="/MoonToggle.svg"
          alt="Dark mode icon"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <img
          src="/SunToggle.svg"
          alt="Light mode icon"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}
