import React from "react";
import { toast } from "react-toastify";

import { Dropdown, ThemeToggle } from "@/components";
import { getCity } from "@/utils/api";
import { CityContext } from "@/contexts/city";

interface HeaderProps {
  setLoading: (value: boolean) => void;
}

export function Header({ setLoading }: HeaderProps) {
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { setCity } = React.useContext(CityContext);

  const handleCityNotFound = () => toast.error("City not found 🧭");
  const handleEmptyInput = () => toast.warning("Inform a city name");

  const onCitySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input === "") {
      handleEmptyInput();
      return;
    }
    try {
      setLoading(true);
      setCity(await getCity(input));
    } catch (err) {
      handleCityNotFound();
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-2 bg-blue-500 fixed w-full mc:px-5 sm:px-10 md:px-15 lg:px-20 dark:bg-slate-950">
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className="w-10 h-10 fill-white lg:w-12 h-12"
            src="/umbrella.svg"
            alt="wind"
          />
          <h1 className="text-2xl font-mono font-semibold text-white hidden sm:block md:text-3xl lg:text-4xl">
            Weather
          </h1>
        </div>

        <form onSubmit={onCitySubmit} className="flex items-center gap-2">
          <div className="relative">
            <input
              className="p-2 w-32 font-mono text-sm rounded mc:w-48 sm:w-60 md:text-base md:w-80 lg:text-2xl lg:w-96"
              type="text"
              placeholder="City Name"
              value={input}
              onChange={event => setInput(event.target.value)}
              onMouseOver={() => setOpen(true)}
              onMouseOut={() => setOpen(false)}
            />
            <Dropdown open={open} setOpen={setOpen} />
          </div>
          <button
            className="bg-slate-100 rounded-full p-1 ease-in duration-200 hover:scale-110 md:p-2"
            type="submit"
          >
            <img src="/search.svg" alt="search" />
          </button>
        </form>
        <ThemeToggle />
      </header>
    </>
  );
}
