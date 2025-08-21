import { useContext } from "react";
import { weatherContext } from "../srore/weatherContext.jsx";

const WeatherInput = () => {
  const { setCity, city } = useContext(weatherContext);
  return (
    <input
      className="search"
      type="text"
      placeholder="Enter city"
      value={city}
      onChange={(e) => {
        setCity(e.target.value);
      }}
    />
  );
};

export default WeatherInput;
