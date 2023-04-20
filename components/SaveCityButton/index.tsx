import React from "react";

import { City } from "@/config/types";
import { CityContext } from "@/contexts/city";

interface SaveCityButtonProps {
  city: City;
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
      className={`bg-slate-100 border-2 font-semibold rounded-lg p-1 duration-200 font-mono sm:text-xl ${
        saved
          ? "border-light text-gray-400 cursor-no-drop"
          : "border-amber-400 text-main hover:bg-amber-400 hover:text-white"
      }`}
      disabled={saved}
      onClick={() => saveCity(city)}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
