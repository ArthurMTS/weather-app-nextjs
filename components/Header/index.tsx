import React from "react";
import { toast } from "react-toastify";

import { Weather } from "@/config/types";
import { Dropdown } from "@/components";
import { getCity } from "@/utils/api";

interface HeaderProps {
  setCity: (city: Weather) => void;
  setLoading: (value: boolean) => void;
}

export function Header({ setCity, setLoading }: HeaderProps) {
  const [input, setInput] = React.useState("");

  const handleError = () => toast.error("Cidade não encontrada 🧭");

  const onCitySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input === "") return;
    try {
      setCity(await getCity(input));
      setLoading(true);
    } catch (err) {
      handleError();
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-2 bg-black fixed w-full">
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className="w-10 h-10 fill-white lg:w-12 h-12"
            src="/umbrella.svg"
            alt="wind"
          />
          <h1 className="text-2xl font-semibold text-light hidden sm:block md:text-3xl lg:text-4xl">
            Weather
          </h1>
        </div>

        <form onSubmit={onCitySubmit} className="flex items-center gap-2">
          <input
            className="p-2 w-32 text-sm rounded mc:w-48 sm:w-60 md:text-base md:w-80 lg:text-2xl lg:w-96"
            type="text"
            placeholder="City Name"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <button
            className="bg-light rounded-full p-1 ease-in duration-200 hover:scale-110 md:p-2"
            type="submit"
          >
            <img src="/search.svg" alt="search" />
          </button>
        </form>

        <Dropdown setCity={setCity} />
      </header>
    </>
  );
}
