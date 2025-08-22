import { createContext, useState } from "react";

const weatherContext = createContext({
  city: "",
  setCity: () => {},
  weather: null,
  setWeather: () => {},
  error: "",
  setError: () => {},
  getWeather: () => {},
  formatTime: () => {},
  isDaytime: false,
  isNighttime: false,
  condition: "",
  sunrise: 1900990, // Default value if sunrise is not available
  sunset: 1900990, // Default value if sunset is not available
});

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isDaytime, setIsDaytime] = useState(false);
  const [isNighttime, setIsNighttime] = useState(false);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeather = (cityName) => {
    if (!cityName) return;
    setCity(cityName);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
          setError("");
          const sunrise = data.sys.sunrise;
          const sunset = data.sys.sunset;
          const now = Math.floor(Date.now() / 1000);
          const daytime = now >= sunrise && now < sunset;
          setIsDaytime(daytime);
          setIsNighttime(!daytime);
        } else {
          setWeather(null);
          setError("City not found...");
          setIsDaytime(false);
          setIsNighttime(false);
        }
      });
    setCity("");
  };
  const sunrise = weather?.sys?.sunrise;
  const sunset = weather?.sys?.sunset;
  const condition = weather?.weather?.[0]?.main?.toLowerCase() || "";
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <weatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        error,
        setError,
        getWeather,
        formatTime,
        isDaytime,
        isNighttime,
        condition,
        sunrise,
        sunset,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
export { weatherContext };
export default WeatherProvider;
