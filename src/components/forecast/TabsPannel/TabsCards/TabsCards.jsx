import classes from './TabsCards.module.css';
import { TabsCard } from '../TabsCard/TabsCard';
import Loader from '../../../loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import {
  weatherForHoursSelector,
  weatherForWeekSelector,
} from '../../../../store/selectors/weatherDataSelector';
import { isLoadingSelector } from '../../../../store/selectors/isLoadingSelector';

export function TabsCards({ activeTab, offset }) {
  const isLoading = useSelector(isLoadingSelector)
  const loadingCards = Array(6).fill('');
  const isMobile = useMediaQuery({
    query: '(max-width: 834px)',
  });
  const weekTempList = useSelector(weatherForWeekSelector);
  const hoursTempList = useSelector(weatherForHoursSelector);

  return (
    <>
      {isMobile ? (
        <div className={classes.tabsCards}>
          {isLoading
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
            {isLoading
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
