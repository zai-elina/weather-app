import React, { useContext } from 'react';
import classes from './Location.module.css';
import { WeatherContext } from '../../../providers/WeatherProvider';

function Location() {
  const { location } = useContext(WeatherContext);
  return (
    <div className={classes.location}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9999 3.33334C13.5499 3.33334 8.33325 8.55001 8.33325 15C8.33325 23.75 19.9999 36.6667 19.9999 36.6667C19.9999 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.4499 3.33334 19.9999 3.33334ZM19.9999 19.1667C18.8949 19.1667 17.835 18.7277 17.0536 17.9463C16.2722 17.1649 15.8333 16.1051 15.8333 15C15.8333 13.8949 16.2722 12.8351 17.0536 12.0537C17.835 11.2723 18.8949 10.8333 19.9999 10.8333C21.105 10.8333 22.1648 11.2723 22.9462 12.0537C23.7276 12.8351 24.1666 13.8949 24.1666 15C24.1666 16.1051 23.7276 17.1649 22.9462 17.9463C22.1648 18.7277 21.105 19.1667 19.9999 19.1667Z"
          fill="#EC6E4D"
        />
      </svg>
      <div>{location}</div>
    </div>
  );
}

export default Location;
