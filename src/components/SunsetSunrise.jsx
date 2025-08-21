import { useContext } from "react";
import { weatherContext } from "../srore/weatherContext.jsx";

const SunriseSunset = () => {
  const { isDaytime, condition, formatTime, sunrise, sunset } =
    useContext(weatherContext);

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
