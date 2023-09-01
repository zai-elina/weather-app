import classes from './TabsCards.module.css';
import { weekTempList, hoursTempList } from '../../../../constant';
import { TabsCard } from '../TabsCard/TabsCard';
import Loader from '../../../loader/Loader';

export function TabsCards({ activeTab, isLoadingTabsCards }) {
  const loadingCards = ['', '', '', '', '', ''];

  return (
    <div className={classes.tabsCards}>
      {isLoadingTabsCards
        ? loadingCards.map((item, index) => (
            <div key={index} className={classes.tabsCardsItem}>
              <Loader/>
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
  );
}
