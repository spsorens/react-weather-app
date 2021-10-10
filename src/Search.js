import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  function handleResponse(response) {
    setWeather(response.data.main.temp);
  }

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1f7c6137aa0f0d34113179b71073a3d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter a city" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="weather">
        <div className="mt-3">
          {form}
          <div className="row mt-3">
            <ul className="col-6">
              <li>
                <li>Temperature: {Math.round(weather.temperature)}°F</li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>

            <ul className="col-6">
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
