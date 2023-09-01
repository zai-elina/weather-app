import React from 'react';
import classes from './SearchHistory.module.css';

const SearchHistory = ({
  searchHistory,
  setCity,
  setIsOpen,
  errorSearchCity,
}) => {
  const handleCityInHistory = (city) => {
    setCity(city);
    setIsOpen(false);
  };
  return (
    <div className={classes.historyBlock}>
      {errorSearchCity ? <p style={{ color: 'red' }}>{errorSearchCity}</p> : ''}
      {searchHistory.map((item, index) => (
        <div
          className={classes.historyCity}
          key={index}
          onClick={() => handleCityInHistory(item)}
        >
          {item}
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
      ))}
    </div>
  );
};

export default SearchHistory;
