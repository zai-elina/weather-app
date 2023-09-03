import { useState } from 'react';
import classes from './Sidebar.module.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import WeatherNow from './WeatherNow/WeatherNow';
import SearchForm from './SearchForm/SearchForm';
import Loader from '../loader/Loader';

export default function Sidebar({ isLoading, setIsLoading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <section className={classes.sidebar}>
        <SidebarHeader setIsOpen={setIsOpen} />
        {isLoading ? (
          <div className={classes.laoder}>
            <Loader />
          </div>
        ) : (
          <WeatherNow/>
        )}
      </section>
      <SearchForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setIsLoading={setIsLoading}
      />
    </>
  );
}
