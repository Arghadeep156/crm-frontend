import axios from "axios";

export const getAllTickets = async () => {
  try {
    const result = await axios.get("http://localhost:3001/v1/ticket", {
      headers: {
        authorization: sessionStorage.getItem("accessJWT"), // Retrieve from env or secure storage
      },
    });

    if (!result || !result.data) {
      throw new Error("Invalid response format");
    }

    return result.data; // Return only the data part of the response
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw new Error("Failed to fetch tickets"); // Propagate the error
  }
};

export const getTicketUsingId = async (ticketId) => {
  try {
    const result = await axios.get(
      `http://localhost:3001/v1/ticket/${ticketId}`,
      {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addConversation = async (ticketId, data) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/v1/ticket/${ticketId}`,
      data,
      {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
