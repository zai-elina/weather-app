import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { WeatherProvider } from './providers/WeatherProvider';
import { ForecastProvider } from './providers/ForecastProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <ForecastProvider>
          <App />
        </ForecastProvider>
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
