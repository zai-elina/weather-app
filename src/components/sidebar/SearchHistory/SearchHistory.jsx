import React, { useContext } from 'react';
import classes from './SearchHistory.module.css';
import { WeatherContext } from '../../../providers/WeatherProvider';
import { getWeatherInformation } from '../../../api/api';

const SearchHistory = ({
  searchHistory,
  setIsOpen,
  errorSearchCity,
  setIsLoading,
}) => {
  const {
    location,
    addLocation,
    setTemp,
    setFeelsLike,
    setWind,
    setHumidity,
    setVisibility,
    setPressure,
    setDeg,
  } = useContext(WeatherContext);

  const handleCityInHistory = ({ name, lat, lon }) => {
    addLocation(name);
    localStorage.setItem('location', name);
    setIsLoading(true);
    getWeatherInformation(lat, lon)
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setFeelsLike(Math.round(data.main.feels_like));

        setWind(Math.round(data.wind.speed));
        setHumidity(data.main.humidity);
        setVisibility(data.visibility / 1000);
        setPressure(Math.round(data.main.pressure * 0.75));
        setDeg(data.wind.deg);
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoading(false);
        setIsOpen(false);
      });
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
