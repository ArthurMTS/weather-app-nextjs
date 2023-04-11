export interface WeatherReturn {
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
  id: number;
}

export interface Weather {
  id: number;
  name: string;
  country: string;
  temp: number;
  weather: string;
  feels_like: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  wind_direction: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}
