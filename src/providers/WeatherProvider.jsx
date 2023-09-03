const { createContext, useState } = require('react');

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Москва');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [temp, setTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [wind, setWind] = useState('');
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [deg, setDeg] = useState('');

  const addLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const values = {
    location,
    addLocation,
    lat,
    setLat,
    lon,
    setLon,
    temp,
    setTemp,
    feelsLike,
    setFeelsLike,
    wind,
    setWind,
    pressure,
    setPressure,
    humidity,
    setHumidity,
    visibility,
    setVisibility,
    deg,
    setDeg,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
