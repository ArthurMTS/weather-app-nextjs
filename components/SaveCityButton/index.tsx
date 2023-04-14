import React from "react";

import { Weather } from "@/config/types";
import { CityContext } from "@/contexts/city";

interface SaveCityButtonProps {
  city: Weather;
}

export function SaveCityButton({ city }: SaveCityButtonProps) {
  const [saved, setSaved] = React.useState(false);
  const { cities, saveCity } = React.useContext(CityContext);

  React.useMemo(() => {
    const result = cities?.find(saved => saved?.id === city?.id);
    if (result) setSaved(true);
    else setSaved(false);
  }, [cities, city]);

  return (
    <button
      className={`border-2 font-semibold rounded-lg p-1 duration-200 ${
        saved
          ? "border-light text-light cursor-no-drop"
          : "border-main text-main hover:bg-main hover:text-white"
      }`}
      disabled={saved}
      onClick={() => saveCity(city)}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
