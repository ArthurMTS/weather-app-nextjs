import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  Header,
  CityInfo,
  MetricToggle,
  Loading,
  SaveCityButton,
  CityDetails,
} from "@/components";
import {
  getAMPM,
  getTemp,
  getTime,
  getWeekDay,
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
      <CityDetails />
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
