export async function getCity(query) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
    );
    const data = await response.json();

    return data;
  } catch {
    throw new Error('Упс! Город не найден, попробуйте другой');
  }
}
