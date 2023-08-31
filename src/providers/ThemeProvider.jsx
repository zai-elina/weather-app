const { createContext, useState, useEffect } = require('react');

export const ThemeContext = createContext({
  type: 'Light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = () => {
    if (theme === 'Dark') {
      setTheme('Light');
    } else {
      setTheme('Dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'Dark') {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark', '');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
