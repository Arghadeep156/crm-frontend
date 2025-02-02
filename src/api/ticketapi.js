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
