import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
  singleTicket: {},
  replyMsg: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading(state) {
      state.isLoading = true;
    },

    fetchTicketSuccess(state, action) {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },

    fetchTicketFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTicket: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((ticketObj) => {
        if (!payload) return ticketObj;
        return ticketObj.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchingSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, { payload }) => {
      state.singleTicket = payload;
      state.isLoading = false;
    },
    fetchSingleTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.replyMsg = action.payload;
    },
    replyTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
  fetchingSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
} = ticketListSlice.actions;
export default ticketListSlice.reducer;
