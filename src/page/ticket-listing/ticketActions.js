import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTicket,
} from "./ticketsSlice";
import { getAllTickets } from "../../api/ticketapi";

export const fetchAllTicket = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result && dispatch(fetchTicketSuccess(result.message));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchTicketBasedOnSearchString = (searchString) => (dispatch) => {
  dispatch(searchTicket(searchString));
};
