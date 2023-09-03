export const getWindDirection = (deg) => {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  return directions[Math.floor(((deg + 22) / 45) % 8)];
};
