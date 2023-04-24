import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  Header,
  CityInfo,
  InfoCard,
  MetricToggle,
  Loading,
  SaveCityButton,
} from "@/components";
import { degToCompass } from "@/utils/format";
import {
  getAMPM,
  getDistance,
  getTemp,
  getTime,
  getWeekDay,
  getWindSpeed,
} from "@/utils/helpers";
import { CityContext } from "@/contexts/city";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const { city, system } = React.useContext(CityContext);
  let Display = city?.name ? (
    <>
      <CityInfo
        city={`${city.name}, ${city.country}`}
        temp={getTemp(system, city.temp)}
        feel={getTemp(system, city.feels_like)}
        weather={city.weather}
        description={city?.description}
        date={
          getWeekDay(city.dt, city.timezone) +
          " " +
          (getTime(system, city.dt, city.timezone) || "") +
          " " +
          getAMPM(system, city?.dt, city?.timezone)
        }
      />
      <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 lg:w-3/4">
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
      <div className="flex gap-2 justify-center items-center">
        <MetricToggle />
        <SaveCityButton />
      </div>
    </>
  ) : (
    ""
  );

  return (
    <>
      <Header setLoading={setLoading} />
      <main className="bg-gradient-to-r from-sky-200 to-cyan-100 flex flex-col justify-center items-center h-screen dark:from-sky-950 dark:to-sky-900">
        <ToastContainer />
        {loading ? <Loading /> : ""}
        {Display}
      </main>
    </>
  );
}
