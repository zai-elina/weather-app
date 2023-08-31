import { useState, useContext } from 'react';
import classes from './Theme.module.css';
import { ThemeContext } from '../../providers/ThemeProvider';

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(false);

  const turnOnDarkMode = () => {
    if (!isDark) {
      toggleTheme('Dark');
    } else {
      toggleTheme('Light');
    }
    setIsDark(!isDark);
  };
  return (
    <>
      {isDark ? (
        <div
          className={classes.theme}
          onClick={turnOnDarkMode}
          htmlFor="input-1"
          style={{ justifyContent: 'flex-end' }}
        >
          <input className={classes.themeInput} type="checkbox" id="input-1" />
          <svg
            className={classes.themeImage}
            style={{ backgroundColor: ' rgba(236, 110, 77, 1)' }}
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403 6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485 8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>
      ) : (
        <div
          className={classes.theme}
          onClick={turnOnDarkMode}
          htmlFor="input-1"
          style={{ justifyContent: 'flex-start' }}
        >
          <input className={classes.themeInput} type="checkbox" id="input-1" />
          <svg
            className={classes.themeImage}
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403 6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485 8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>
      )}
    </>
  );
}
