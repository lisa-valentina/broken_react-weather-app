import React from "react";
import "./Weather.css";
export default function Weater() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Hamburg</h1>
      <ul>
        <li>Monday 16:13</li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="rain"
          ></img>
          7 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 86% </li>
            <li>Wind: 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
