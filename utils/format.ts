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

function timezoneToDate(timezone: number) {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const city = utc + 1000 * timezone;
  return new Date(city);
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
