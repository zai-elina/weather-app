import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Москва',
  lat: '55.6256',
  lon: '37.6064',
};

export const currentLocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const { city, lat, lon } = action.payload;
      state.city = city;
      state.lat = lat;
      state.lon = lon;
    },
  },
});

export const { setLocation } = currentLocationSlice.actions;

export default currentLocationSlice.reducer;
