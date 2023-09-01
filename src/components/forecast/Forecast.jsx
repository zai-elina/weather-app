import { useState } from 'react';
import classes from './Forecast.module.css';
import ForecastHeader from './ForecastHeader/ForecastHeader';
import TabsPanel from './TabsPannel/TabsPanel';

export function Forecast({isLoading}) {
  const [activeTab, setActiveTab] = useState('week');
  return (
    <section className={classes.forecast}>
      <ForecastHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabsPanel isLoadingTabsCards={isLoading} activeTab={activeTab} />
    </section>
  );
}
