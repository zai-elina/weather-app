import classes from './TabsCards.module.css';
import { TabsCard } from '../TabsCard/TabsCard';
import Loader from '../../../loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import { ForecastContext } from '../../../../providers/ForecastProvider';
import { parseHourCast, parseWeekCast } from '../../../../utils/weatherParse';

export function TabsCards({ activeTab, isLoadingTabsCards, offset }) {
  const { forecastData } = useContext(ForecastContext);
  const loadingCards = ['', '', '', '', '', ''];
  const isMobile = useMediaQuery({
    query: '(max-width: 834px)',
  });
  const weekTempList =
    forecastData.length !== 0 ? parseWeekCast(forecastData) : [];
  const hoursTempList =
    forecastData.length !== 0 ? parseHourCast(forecastData) : [];

  return (
    <>
      {isMobile ? (
        <div className={classes.tabsCards}>
          {isLoadingTabsCards
            ? loadingCards.map((item, index) => (
                <div key={index} className={classes.tabsCardsItem}>
                  <Loader />
                </div>
              ))
            : activeTab === 'week'
            ? weekTempList.map((card) => (
                <TabsCard key={card.id} card={card} activeTab={activeTab} />
              ))
            : hoursTempList.map((card) => (
                <TabsCard key={card.id} card={card} activeTab={activeTab} />
              ))}
        </div>
      ) : (
        <div className={classes.tabsCardsContainer}>
          <div
            className={classes.tabsCards}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {isLoadingTabsCards
              ? loadingCards.map((item, index) => (
                  <div key={index} className={classes.tabsCardsItem}>
                    <Loader />
                  </div>
                ))
              : activeTab === 'week'
              ? weekTempList.map((card) => (
                  <TabsCard key={card.id} card={card} activeTab={activeTab} />
                ))
              : hoursTempList.map((card) => (
                  <TabsCard key={card.id} card={card} activeTab={activeTab} />
                ))}
          </div>
        </div>
      )}
    </>
  );
}
