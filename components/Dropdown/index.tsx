import React from "react";

import { CityContext } from "@/contexts/city";
import { City, Weather } from "@/config/types";
import { getCity } from "@/utils/api";

interface DropdownProps {
  setCity: (city: Weather) => void;
}

export function Dropdown({ setCity }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const { cities, eraseCity } = React.useContext(CityContext);
  const [list, setList] = React.useState([] as City[]);

  React.useEffect(() => setList(cities), [cities]);

  const onCityNameClick = async (cityName: string) => {
    const city = await getCity(cityName);
    setCity(city);
  };

  return (
    <div className="relative">
      {open ? (
        <img
          className="w-10 h-10 cursor-pointer lg:w-12"
          src="/x.svg"
          alt="burger menu"
          onClick={() => setOpen(false)}
        />
      ) : (
        <img
          className="w-10 h-10 cursor-pointer lg:w-12"
          src="/menu.svg"
          alt="burger menu"
          onClick={() => setOpen(true)}
        />
      )}
      <ul
        className={`dropdownContent flex flex-col gap-2 absolute p-3 w-max rounded right-0 bg-whiter ${
          open ? "" : "hidden"
        }`}
      >
        {list && list.length > 0
          ? list?.map(city => (
              <li
                key={city.id}
                className="flex justify-between gap-2 border-b pb-1 cursor-pointer font-mono"
              >
                <p
                  className="hover:text-main"
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
    </div>
  );
}
