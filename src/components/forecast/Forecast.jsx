import { useState } from 'react';
import classes from './Forecast.module.css';
import ForecastHeader from './ForecastHeader/ForecastHeader';
import TabsPanel from './TabsPannel/TabsPanel';

export function Forecast() {
  const [activeTab, setActiveTab] = useState('week');
  return (
    <section className={classes.forecast}>
      <ForecastHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabsPanel activeTab={activeTab} />
    </section>
  );
}
