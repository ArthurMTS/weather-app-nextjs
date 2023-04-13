import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Header, CityInfo, InfoCard, MetricToggle } from "@/components";
import { Weather } from "@/config/types";
import { degToCompass } from "@/utils/format";
import {
  getAMPM,
  getDistance,
  getTemp,
  getTime,
  getWeekDay,
  getWindSpeed,
} from "@/utils/helpers";

export default function Home() {
  const [city, setCity] = React.useState<Weather>({} as Weather);
  const [system, setSystem] = React.useState<"metric" | "imperial">("metric");
  let Display;

  React.useMemo(() => {
    Display = city?.name ? (
      <>
        <CityInfo
          city={`${city.name}, ${city.country}`}
          temp={getTemp(system, city.temp)}
          feel={getTemp(system, city.feels_like)}
          weather={city.weather}
          description={city?.description}
          date={
            getWeekDay(city.dt, city.timezone) + " " +
            (getTime(system, city.dt, city.timezone) ||
            "") + " " + getAMPM(system, city?.dt, city?.timezone)
          }
        />
        <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:w-3/4">
          <InfoCard
            title="Humidity"
            value={city.humidity}
            sub="%"
            icon="/droplet.svg"
          />
          <InfoCard
            title="Wind speed"
            value={getWindSpeed(system, city.wind_speed)}
            sub={system === "metric" ? "m/s" : "m/h"}
            icon="/wind.svg"
          />
          <InfoCard
            title="Wind direction"
            value={degToCompass(city?.wind_direction)}
            icon="/compass.svg"
          />
          <InfoCard
            title="Visibility"
            value={getDistance(system, city?.visibility)}
            sub={system === "metric" ? "km" : "miles"}
            icon="/eye.svg"
          />
          <InfoCard
            title="Sunrise"
            value={getTime(system, city?.sunrise, city?.timezone) || ""}
            sub={system === "metric" ? "" : "AM"}
            icon="/sunrise.svg"
          />
          <InfoCard
            title="Sunset"
            value={getTime(system, city?.sunset, city?.timezone) || ""}
            sub={system === "metric" ? "" : "PM"}
            icon="/sunset.svg"
          />
        </div>
        <MetricToggle system={system} setSystem={setSystem} />
      </>
    ) : (
      ""
    );
  }, [city, system]);

  return (
    <>
      <Header setCity={setCity} />
      <main className="bg-white flex flex-col justify-center items-center h-screen">
        <ToastContainer />
        {Display}
      </main>
    </>
  );
}
