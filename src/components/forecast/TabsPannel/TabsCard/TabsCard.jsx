import classes from './TabsCard.module.css';

export function TabsCard({ card, activeTab }) {
  return (
    <div className={classes.tabsCardsItem}>
      {activeTab === 'week' ? (
        <div className={classes.tabsCardsItemDate}>{card.date}</div>
      ) : (
        <div className={classes.tabsCardsItemDate}>{card.time}</div>
      )}
      <img
        className={classes.tabsCardsItemImage}
        src={`http://openweathermap.org/img/wn/${card.icon}.png`}
        alt={card.iconText}
      />

      {activeTab === 'week' ? (
        <div className={classes.tabsCardsItemTempreature}>
          <p>{Math.round(card.dayTemp - 273.15)}°C</p>
          <span style={{ color: 'var(--support-color)' }}>
            {Math.round(card.nightTemp - 273.15)}°C
          </span>
        </div>
      ) : (
        <div
          className={classes.tabsCardsItemTempreature}
          style={{ marginLeft: '35px' }}
        >
          <p>{card.temp}°C</p>
        </div>
      )}
    </div>
  );
}
