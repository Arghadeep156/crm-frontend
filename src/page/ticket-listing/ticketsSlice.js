import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
  chosenTicket: {},
  // replyTicketError: "",
  // replyMsg: "",
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
    fetchParticularTicket: (state, action) => {
      state.chosenTicket = action.payload;
    },
  },
});

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
  fetchParticularTicket,
} = ticketListSlice.actions;
export default ticketListSlice.reducer;
