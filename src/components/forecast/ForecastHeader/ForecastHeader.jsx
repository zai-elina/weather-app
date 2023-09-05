import React from 'react';
import classes from './ForecastHeader.module.css';

function TabsNav({ activeTab, setActiveTab, setOffset }) {
  var styles = {
    color: 'var(--main-color)',
    borderBottom: '3px solid var(--main-color)',
    paddingBottom: '9px',
  };

  const toogleActive = (item) => {
    setActiveTab(item);
    setOffset(0);
    const prevButton = document.getElementById('next');
    prevButton.classList.remove('disable');
    prevButton.removeAttribute('disabled', '');
  };
  return (
    <div className={classes.tabsNav}>
      <div
        className={classes.tabsNavItem}
        data-tab-name="tab-week"
        onClick={() => {
          toogleActive('week');
        }}
        style={activeTab === 'week' ? styles : {}}
      >
        на неделю
      </div>
      <div
        className={classes.tabsNavItem}
        data-tab-name="tab-hours"
        onClick={() => {
          toogleActive('hour');
        }}
        style={activeTab === 'hour' ? styles : {}}
      >
        почасовой
      </div>
    </div>
  );
}

function ForecastHeader({ activeTab, setActiveTab, setOffset }) {
  return (
    <div className={classes.forecastHeader}>
      <h2 className={classes.forecastTitle}>Прогноз</h2>
      <TabsNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setOffset={setOffset}
      />
    </div>
  );
}

export default ForecastHeader;
