import React from 'react';
import classes from './ForecastHeader.module.css';

function TabsNav({ activeTab, setActiveTab }) {
  var styles = {
    color: 'var(--main-color)',
    borderBottom: '3px solid var(--main-color)',
    paddingBottom: '9px',
  };
  return (
    <div className={classes.tabsNav}>
      <div
        className={classes.tabsNavItem}
        data-tab-name="tab-week"
        onClick={() => {
          setActiveTab('week');
        }}
        style={activeTab === 'week' ? styles : {}}
      >
        на неделю
      </div>
      <div
        className={classes.tabsNavItem}
        data-tab-name="tab-hours"
        onClick={() => {
          setActiveTab('hour');
        }}
        style={activeTab === 'hour' ? styles : {}}
      >
        почасовой
      </div>
    </div>
  );
}

function ForecastHeader({ activeTab, setActiveTab }) {
  return (
    <div className={classes.forecastHeader}>
      <h2 className={classes.forecastTitle}>Прогноз</h2>
      <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default ForecastHeader;
