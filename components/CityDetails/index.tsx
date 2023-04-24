import React from "react";

import { getDistance, getTime, getWindSpeed } from "@/utils/helpers";
import { InfoCard } from "@/components";
import { degToCompass } from "@/utils/format";
import { CityContext } from "@/contexts/city";

export function CityDetails() {
  const { city, system } = React.useContext(CityContext);

  return (
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
  );
}
