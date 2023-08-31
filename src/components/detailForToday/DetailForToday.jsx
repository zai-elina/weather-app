import classes from './DetailForToday.module.css';
import DetailIndicator from './DetailIndicator/DetailIndicator';


export default function DetailForToday() {
  const indicators = [
    { id: 0, title: 'Скорость ветра', value: 7, name: 'м/с' },
    { id: 1, title: 'Влажность', value: 84, name: '%' },
    { id: 2, title: 'Видимость', value: 6.2, name: 'км' },
    { id: 3, title: 'Давление', value: 742, name: 'мм рт. ст.' },
  ];
  return (
    <section className={classes.detailForToday}>
      <h2 className={classes.detailForTitle}>Подробно на сегодня</h2>
      <div className={classes.detailForWrapper}>
        {indicators.map((indicator) => (
          <DetailIndicator key={indicator.id} indicator={indicator} />
        ))}
      </div>
    </section>
  );
}
