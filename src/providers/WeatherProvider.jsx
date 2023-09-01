const { createContext, useState } = require('react');

export const WeatherContext = createContext({
  location: 'Москва',
  addLocation: () => {},
});

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Москва');

  const addLocation = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <WeatherContext.Provider
      value={{ location, addLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
