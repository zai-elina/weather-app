export const getFormatDate = () => {
  const date = new Date();
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июня',
    'июля',
    'авг',
    'сен',
    'нояб',
    'дек',
  ];

  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
};
