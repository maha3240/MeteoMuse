import { useState, useEffect } from "react";

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = import.meta.env.VITE_WEATHERAPI_API_KEY;

  useEffect(() => {
    if (!city) return;
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.forecast && data.forecast.forecastday) {
          setForecast(data.forecast.forecastday);
          console.log(data.forecast.forecastday);
        } else {
          setForecast([]);
        }
      });
  }, [city, apiKey]);

  if (!city || forecast.length === 0) return null;

  return (
    <div className="forecast">
      <div className="forecast-items">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <h4>
              {new Date(day.date).toLocaleDateString([], {
                weekday: "long",
              })}
            </h4>
            <p>Max: {day.day.maxtemp_c}°C</p>
            <p>Min: {day.day.mintemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
