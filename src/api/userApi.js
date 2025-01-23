import axios from "axios";

const loginUrl = "http://localhost:3001/v1/user/login";
const userProfileUrl = "http://localhost:3001/v1/user";

export const userLogin = async (formData) => {
  try {
    const result = await axios.post(loginUrl, formData);
    if (result.data.status === "success") {
      console.log("login successful");
      if (result.data.accessJWT) {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }
      if (result.data.refreshJWT) {
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJwt: result.data.refreshJWT })
        );
      }
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUserDetails = async () => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    console.log(accessJWT);
    if (!accessJWT) {
      throw new Error("Token not found!");
    }
    const response = await axios.get(userProfileUrl, {
      headers: {
        authorization: accessJWT,
      },
    });
    return response.data.message.result;
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogout = async () => {
  try {
    const response = await axios.delete(
      "http://localhost:3001/v1/user/logout",
      {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log("User logout errored - ", error.message);
  }
};
