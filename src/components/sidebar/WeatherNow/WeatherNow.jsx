import React from 'react';
import classes from './WeatherNow.module.css';
import Location from '../Location/Location';

function WeatherNow({ temp, feelsLike }) {
  return (
    <>
      <div className={classes.weather}>
        <svg
          className={classes.weatherImage}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="200" height="200" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1_130" transform="scale(0.005)" />
            </pattern>
            <image
              id="image0_1_130"
              width="200"
              height="200"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <div className={classes.weatherTemperature}>
          {temp} <span className={classes.weatherTemperatureSpan}>°C</span>
        </div>
        <div className={classes.weatherPrecipitation}>Снег</div>
      </div>
      <p className={classes.weatherFelt}>Ощущается как {feelsLike} °C</p>
      <div className={classes.todayInformation}>
        <div>Сегодня</div>
        <div>Вс, 13 мар</div>
      </div>
      <Location />
    </>
  );
}

export default WeatherNow;
