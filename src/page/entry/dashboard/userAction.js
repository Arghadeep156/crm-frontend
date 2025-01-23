import { getUserPending, getUserSuccess, getUserError } from "./userSlice";
import { fetchUserDetails } from "../../../api/userApi";

//INFO: Call the "Get user profile endpoint API using the function fetchUserDetail"
export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const result = await fetchUserDetails();
    if (result) {
      dispatch(getUserSuccess(result));
    }
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};
