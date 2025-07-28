const CityTemp = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="city-temp">
      <h3 className="cityName">{weather.name}</h3>
      <div className="temprature">
        {Math.floor(weather.main.temp)}°
        <span style={{ fontSize: "18px", fontStyle: "italic" }}>
          {weather.weather[0].description}
        </span>
        <div className="date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};
export default CityTemp;
