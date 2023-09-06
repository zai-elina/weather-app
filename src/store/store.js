import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./slices/isLoadingSlice";
import weatherDataReducer from "./slices/weatherDataSlice";
import currentLocationReducer from "./slices/currentLocationSlice";

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    weatherData: weatherDataReducer,
    location: currentLocationReducer,
  },
});