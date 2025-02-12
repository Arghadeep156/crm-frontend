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
    if (!accessJWT) {
      throw new Error("Token not found!");
    }
    const response = await axios.get(userProfileUrl, {
      headers: {
        authorization: accessJWT,
      },
    });
    console.log(response);
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
    return response;
  } catch (error) {
    console.log("User logout errored - ", error.message);
  }
};

export const fetchNewAccessJWTFromRefreshJWT = async () => {
  try {
    const crmSite = JSON.parse(localStorage.getItem("crmSite")); //he reason we parse the value from localStorage is that localStorage only stores data as strings.
    const refreshJwt = crmSite ? crmSite.refreshJwt : null;
    const response = await axios.get(
      " http://localhost:3001/v1/tokens/fresh-access-jwt",
      {
        headers: {
          authorization: refreshJwt,
        },
      }
    );

    if (response.data.status === "success") {
      sessionStorage.setItem("accessJWT", response.data.accessJWT);
    }
    return true;
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      //The refreshJWT is expired
      localStorage.removeItem("crmSite");
    }
    return false;
  }
};
