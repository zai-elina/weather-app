import React, { useContext } from 'react';
import classes from './WeatherNow.module.css';
import Location from '../Location/Location';
import { getFormatDate } from '../../../utils/formatDate';
import { WeatherContext } from '../../../providers/WeatherProvider';

function WeatherNow() {
  const { temp, feelsLike, weatherDesc, iconUrl } = useContext(WeatherContext);
  return (
    <>
      <div className={classes.weather}>
        <img
          className={classes.weatherImage}
          src={iconUrl}
          alt={weatherDesc}
        ></img>

        <div className={classes.weatherTemperature}>
          {temp} <span className={classes.weatherTemperatureSpan}>°C</span>
        </div>
        <div className={classes.weatherPrecipitation}>{weatherDesc}</div>
      </div>
      <div>
        <p className={classes.weatherFelt}>Ощущается как {feelsLike} °C</p>
        <div className={classes.todayInformation}>
          <div>Сегодня</div>
          <div>{getFormatDate()}</div>
        </div>
      </div>
      <Location />
    </>
  );
}

export default WeatherNow;
