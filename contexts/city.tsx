import React from "react";

import { City } from "@/config/types";
import { useStorage } from "@/hooks/useStorage";

interface CityContextInfo {
  cities: City[];
  saveCity: (city: City) => void;
  eraseCity: (id: number) => void;
}

interface CityProviderProps {
  children: React.ReactElement;
}

export const CityContext = React.createContext({} as CityContextInfo);

export function CityProvider({ children }: CityProviderProps) {
  const [cities, setCities] = useStorage("cities", [] as City[]);

  const saveCity = (city: City) => {
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
