import { Forecast } from './components/forecast/Forecast';
import Sidebar from './components/sidebar/Sidebar';
import DetailForToday from './components/detailForToday/DetailForToday';
import './styles/App.css';
import { ThemeProvider } from './providers/ThemeProvider';
import { useEffect, useContext, useState } from 'react';
import { WeatherContext, WeatherProvider } from './providers/WeatherProvider';
import { getWeatherInformation } from './api/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  useEffect(() => {
    if (lat && lon) {
      setIsLoading(true);
      getWeatherInformation(lat, lon)
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [lat]);

  return (
    <ThemeProvider>
      <WeatherProvider>
        <main className="main">
          <Sidebar isLoading={isLoading} setLat={setLat} setLon={setLon} />
          <div className="center-block">
            <Forecast isLoading={isLoading} />
            <DetailForToday isLoading={isLoading} />
          </div>
        </main>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
