import { newTicket } from "../../api/ticketapi";
import {
  createdPending,
  createdTicketSuccess,
  createdTicketFail,
} from "./AddTicketSlice";

export const createNewTicket = (data) => async (dispatch) => {
  dispatch(createdPending());
  try {
    const response = await newTicket(data);
    console.log(response);
    if (response.status === "error") {
      return dispatch(createdTicketFail(response.message));
    }
    dispatch(createdTicketSuccess(response.message));
  } catch (error) {
    dispatch(createdTicketFail(error.message));
  }
};
