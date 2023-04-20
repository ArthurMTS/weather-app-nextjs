import React from "react";

import { CityContext } from "@/contexts/city";
import { City, Weather } from "@/config/types";
import { getCity } from "@/utils/api";

interface DropdownProps {
  setCity: (city: Weather) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function Dropdown({ setCity, open, setOpen }: DropdownProps) {
  const [list, setList] = React.useState([] as City[]);
  const { cities, eraseCity } = React.useContext(CityContext);

  React.useEffect(() => setList(cities), [cities]);

  const onCityNameClick = async (cityName: string) => {
    const city = await getCity(cityName);
    setCity(city);
  };

  return (
    <ul
      className={`dropdownContent flex flex-col gap-2 absolute p-3 rounded right-0 bg-slate-100 ${
        open ? "block" : "hidden"
      }`}
      onMouseMove={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      {list && list.length > 0
        ? list?.map(city => (
            <li
              key={city.id}
              className="flex justify-between gap-2 border-b pb-1 cursor-pointer border-blue-500 font-mono"
            >
              <p
                className="hover:text-blue-500 sm:text-lg"
                onClick={() => onCityNameClick(city.name)}
              >
                {city.name}
              </p>{" "}
              <img
                className="hover:animate-pulse"
                src="/trash.svg"
                alt="trash can"
                onClick={() => eraseCity(city.id)}
              />
            </li>
          ))
        : "No saved cities"}
    </ul>
  );
}
