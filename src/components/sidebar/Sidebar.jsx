import { useDebugValue, useState } from 'react';
import classes from './Sidebar.module.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import WeatherNow from './WeatherNow/WeatherNow';
import SearchForm from './SearchForm/SearchForm';
import Loader from '../loader/Loader';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../store/selectors/isLoadingSelector';

export default function Sidebar() {
  const isLoading = useSelector(isLoadingSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <section
        className={classes.sidebar}
        style={isLoading ? { justifyContent: 'flex-start' } : {}}
      >
        <SidebarHeader setIsOpen={setIsOpen} />
        {isLoading ? (
          <div className={classes.laoder}>
            <Loader />
          </div>
        ) : (
          <WeatherNow />
        )}
      </section>
      <SearchForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
    </>
  );
}
