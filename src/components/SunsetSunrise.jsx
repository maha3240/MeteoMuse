const SunriseSunset = ({ weather }) => {
  const sunrise = weather?.sys?.sunrise || 1900990; // Default value if sunrise is not available
  const sunset = weather?.sys?.sunset || 1900990; // Default value if sunset is not available

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="sun-box">
      <div className="sun-wrapper">
        <div className="sunrise">
          <div className="sun" />
          <p>sunrise: {formatTime(sunrise)}</p>
          <p>sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};
export default SunriseSunset;
