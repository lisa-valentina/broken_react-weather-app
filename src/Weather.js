import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weater() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
      humidity: 78,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Monday 16:13</li>
          <li>Rain</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit"> °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15% </li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c6ccad355ceda3eadc4ad39e3b374f54";
    let cityName = "Pinneberg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
