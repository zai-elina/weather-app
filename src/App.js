import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from './providers/WeatherProvider';
import { getWeatherInformation, getWeatherForHours } from './api/api';
import {
  setToday,
  setHourly,
  setWeekly,
} from './store/slices/weatherDataSlice';
import { parseHourCast, parseWeekCast } from './utils/weatherParse';
import { useDispatch } from 'react-redux';
import { setIsLoading } from './store/slices/isLoadingSlice';

function App() {
  const { lat, lon } = useContext(WeatherContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    getWeatherInformation('55.6256', '37.6064')
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
      .catch((error) => console.error(error));

    getWeatherForHours('55.6256', '37.6064')
      .then((data) => {
        dispatch(setWeekly(parseWeekCast(data.list)));
        dispatch(setHourly(parseHourCast(data.list)));
      })
      .catch((error) => alert(error))
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, []);

  useEffect(() => {
    if (lat && lon) {
      dispatch(setIsLoading(true));
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
        .catch((error) => console.error(error));

      getWeatherForHours(lat, lon)
        .then((data) => {
          dispatch(setWeekly(parseWeekCast(data.list)));
          dispatch(setHourly(parseHourCast(data.list)));
        })
        .catch((error) => alert(error))
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    }
  }, [lat]);

  return (
    <main className="main">
      <Sidebar />
      <div className="center-block">
        <Forecast />
        <DetailForToday />
      </div>
    </main>
  );
}

export default App;
