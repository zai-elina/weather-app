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
    if (theme === 'Dark') {
      document.body.setAttribute('dark', '');
      localStorage.setItem('theme', theme);
    } else {
      document.body.removeAttribute('dark', '');
      localStorage.setItem('theme', 'Light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
