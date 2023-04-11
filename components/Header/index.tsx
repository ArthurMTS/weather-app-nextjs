import React from "react";

export function Header() {
  const [city, setCity] = React.useState("");

  const onCitySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // search for city
  };

  return (
    <>
      <header className="flex items-center justify-between p-2 bg-black fixed w-full">
        <div className="flex items-center gap-2 lg:gap-4">
          <img className="w-10 h-10 fill-white lg:w-12 h-12" src="/umbrella.svg" alt="wind" />
          <h1 className="text-2xl font-semibold text-light hidden sm:block md:text-3xl lg:text-4xl">Weather</h1>
        </div>

        <form onSubmit={onCitySubmit} className="flex items-center gap-2">
          <input
            className="p-2 w-32 text-sm rounded mc:w-48 sm:w-60 md:text-base md:w-80 lg:text-2xl lg:w-96"
            type="text"
            placeholder="City Name"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <button className="bg-light rounded-full p-1 ease-in duration-200 hover:scale-110 md:p-2" type="submit">
            <img src="/search.svg" alt="search" />
          </button>
        </form>

        <img className="w-10 h-10 cursor-pointer lg:w-12" src="/menu.svg" alt="burger menu" />
      </header>
    </>
  );
}
