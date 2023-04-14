import { api } from "@/config/api";
import { Weather, WeatherReturn } from "@/config/types";

export async function getCity(cityName: string) {
  const result = await api.get<WeatherReturn>(`/weather?q=${cityName}`);

  const city: Weather = {
    id: result?.data.id,
    name: result?.data.name,
    country: result?.data.sys.country,
    temp: result?.data.main.temp,
    feels_like: result?.data.main.feels_like,
    weather: result?.data.weather[0].main,
    description: result?.data.weather[0].description,
    humidity: result?.data.main.humidity,
    visibility: result?.data.visibility,
    wind_direction: result?.data.wind.deg,
    wind_speed: result?.data.wind.speed,
    sunrise: result?.data.sys.sunrise,
    sunset: result?.data.sys.sunset,
    timezone: result?.data.timezone,
    dt: result?.data.dt,
  };

  return city;
}
