import { useContext } from "react";
import { weatherContext } from "../store/weatherContext.jsx";

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
                    src="../../assets/cloudysun.png"
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
              {!condition.includes("clouds") && !condition.includes("rain") && (
                <img src="../../assets/sun2.png" alt="sun" className="sunimg" />
              )}
            </div>
          ) : (
            <div className="moon">
              {condition.includes("clouds") && (
                <>
                  <img
                    src="../../assets/cloudynight.png"
                    alt="cloudy"
                    className="cloudyimg"
                  />
                </>
              )}
              {condition.includes("rain") && (
                <>
                  <img
                    src="../../assets/rainnight.png"
                    alt=""
                    className="rainimg"
                  />
                </>
              )}
              {!condition.includes("clouds") && !condition.includes("rain") && (
                <img
                  src="../../assets/moon.png"
                  alt="moon"
                  className="moonimg"
                />
              )}
            </div>
          )}

          {isDaytime ? (
            <p>sunrise: {formatTime(sunrise)}</p>
          ) : (
            <p>Condition: {condition}</p>
          )}
          {isDaytime && <p>sunset: {formatTime(sunset)}</p>}
        </div>
      </div>
    </div>
  );
};
export default SunriseSunset;
