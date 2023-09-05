const { createContext, useState } = require('react');

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [forecastData, setForecastData] = useState([]);

  const values = {
    forecastData,
    setForecastData,
  };

  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};
