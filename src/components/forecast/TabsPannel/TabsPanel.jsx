import React, { useEffect, useRef, useContext } from 'react';
import classes from './TabsPanel.module.css';
import { TabsCards } from './TabsCards/TabsCards';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import {
  weatherForHoursSelector,
  weatherForWeekSelector,
} from '../../../store/selectors/weatherDataSelector';

const TabsPanel = ({ activeTab, isLoadingTabsCards, offset, setOffset }) => {
  const prevRef = useRef();
  const nextRef = useRef();
  const isDesktop = useMediaQuery({
    query: '(min-width: 1439.5px)',
  });
  const weekForecast = useSelector(weatherForWeekSelector);
  const hoursForecast = useSelector(weatherForHoursSelector);
  const activeArray = activeTab === 'week' ? weekForecast : hoursForecast;

  useEffect(() => {
    setOffset(0);
    const prevButton = document.getElementById('next');
    prevButton.classList.remove('disable');
    prevButton.removeAttribute('disabled', '');
  }, [isDesktop]);

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + 124;
      const maxOffset = isDesktop
        ? -124 * (activeArray.length - 8)
        : -124 * (activeArray.length - 5);

      newOffset = Math.min(newOffset, 0);

      if (newOffset === maxOffset) {
        nextRef.current.classList.remove('disable');
        nextRef.current.removeAttribute('disabled', '');
      }

      return newOffset;
    });
  };
  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - 124;
      const maxOffset = isDesktop
        ? -124 * (activeArray.length - 6)
        : -(124 * (activeArray.length - 3));

      newOffset = Math.max(newOffset, maxOffset);

      if (newOffset < 0) {
        prevRef.current.classList.remove('disable');
        prevRef.current.removeAttribute('disabled', '');
      }
      if (newOffset === maxOffset) {
        nextRef.current.classList.add('disable');
        nextRef.current.setAttribute('disabled', '');
      }

      return newOffset;
    });
  };
  return (
    <div className={classes.tabsPanel}>
      <div className={classes.tabsPanelContent}>
        <div
          ref={prevRef}
          className={`${classes.buttonPrevNext} ${
            offset === 0 ? 'disable' : ''
          }`}
          onClick={() => handleLeftArrow()}
          disabled={offset === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle
              cx="19"
              cy="19"
              r="19"
              transform="rotate(-180 19 19)"
              fill="white"
            />
            <path
              d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
              stroke="#ACACAC"
              strokeWidth="3"
            />
          </svg>
        </div>
        <TabsCards
          isLoadingTabsCards={isLoadingTabsCards}
          activeTab={activeTab}
          offset={offset}
        />
        <div
          id="next"
          ref={nextRef}
          onClick={() => handleRightArrow()}
          className={`${classes.buttonPrevNext} ${
            activeArray.length === 6 && isDesktop ? 'disable' : ''
          }`}
          disabled={activeArray.length === 6 && isDesktop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle cx="19" cy="19" r="19" fill="white" />
            <path
              d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5"
              stroke="#ACACAC"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TabsPanel;
