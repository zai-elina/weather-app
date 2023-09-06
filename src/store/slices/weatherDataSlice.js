import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  today: {
    temp: '',
    desc: '',
    iconUrl: '',
    feelsLike: '',
    humidity: '',
    pressure: '',
    wind: '',
    deg: '',
    visibility: '',
  },
  weekly: [],
  hourly: [],
  currentCards: [],
};

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    setToday: (state, action) => {
      const {
        temp,
        desc,
        iconUrl,
        feelsLike,
        humidity,
        pressure,
        wind,
        deg,
        visibility,
      } = action.payload;

      state.today.temp = temp;
      state.today.desc = desc;
      state.today.iconUrl = iconUrl;
      state.today.feelsLike = feelsLike;
      state.today.humidity = humidity;
      state.today.pressure = pressure;
      state.today.wind = wind;
      state.today.deg = deg;
      state.today.visibility = visibility;
    },
    setWeekly: (state, action) => {
      state.weekly = action.payload;
    },
    setHourly: (state, action) => {
      state.hourly = action.payload;
    },
    setCurrentCards: (state, action) => {
      state.today.currentCards = action.payload;
    },
  },
});

export const { setToday, setHourly, setWeekly, setCurrentCards } =
  weatherDataSlice.actions;

export default weatherDataSlice.reducer;
