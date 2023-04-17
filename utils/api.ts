import { api } from "@/config/api";
import { WeatherReturn } from "@/config/types";

export async function getCity(cityName: string) {
  const city = (await api.get<WeatherReturn>(`/weather?q=${cityName}`)).data;

  return {
    id: city.id,
    name: city.name,
    country: city.sys.country,
    temp: city.main.temp,
    feels_like: city.main.feels_like,
    weather: city.weather[0].main,
    description: city.weather[0].description,
    humidity: city.main.humidity,
    visibility: city.visibility,
    wind_direction: city.wind.deg,
    wind_speed: city.wind.speed,
    sunrise: city.sys.sunrise,
    sunset: city.sys.sunset,
    timezone: city.timezone,
    dt: city.dt,
  };
}
