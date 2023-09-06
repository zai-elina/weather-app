import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "./slices/themeSlice";
// import isLoadingReducer from "./slices/isLoadingSlice";
import weatherDataReducer from "./slices/weatherDataSlice";
// import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    // theme: themeReducer,
    // isLoading: isLoadingReducer,
    weatherData: weatherDataReducer,
    // search: searchReducer,
  },
});