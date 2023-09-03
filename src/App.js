import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext, WeatherProvider } from './providers/WeatherProvider';
import { getWeatherInformation } from './api/api';

function App() {
  const { addLocation } = useContext(WeatherContext);
  const [isLoading, setIsLoading] = useState(false);

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [temp, setTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [wind, setWind] = useState('');
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');

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
          console.log(data);
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
    }
  }, [lat]);

  return (
    <ThemeProvider>
      <WeatherProvider>
        <main className="main">
          <Sidebar
            temp={temp}
            feelsLike={feelsLike}
            isLoading={isLoading}
            setLat={setLat}
            setLon={setLon}
          />
          <div className="center-block">
            <Forecast isLoading={isLoading} />
            <DetailForToday
              wind={wind}
              pressure={pressure}
              humidity={humidity}
              visibility={visibility}
              isLoading={isLoading}
            />
          </div>
        </main>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
