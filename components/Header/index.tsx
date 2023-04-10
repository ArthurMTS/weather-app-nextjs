import React from "react";

export function Header() {
  const [city, setCity] = React.useState("");

  const onCitySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // search for city
  };

  return (
    <>
      <header className="flex items-center justify-between px-10 py-2 bg-white">
        <div className="flex items-center gap-5">
          <img className="w-14 h-14" src="/wind.svg" alt="wind" />
          <h1 className="text-4xl text-dark">Weather</h1>
        </div>

        <form onSubmit={onCitySubmit} className="flex items-center gap-4">
          <input
            className="p-2 w-60"
            type="text"
            placeholder="City Name"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <button className="bg-blue rounded-full p-2" type="submit">
            🔍
          </button>
        </form>

        <p className="bg-blue text-white p-2 cursor-pointer">Saved Cities</p>
      </header>
    </>
  );
}
