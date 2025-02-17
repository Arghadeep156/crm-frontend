import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./page/ticket-listing/ticketsSlice";
import loginSlice from "./components/login/LoginSlice";
import userSlice from "./page/entry/dashboard/userSlice";
import addTicket from "./components/addticketform/AddTicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginSlice,
    user: userSlice,
    openTicket: addTicket,
  },
});

export default store;
