import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  metersPSToMilesPH,
  metersToKm,
  metersToMiles,
  timeTwelveHoursFormat,
  unixToLocalTime,
} from "./format";

export function getTemp(system: string, temp: number) {
  return system === "metric" ? `${kelvinToCelsius(temp)}°C` : `${kelvinToFahrenheit(temp)}°F`;
}

export function getDistance(system: string, meters: number) {
  return system === "metric" ? metersToKm(meters) : metersToMiles(meters);
}

export function getWindSpeed(system: string, speed: number) {
  return system === "metric" ? speed : metersPSToMilesPH(speed);
}

export function getTime(system: string, dt: number, timestemp: number) {
  const time = unixToLocalTime(dt, timestemp);
  return system === "metric" ? time : timeTwelveHoursFormat(time);
}

export function getAMPM (system: string, dt: number, timezone: number) {
  if (system === "metric") return "";
  const hours = unixToLocalTime(dt, timezone)?.split(":")[0] || 0;
  return +hours >= 12 ? "PM" : "AM";
}

export const getWeekDay = (dt: number, timezone: number) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((dt + timezone) * 1000).getDay()
  ];
};
