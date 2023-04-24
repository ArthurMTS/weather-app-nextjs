import React from "react";

import { City, Weather } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface CityContextInfo {
  cities: City[];
  saveCity: (city: City) => void;
  eraseCity: (id: number) => void;
  city: Weather;
  setCity: (city: Weather) => void;
  system: "metric" | "imperial";
  setSystem: (system: "metric" | "imperial") => void;
}

interface CityProviderProps {
  children: React.ReactElement;
}

export const CityContext = React.createContext({} as CityContextInfo);

export function CityProvider({ children }: CityProviderProps) {
  const [city, setCity] = React.useState<Weather>({} as Weather);
  const [system, setSystem] = React.useState<"metric" | "imperial">("metric");
  const [cities, setCities] = useStorage("cities", [] as City[]);
  const [list, setList] = React.useState<City[]>([] as City[]);

  React.useEffect(() => setList(cities), [cities]);

  const saveCity = (newCity: City) => {
    const list = [...cities];
    list.push(newCity);
    setCities(list);
  };
  const eraseCity = (id: number) => {
    let list = [...cities];
    list = list.filter(city => city.id !== id);
    setCities(list);
  };

  return (
    <CityContext.Provider
      value={{
        cities: list,
        saveCity,
        eraseCity,
        city,
        setCity,
        system,
        setSystem,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
