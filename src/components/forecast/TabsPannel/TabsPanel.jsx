import React from 'react';
import classes from './TabsPanel.module.css';
import { TabsCards } from './TabsCards/TabsCards';

const TabsPanel = ({ activeTab }) => {
  return (
    <div className={classes.tabsPanel}>
      <div className={classes.tabsPanelContent}>
        <div className={classes.buttonPrevNext} disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle
              opacity="0.3"
              cx="19"
              cy="19"
              r="19"
              transform="rotate(-180 19 19)"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M23 24.5L13.8735 18.8503C13.242 18.4593 13.242 17.5407 13.8735 17.1497L23 11.5"
              stroke="#ACACAC"
              strokeWidth="3"
            />
          </svg>
        </div>
        <TabsCards activeTab={activeTab} />
        <div className={classes.buttonPrevNext}>
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
