import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    },
    getUserError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const { getUserError, getUserSuccess, getUserPending } = actions;
export default reducer;
