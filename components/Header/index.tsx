import React from "react";
import { toast } from "react-toastify";

import { api } from "@/config/api";
import { Weather, WeatherReturn } from "@/config/types";

interface HeaderProps {
  setCity: (city: Weather) => void;
}

export function Header({ setCity }: HeaderProps) {
  const [input, setInput] = React.useState("");

  const handleError = () => toast.error("Cidade não encontrada 🧭");

  const onCitySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input === "") return;
    try {
      const result = await api.get<WeatherReturn>(`/weather?q=${input}`);

      const city: Weather = {
        id: result?.data.id,
        name: result?.data.name,
        country: result?.data.sys.country,
        temp: result?.data.main.temp,
        feels_like: result?.data.main.feels_like,
        weather: result?.data.weather[0].description,
        humidity: result?.data.main.humidity,
        visibility: result?.data.visibility,
        wind_direction: result?.data.wind.deg,
        wind_speed: result?.data.wind.speed,
        sunrise: result?.data.sys.sunrise,
        sunset: result?.data.sys.sunset,
        timezone: result?.data.timezone,
        dt: result?.data.dt,
      }
      
      setCity(city);
    } catch(err) {
      console.error(err);
      handleError();
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

        <img
          className="w-10 h-10 cursor-pointer lg:w-12"
          src="/menu.svg"
          alt="burger menu"
        />
      </header>
    </>
  );
}
