import React from "react";

export function Header() {
  const [city, setCity] = React.useState("");

  const onCitySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // search for city
  };

  return (
    <>
      <header className="flex items-center justify-between px-10 py-2 bg-gray">
        <div className="flex items-center gap-5">
          <img className="w-14 h-14" src="/umbrella.svg" alt="wind" />
          <h1 className="text-4xl font-semibold text-dark">Weather</h1>
        </div>

        <form onSubmit={onCitySubmit} className="flex items-center gap-2">
          <input
            className="p-2 w-60 text-lg rounded"
            type="text"
            placeholder="City Name"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <button className="bg-main rounded-full p-2 ease-in duration-200 hover:scale-110" type="submit">
            <img src="/search.svg" alt="search" />
          </button>
        </form>

        <p className="bg-main text-white p-2 cursor-pointer">Saved Cities</p>
      </header>
    </>
  );
}
