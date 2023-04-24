import React from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

import { getDistance, getTime, getWindSpeed } from "@/utils/helpers";
import { InfoCard } from "@/components";
import { degToCompass } from "@/utils/format";
import { CityContext } from "@/contexts/city";

interface ItemProps {
  title: string;
  value: string | number;
  sub?: string;
  icon: string;
}

export function CityDetails() {
  const [items, setItems] = React.useState<ItemProps[]>([]);
  const { city, system } = React.useContext(CityContext);

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    const itemList = [...items];
    const aux = {...itemList[destination.index]};
    itemList[destination.index] = {...itemList[source.index]};
    itemList[source.index] = {...aux};
    setItems(itemList);
  };

  React.useEffect(() => {
    const itemList = [];
    itemList.push({
      title: "Humidity",
      value: city.humidity,
      sub: "%",
      icon: "/droplet.svg",
    });
    itemList.push({
      title: "Wind speed",
      value: getWindSpeed(system, city.wind_speed),
      sub: system === "metric" ? "m/s" : "m/h",
      icon: "/wind.svg",
    });
    itemList.push({
      title: "Wind direction",
      value: degToCompass(city?.wind_direction),
      icon: "/compass.svg",
    });
    itemList.push({
      title: "Visibility",
      value: getDistance(system, city?.visibility),
      sub: system === "metric" ? "km" : "miles",
      icon: "/eye.svg",
    });
    itemList.push({
      title: "Sunrise",
      value: getTime(system, city?.sunrise, city?.timezone) || "",
      sub: system === "metric" ? "" : "AM",
      icon: "/sunrise.svg",
    });
    itemList.push({
      title: "Sunset",
      value: getTime(system, city?.sunset, city?.timezone) || "",
      sub: system === "metric" ? "" : "PM",
      icon: "/sunset.svg",
    });
    setItems(itemList);
  }, [system, city]);

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="details">
        {(droppableProvided, droppableSnapshot) => (
          <div
            className={`w-full flex flex-wrap justify-center gap-2 sm:gap-4 lg:w-3/4 ${
              droppableSnapshot.isDraggingOver ? "opacity-80" : ""
            }`}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {items.map((item, index) => 
              <InfoCard
                key={index}
                index={index}
                title={item.title}
                value={item.value}
                sub={item.sub}
                icon={item.icon}
              />  
            )}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
