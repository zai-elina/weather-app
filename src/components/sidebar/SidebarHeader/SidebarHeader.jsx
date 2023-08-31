import React from 'react';
import Theme from '../../theme/Theme';
import classes from './SidebarHeader.module.css';

function SidebarHeader({ setIsOpen }) {
  return (
    <div className={classes.sidebarHeader}>
      <button
        className={classes.sidebarButton}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Поиск города
      </button>
      <Theme />
    </div>
  );
}

export default SidebarHeader;
