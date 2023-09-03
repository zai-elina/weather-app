const key = '9e1886af6fa0090e97b8b9dd7f0f0473';

export async function getCity(query) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1&accept-language=ru`
    );

    if (response.status === 500) {
      throw new Error('Сервер не отвечает, попробуйте повторить запрос');
    }
    const data = await response.json();

    return data;
  } catch {
    throw new Error('Упс! Город не найден, попробуйте другой');
  }
}

export async function getWeatherInformation(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`
    );
    
    if (response.status === 500) {
      throw new Error('Сервер не отвечает, попробуйте повторить запрос');
    }

    const data = await response.json();

    return data;
  } catch {
    throw new Error('Упс! Данные не найдены');
  }
}
