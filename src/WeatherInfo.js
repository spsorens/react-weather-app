import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <h4 className="datestamp">
        <FormattedDate date={props.data.date} />
      </h4>
      <div className="row mt-3">
        <div className="col-6">
          <h3 className="temp">
            <WeatherTemp fahrenheit={props.data.temperature} />
          </h3>
          <WeatherIcon code={props.data.icon} size={50} />
        </div>

        <ul className="description col-6">
          <li>Description: {props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)}mph</li>
        </ul>
      </div>
    </div>
  );
}
