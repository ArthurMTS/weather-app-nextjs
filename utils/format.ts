export const metersToKm = (meters: number) => (meters / 1000).toFixed(1);

export const metersToMiles = (meters: number) =>
  (meters * 0.000621371192).toFixed(1);

export const metersPSToMilesPH = (speed: number) =>
  (speed * 2.236936).toFixed(2);

export const kelvinToCelsius = (temp: number) => Math.round(temp - 273.15);

export const kelvinToFahrenheit = (temp: number) =>
  Math.round((temp * 9) / 5 - 459.67);

export const unixToLocalTime = (dt: number, timezone: number) => {
  const time = new Date((dt + timezone) * 1000)
    .toISOString()
    ?.match(/\d{2}:\d{2}/)
    ?.toString();
  return time?.startsWith("0") ? time.slice(1) : time;
};

export const timeTwelveHoursFormat = (time: any) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (degree: number) => {
  const value = degree / 22.5 + 0.5;
  const compass = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return compass[Math.floor(value % 16)];
};
