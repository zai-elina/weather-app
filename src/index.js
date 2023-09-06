import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { WeatherProvider } from './providers/WeatherProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <WeatherProvider>
            <App />
        </WeatherProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
