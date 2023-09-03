import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from './providers/WeatherProvider';
import { getWeatherInformation } from './api/api';

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
  } = useContext(WeatherContext);

  useEffect(() => {
    setIsLoading(true);
    getWeatherInformation('55.6256', '37.6064')
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setFeelsLike(Math.round(data.main.feels_like));

        setWind(Math.round(data.wind.speed));
        setHumidity(data.main.humidity);
        setVisibility(data.visibility / 1000);
        setPressure(Math.round(data.main.pressure * 0.75));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (lat && lon) {
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
        });
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
