import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTicket,
  fetchingSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
} from "./ticketsSlice";
import {
  getAllTickets,
  getTicketUsingId,
  addConversation,
} from "../../api/ticketapi";

export const fetchAllTicket = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result && dispatch(fetchTicketSuccess(result.message));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fetchSingleTicket = (tid) => async (dispatch) => {
  dispatch(fetchingSingleTicketLoading());
  try {
    const response = await getTicketUsingId(tid);
    response && dispatch(fetchSingleTicketSuccess(response));
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

export const updateTicketConversation = (tid, data) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const response = await addConversation(tid, data);
    response && dispatch(replyTicketSuccess(response));
  } catch (error) {
    replyTicketFail(error.message);
  }
};

export const fetchTicketBasedOnSearchString = (searchString) => (dispatch) => {
  dispatch(searchTicket(searchString));
};
