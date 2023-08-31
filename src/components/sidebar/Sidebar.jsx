import { useState } from 'react';
import classes from './Sidebar.module.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import WeatherNow from './WeatherNow/WeatherNow';
import SearchForm from './SearchForm/SearchForm';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('Москва');
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <section className={classes.sidebar}>
        <SidebarHeader setIsOpen={setIsOpen} />
        <WeatherNow city={city} />
      </section>
      <SearchForm
        setCity={setCity}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
    </>
  );
}
