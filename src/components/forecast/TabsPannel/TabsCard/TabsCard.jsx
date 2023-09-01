import classes from './TabsCard.module.css';

export function TabsCard({ card, activeTab }) {
  return (
    <div className={classes.tabsCardsItem}>
      {activeTab === 'week' ? (
        <div className={classes.tabsCardsItemDate}>
          {card.day} {card.date} {card.month}
        </div>
      ) : (
        <div className={classes.tabsCardsItemDate}>{card.time}</div>
      )}
      <img
        className={classes.tabsCardsItemImage}
        src={card.imgUrl}
        alt="Погода"
      />

      {activeTab === 'week' ? (
        <div className={classes.tabsCardsItemTempreature}>
          <p>{card.maxTemp}°C</p>
          <span style={{ color: 'var(--support-color)' }}>
            {card.minTemp}°C
          </span>
        </div>
      ) : (
        <div className={classes.tabsCardsItemTempreature}>
          <p>{card.temp}°C</p>
        </div>
      )}
    </div>
  );
}
