import React from "react";

import { Weather } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface CityContextInfo {
  cities: Weather[];
  saveCity: (city: Weather) => void;
  eraseCity: (id: number) => void;
}

interface CityProviderProps {
  children: React.ReactElement;
}

export const CityContext = React.createContext({} as CityContextInfo);

export function CityProvider({ children }: CityProviderProps) {;
  // const [cities, setCities] = useStorage("cities", [] as Weather[]);
  const [cities, setCities] = React.useState([] as Weather[]);

  const saveCity = (city: Weather) => {
    const list = [...cities];
    list.push(city);
    setCities(list);
  };
  const eraseCity = (id: number) => {
    let list = [...cities];
    list = list.filter(city => city.id !== id);
    setCities(list);
  };

  return (
    <CityContext.Provider value={{ cities, saveCity, eraseCity }}>
      {children}
    </CityContext.Provider>
  );
}
