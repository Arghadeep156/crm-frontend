import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};

const AddTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    createdPending: (state, action) => {
      state.isLoading = true;
    },
    createdTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload;
    },
    createdTicketFail: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    restSuccessMSg: (state) => {
      state.isLoading = true;
      state.successMsg = "";
    },
  },
});

export const {
  createdTicketFail,
  createdTicketSuccess,
  createdPending,
  restSuccessMSg,
} = AddTicketSlice.actions;
export default AddTicketSlice.reducer;
