import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInput from "./weatherInput.jsx";
import { DiDigitalOcean } from "react-icons/di";
import { useContext } from "react";
import { weatherContext } from "../srore/weatherContext.jsx";

const Weather = () => {
  const { getWeather, city } = useContext(weatherContext);
  return (
    <div className="weather-container">
      <h2
        style={{
          textShadow: "0 4px 10px rgba(249, 245, 245, 0.73)",
          color: " #12496dff",
        }}
      >
        <DiDigitalOcean style={{ fontSize: "3rem", color: "#fcfafa" }} />
        Ⲙ𝔢t𝔢oᗰus𝔢
      </h2>
      <div className="search-bar">
        <WeatherInput />
        <button className="btn-getweather" onClick={() => getWeather(city)}>
          Get Weather
        </button>
      </div>
    </div>
  );
};

export default Weather;
