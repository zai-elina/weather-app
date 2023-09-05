import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from './providers/WeatherProvider';
import { getWeatherInformation, getWeatherForHours } from './api/api';
import { ForecastContext } from './providers/ForecastProvider';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    lat,
    lon,
    setTemp,
    setFeelsLike,
    setWind,
    setPressure,
    setHumidity,
    setVisibility,
    setDeg,
    setWeatherDesc,
    setIconUrl,
  } = useContext(WeatherContext);
  const { setForecastData } = useContext(ForecastContext);

  useEffect(() => {
    setIsLoading(true);
    getWeatherInformation('55.6256', '37.6064')
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setFeelsLike(Math.round(data.main.feels_like));
        setWeatherDesc(
          data.weather[0].description[0].toUpperCase() +
            data.weather[0].description.slice(1)
        );
        setIconUrl(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );

        setWind(Math.round(data.wind.speed));
        setHumidity(data.main.humidity);
        setVisibility(data.visibility / 1000);
        setPressure(Math.round(data.main.pressure * 0.75));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });

    getWeatherForHours('55.6256', '37.6064')
      .then((data) => {
        setForecastData(data.list);
      })
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    if (lat && lon) {
      setIsLoading(true);
      getWeatherInformation(lat, lon)
        .then((data) => {
          setTemp(Math.round(data.main.temp));
          setFeelsLike(Math.round(data.main.feels_like));
          setWeatherDesc(
            data.weather[0].description[0].toUpperCase() +
              data.weather[0].description.slice(1)
          );
          setIconUrl(
            `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          );

          setWind(Math.round(data.wind.speed));
          setHumidity(data.main.humidity);
          setVisibility(data.visibility / 1000);
          setPressure(Math.round(data.main.pressure * 0.75));
          setDeg(data.wind.deg);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });

      getWeatherForHours(lat, lon)
        .then((data) => {
          setForecastData(data.list);
        })
        .catch((error) => alert(error));
    }
  }, [lat]);

  return (
    <main className="main">
      <Sidebar isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className="center-block">
        <Forecast isLoading={isLoading} />
        <DetailForToday isLoading={isLoading} />
      </div>
    </main>
  );
}

export default App;
