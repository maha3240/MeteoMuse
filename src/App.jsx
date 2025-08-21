import "./App.css";
import Weather from "./components/weather.jsx";
import WeatherDiscribtion from "./components/weatherDiscribtion.jsx";
import CityTemp from "./components/cityTemp.jsx";
import SunriseSunset from "./components/SunsetSunrise.jsx";
//import Forecast from "./components/forecast.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherProvider from "./srore/weatherContext.jsx";
import { useContext } from "react";
import { weatherContext } from "./srore/weatherContext.jsx";

function App() {
  const { error, weather } = useContext(weatherContext);
  console.log(weather);

  return (
    <WeatherProvider>
      <div className="App">
        <div className="overlay"></div>
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
              {/* <Forecast /> */}
            </div>
          </div>
        )}
      </div>
    </WeatherProvider>
  );
}

export default App;
