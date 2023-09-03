import Loader from '../loader/Loader';
import classes from './DetailForToday.module.css';
import DetailIndicator from './DetailIndicator/DetailIndicator';
import detailClasses from './DetailIndicator/DetailIndicator.module.css';

export default function DetailForToday({
  wind,
  pressure,
  humidity,
  visibility,
  isLoading,
}) {
  const indicators = [
    { id: 0, title: 'Скорость ветра', value: wind, name: 'м/с' },
    { id: 1, title: 'Влажность', value: humidity, name: '%' },
    { id: 2, title: 'Видимость', value: visibility, name: 'км' },
    { id: 3, title: 'Давление', value: pressure, name: 'мм рт. ст.' },
  ];
  const loadingDetail = ['', '', '', ''];

  return (
    <section className={classes.detailForToday}>
      <h2 className={classes.detailForTitle}>Подробно на сегодня</h2>
      <div className={classes.detailForWrapper}>
        {isLoading
          ? loadingDetail.map((item, index) => (
              <div key={index} className={detailClasses.detailIndicator}>
                <Loader />
              </div>
            ))
          : indicators.map((indicator) => (
              <DetailIndicator key={indicator.id} indicator={indicator} />
            ))}
      </div>
    </section>
  );
}
