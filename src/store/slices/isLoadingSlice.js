import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
