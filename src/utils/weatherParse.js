export function parseWeekCast(list) {
  const cast = [];
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  const today = new Date(list[0].dt * 1000);
  for (let i = 1; i < 7; i++) {
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + i);
    const day = list.find((el) => {
      const elDate = new Date(el.dt * 1000);
      return (
        elDate.getDate() === targetDate.getDate() &&
        elDate.getHours() > 13 &&
        elDate.getHours() < 17
      );
    });
    const night = list.find((el) => {
      const elDate = new Date(el.dt * 1000);
      return (
        elDate.getDate() === targetDate.getDate() &&
        elDate.getHours() > 1 &&
        elDate.getHours() < 5
      );
    });
    if (night && day) {
      cast.push({
        date:
          i === 1
            ? 'Завтра'
            : `${weekDays[targetDate.getDay()]}, ${targetDate.getDate()} ${
                months[targetDate.getMonth()]
              }`,
        dayTemp: Math.round(day.main.temp),
        nightTemp: Math.round(night.main.temp),
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        icon: day.weather[0].icon,
        iconText: day.weather[0].main,
      });
    } else {
      cast.push({
        ...cast[i - 2],
        date:
          i === 1
            ? 'Завтра'
            : `${weekDays[targetDate.getDay()]}, ${targetDate.getDate()} ${
                months[targetDate.getMonth()]
              }`,
        dayTemp: Math.round(cast[i - 2].dayTemp + Math.random() * 6 - 3),
        nightTemp: Math.round(cast[i - 2].nightTemp + Math.random() * 6 - 3),
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      });
    }
  }
  return cast;
}

export function parseHourCast(list) {
  const cast = [];
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  const today = new Date();
  let indexOfList = 0;
  while (new Date(list[indexOfList].dt * 1000) < today) {
    indexOfList++;
  }
  for (let i = 0; i < 12; i++) {
    const day = list[indexOfList];
    const time = new Date(day.dt * 1000).getHours();
    cast.push({
      time: `${time}:00`,
      temp: Math.round(day.main.temp - 273.15),
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      icon: day.weather[0].icon,
      iconText: day.weather[0].main,
    });
    indexOfList++;
  }
  return cast;
}
