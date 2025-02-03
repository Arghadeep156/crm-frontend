import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTicket,
  fetchParticularTicket,
} from "./ticketsSlice";
import { getAllTickets, getTicketUsingId } from "../../api/ticketapi";

export const fetchAllTicket = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result && dispatch(fetchTicketSuccess(result.message));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const viewTicket = (tid) => async (dispatch) => {
  try {
    const response = await getTicketUsingId(tid);
    response && dispatch(fetchParticularTicket(response));
  } catch (error) {
    console.log("viewTicket errored out", error.message);
  }
};

export const fetchTicketBasedOnSearchString = (searchString) => (dispatch) => {
  dispatch(searchTicket(searchString));
};
