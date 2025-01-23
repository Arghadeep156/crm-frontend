import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./page/ticket-listing/ticketsSlice";
import loginSlice from "./components/login/LoginSlice";
import userSlice from "./page/entry/dashboard/userSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginSlice,
    user: userSlice,
  },
});

export default store;
