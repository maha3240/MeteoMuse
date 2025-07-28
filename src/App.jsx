import "./App.css";
import Weather from "./components/weather.jsx";
import WeatherDiscribtion from "./components/weatherDiscribtion.jsx";
import CityTemp from "./components/cityTemp.jsx";
import SunriseSunset from "./components/SunsetSunrise.jsx";
import Forecast from "./components/forecast.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const getWeather = () => {
    if (!city) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setWeather(null);
          setError("City not found...");
        }
      });
    setCity("");
  };
  return (
    <>
      <div className="App">
        <div className="overlay"></div>
        <Weather
          getWeather={getWeather}
          city={city}
          setCity={setCity}
        ></Weather>
        {error && <p className="Error">{error}</p>}
        {weather && (
          <div className="weather-details">
            <div className="inline-wrap1">
              <CityTemp weather={weather} />
              <SunriseSunset weather={weather}></SunriseSunset>
            </div>
            <div
              className="inline-wrap2"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <WeatherDiscribtion weather={weather}></WeatherDiscribtion>
              <Forecast city={weather.name}></Forecast>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
