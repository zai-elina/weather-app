import React, { useState } from 'react';
import classes from './SearchForm.module.css';
import { useMediaQuery } from 'react-responsive';
import { getCity } from '../../../api/api';
import SearchHistory from '../SearchHistory/SearchHistory';

function Form({
  setCity,
  setIsOpen,
  searchHistory,
  setSearchHistory,
  setErrorSearchCity,
}) {
  const [inputCity, setInputCity] = useState('');

  const searchCity = (e) => {
    e.preventDefault();
    const match = /^[а-яё\(\)-\s]*$/i.test(inputCity);
    if (match) {
      getCity(inputCity)
        .then((data) => {
          const nameCity = data[0]?.name;
          setCity(nameCity);
          console.log(data[0].address);
          setIsOpen(false);
          searchHistory.length === 0
            ? setSearchHistory([inputCity])
            : searchHistory.length < 5
            ? setSearchHistory([inputCity, ...searchHistory])
            : setSearchHistory([
              inputCity,
                ...searchHistory.filter((item, index) => index != 0),
              ]);
          setErrorSearchCity(null);
        })
        .catch((error) =>
          setErrorSearchCity('Упс! Город не найден, попробуйте другой')
        )
        .finally(() => {
          setInputCity('');
        });
    } else {
      setErrorSearchCity('Введите название города на русском языке');
      setInputCity('');
    }
  };
  return (
    <form className={classes.searchForm} onSubmit={(e) => searchCity(e)}>
      <div className={classes.searchInputContent}>
        <input
          className={classes.searchInput}
          type="search"
          placeholder="Москва"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
      </div>

      <button className={classes.searchButton}>Найти</button>
    </form>
  );
}

function SearchForm({
  setCity,
  isOpen,
  setIsOpen,
  searchHistory,
  setSearchHistory,
}) {
  const [errorSearchCity, setErrorSearchCity] = useState(null);
  const isMobile = useMediaQuery({
    query: '(max-width: 834px)',
  });
  return (
    <div
      className={classes.search}
      style={{ left: `${isOpen ? '0' : isMobile ? '-100%' : '-461px'}` }}
    >
      <svg
        className={classes.searchImage}
        onClick={() => setIsOpen(!isOpen)}
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
          fill="#48484A"
        />
      </svg>
      <Form
        setCity={setCity}
        setIsOpen={setIsOpen}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setErrorSearchCity={setErrorSearchCity}
      />
      <SearchHistory
        searchHistory={searchHistory}
        setIsOpen={setIsOpen}
        setCity={setCity}
        errorSearchCity={errorSearchCity}
      />
    </div>
  );
}

export default SearchForm;