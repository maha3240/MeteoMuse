import "bootstrap/dist/css/bootstrap.min.css";
import { IoWaterOutline } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { useContext } from "react";
import { weatherContext } from "../srore/weatherContext.jsx";

const WeatherDiscribtion = () => {
  const { weather } = useContext(weatherContext);
  if (!weather) return null;

  return (
    <div className="grid text-center weather-discribtion">
      <div className="g-col-6 g-col-md-4 discribtionitems">
        <FaTemperatureLow className="icons" />
        <span>Feels like:</span> {Math.floor(weather.main.feels_like)}° C
      </div>
      <div className="g-col-6 g-col-md-4 discribtionitems">
        <MdAir className="icons" />
        <span>Wind:</span> {weather.wind.speed} mi/h
      </div>
      <div className="g-col-6 g-col-md-4 discribtionitems">
        <IoWaterOutline className="icons" />
        <span>Humidity:</span> {weather.main.humidity}%
      </div>
      <div className="g-col-6 g-col-md-4 discribtionitems">
        <WiBarometer className="icons" />
        <span>Pressure:</span> {weather.main.pressure} mm Hg
      </div>
      <div className="g-col-6 g-col-md-4 discribtionitems">
        <MdOutlineVisibility className="icons" />
        <span>Visibility:</span> {weather.visibility / 1000} km
      </div>
    </div>
  );
};
export default WeatherDiscribtion;
