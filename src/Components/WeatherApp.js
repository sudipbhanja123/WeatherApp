import React from "react";
import "./css/style.css";
import search_icon from "./Assets/search.png";
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";
import humidity_icon from "./Assets/humidity.png";
import { useState } from "react";

const WeatherApp = () => {
  let api_kay = "ef066cdcc982489e4c04f5962338d224";

  const [wicon, setWicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_kay}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temp[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
}
catch(e)
{
    alert("Enter correct input!");
}
  };
  return (
    <div>
      <div className="container mx-auto mtt-10 rounded-lg bg-gradient-to-b from-indigo-900 to-purple-900 wth-3">
      <nav className="navbar navbar-light bg-red-600 p-3 pad-redu">
        <div className="container-fluid">
        <a className="navbar-brand navbar-brand-custom" href="#">
          Check Weather Report
        </a>
        
        </div>
      </nav>
        <div className="p-6">
        <div className="top-bar flex justify-center space-x-4 pt-2">
          <input
            type="text"
            className="cityInput w-60 h-12 bg-white rounded-full pl-5 text-gray-600 text-lg"
            placeholder="Search"
          />
          <div
            className="search-icon w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
            onClick={search}
          >
            <img src={search_icon} alt="search" />
          </div>
        </div>
        <div className="weather-image mt-10 flex justify-center img-mt">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp mt-4 text-center text-white text-6xl font-semibold">
          24°C
        </div>
        <div className="weather-location mt-2 text-center text-white text-3xl font-semibold">
          London
        </div>
        <div className="data-container mt-10 text-white flex justify-center gap-7">
          <div className="element flex items-start">
            <img src={humidity_icon} alt="" className="icon w-8 h-8" />
            <div className="data">
              <div className="humidity-percent text-2xl font-semibold">64%</div>
              <div className="text text-lg">Humidity</div>
            </div>
          </div>
          <div className="element flex items-start">
            <img src={wind_icon} alt="" className="icon w-8 h-8" />
            <div className="data">
              <div className="wind-rate text-2xl font-semibold">18 km/h</div>
              <div className="text text-lg">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WeatherApp;
