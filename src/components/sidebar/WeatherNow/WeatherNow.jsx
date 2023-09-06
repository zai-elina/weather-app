import classes from './WeatherNow.module.css';
import Location from '../Location/Location';
import { getFormatDate } from '../../../utils/formatDate';
import { useSelector } from 'react-redux';
import { weatherTodaySelector } from '../../../store/selectors/weatherDataSelector';

function WeatherNow() {
  const today = useSelector(weatherTodaySelector);
  const { temp, feelsLike, desc, iconUrl } = today;
  return (
    <>
      <div className={classes.weather}>
        <img className={classes.weatherImage} src={iconUrl} alt={desc}></img>

        <div className={classes.weatherTemperature}>
          {temp} <span className={classes.weatherTemperatureSpan}>°C</span>
        </div>
        <div className={classes.weatherPrecipitation}>{desc}</div>
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
