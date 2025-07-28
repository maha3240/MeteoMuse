const WeatherInput = ({ city, setCity }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Enter city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  );
};
export default WeatherInput;
