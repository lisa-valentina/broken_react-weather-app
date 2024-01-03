import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partly-cloudy",
    "02n": "partly-cloudy",
    "03d": "partly-cloudy",
    "03n": "partly-cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "pouring",
    "10n": "pouring",
    "11d": "lightning",
    "11n": "lightning",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };
  return <WeatherSvg state={codeMapping} width={100} height={100} />;
}
