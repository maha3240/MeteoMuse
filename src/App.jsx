import "./App.css";
import Weather from "./components/weather.jsx";
import WeatherDiscribtion from "./components/weatherDiscribtion.jsx";
import CityTemp from "./components/cityTemp.jsx";
import SunriseSunset from "./components/SunsetSunrise.jsx";
import Forecast from "./components/forecast.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { weatherContext } from "./store/weatherContext.jsx";

function App() {
  const { error, weather, isDaytime, isNighttime } = useContext(weatherContext);
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: isDaytime
            ? `url("../assets/daybg.jpg")`
            : isNighttime
            ? `url("../assets/nightbg.jpg")`
            : `url("../assets/bg-img.jpg")`,
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: isDaytime
              ? "rgba(255, 255, 255, 0.3)"
              : isNighttime
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(42, 41, 41, 0.1)",
          }}
        ></div>
        <Weather />
        {error && <p className="Error">{error}</p>}
        {weather && (
          <div className="weather-details">
            <div className="inline-wrap1">
              <CityTemp />
              <SunriseSunset />
            </div>
            <div className="inline-wrap2">
              <WeatherDiscribtion />
              <Forecast />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
