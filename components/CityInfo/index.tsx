interface CityInfoProps {
  city: string;
  date: string;
  weather: string;
  temp: string;
  feel: string;
}

export function CityInfo({ city, date, weather, temp, feel }: CityInfoProps) {
  return (
    <section className="flex justify-between items-center bg-whiter rounded-xl p-2 my-4 shadow gap-3 mc:gap-4 mc:p-3 sm:p-4 md:w-3/4">
      <div className="flex flex-col items-center">
        <p className="text-dark text-sm mc:text-base sm:text-lg lg:text-2xl">
          {weather}
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
        src="/cloud-rain.svg"
        alt="weather"
      />
    </section>
  );
}
