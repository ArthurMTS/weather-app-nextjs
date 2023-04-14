import React from "react";

interface CityInfoProps {
  city: string;
  date: string;
  weather: string;
  description: string;
  temp: string;
  feel: string;
}

const weatherIcon = (weather: string) => {
  switch(weather) {
    case "Thunderstorm":
      return "cloud-lightning";
    case "Drizzle":
      return "cloud-drizzle";
    case "Rain":
      return "cloud-rain";
    case "Snow":
      return "cloud-snow";
    case "Clear":
      return "sun";
    case "Clouds":
      return "cloud";
    default:
      return "mist";
  }
};

export function CityInfo({ city, date, weather, description, temp, feel }: CityInfoProps) {
  return (
    <section className="flex justify-between items-center bg-whiter rounded-xl p-1 my-4 shadow gap-3 mc:gap-2 mc:p-2 sm:p-4 md:w-3/4">
      <div className="flex flex-col items-center">
        <p className="text-dark capitalize text-sm mc:text-base sm:text-lg lg:text-2xl">
          {description}
        </p>
        <p className="font-semibold text-black text-xl mc:text-2xl lg:text-4xl">
          {temp}
        </p>
        <p className="text-dark text-sm mc:text-base sm:text-lg lg:text-2xl">
          Feels like {feel}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-dark text-sm mc:text-base sm:text-lg lg:text-2xl">
          {date}
        </p>
        <div className="flex gap-1">
          <img className="w-4 lg:w-6" src="/map-pin.svg" alt="map pin" />
          <p className="font-bold text-black mc:text-lg sm:text-xl lg:text-3xl">
            {city}
          </p>
        </div>
      </div>

      <img
        className="w-12 sm:w-14 lg:w-20"
        src={`/${weatherIcon(weather)}.svg`}
        alt="weather"
      />
    </section>
  );
}
