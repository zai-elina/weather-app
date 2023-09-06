import React, { useContext } from 'react';
import classes from './SearchHistory.module.css';
import { WeatherContext } from '../../../providers/WeatherProvider';
import { getWeatherForHours, getWeatherInformation } from '../../../api/api';
import { useDispatch } from 'react-redux';
import {
  setToday,
  setHourly,
  setWeekly,
} from '../../../store/slices/weatherDataSlice';
import { parseHourCast, parseWeekCast } from '../../../utils/weatherParse';

const SearchHistory = ({
  searchHistory,
  setIsOpen,
  errorSearchCity,
  setIsLoading,
}) => {
  const { location, addLocation } = useContext(WeatherContext);
  const dispatch = useDispatch();

  const handleCityInHistory = ({ name, lat, lon }) => {
    addLocation(name);
    localStorage.setItem('location', name);
    setIsLoading(true);
    getWeatherInformation(lat, lon)
      .then((data) => {
        const weatherToday = {
          temp: Math.round(data.main.temp),
          desc:
            data.weather[0].description[0].toUpperCase() +
            data.weather[0].description.slice(1),
          iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          feelsLike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          pressure: Math.round(data.main.pressure * 0.75),
          wind: Math.round(data.wind.speed),
          deg: Math.round(data.wind.deg),
          visibility: data.visibility / 1000,
        };

        dispatch(setToday(weatherToday));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
        setIsOpen(false);
      });

    getWeatherForHours(lat, lon)
      .then((data) => {
        dispatch(setWeekly(parseWeekCast(data.list)));
        dispatch(setHourly(parseHourCast(data.list)));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={classes.historyBlock}>
      {errorSearchCity ? <p style={{ color: 'red' }}>{errorSearchCity}</p> : ''}
      {searchHistory.map((item, index) => {
        const { name, lat, lon } = item;
        return (
          <div
            className={`${classes.historyCity}${
              location === name ? ` ${classes.activeCity}` : ''
            }`}
            key={index}
            onClick={() => handleCityInHistory({ name, lat, lon })}
          >
            {name}
            <svg
              className={classes.historyCitySvg}
              style={{ position: 'absolute', right: '28px' }}
              width="11"
              height="15"
              viewBox="0 0 11 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.09312 0L0 1.7625L6.79892 7.5L0 13.2375L2.09312 15L11 7.5L2.09312 0Z"
                fill="#ACACAC"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
