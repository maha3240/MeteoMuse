const SunriseSunset = ({ weather }) => {
  const sunrise = weather?.sys?.sunrise || 1900990; // Default value if sunrise is not available
  const sunset = weather?.sys?.sunset || 1900990; // Default value if sunset is not available
  const condition = weather?.weather?.[0]?.main?.toLowerCase() || "";
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  const now = Math.floor(Date.now() / 1000);
  const isDaytime = now >= sunrise && now < sunset;

  return (
    <div className="sun-box">
      <div className="sun-wrapper">
        <div className="sunrise">
          {isDaytime ? (
            <div className="sun-container">
              <div className="sun" />

              {condition.includes("clouds") && (
                <>
                  <img
                    src="../../assets/cloudy1.png"
                    alt="cloudy"
                    className="cloudyimg"
                  />
                </>
              )}
              {condition.includes("rain") && (
                <>
                  <img src="../../assets/rain.png" alt="" className="rainimg" />
                </>
              )}
            </div>
          ) : (
            <div className="moon" />
          )}

          {isDaytime && <p>sunrise: {formatTime(sunrise)}</p>}
          {isDaytime && <p>sunset: {formatTime(sunset)}</p>}
        </div>
      </div>
    </div>
  );
};
export default SunriseSunset;
