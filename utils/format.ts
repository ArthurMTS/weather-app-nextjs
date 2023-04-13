export function metersToKm(meters: number) {
  return (meters / 1000).toFixed(1);
}

export function metersToMiles(meters: number) {
  return (meters * 0.000621371192).toFixed(1);
}

export function metersPSToMilesPH(speed: number) {
  return (speed * 2.236936).toFixed(2);
}

export function kelvinToCelsius(temp: number) {
  return Math.round(temp - 273.15);
}

export function kelvinToFahrenheit(temp: number) {
  return Math.round((temp * 9) / 5 - 459.67);
}

export function unixToLocalTime(dt: number, timezone: number) {
  const time = new Date((dt + timezone) * 1000)
    .toISOString()
    ?.match(/\d{2}:\d{2}/)
    ?.toString();
  return time?.startsWith("0") ? time.slice(1) : time;
}

export function timeTwelveHoursFormat(time: any) {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
}

export function degToCompass(degree: number) {
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
}
