import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../login/LoginSlice";
import { fetchNewAccessJWTFromRefreshJWT } from "../../api/userApi";

//const isAuth = true;

export default function PrivateRoute({ children, ...rest }) {
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWTFromRefreshJWT();
      result && dispatch(loginSuccess());
    };
    updateAccessJWT();

    if (sessionStorage.getItem("accessJWT")) {
      dispatch(loginSuccess());
    }
  }, [dispatch]);

  if (!isAuth) {
    return <Navigate to="/" />; // Redirect to home if not authenticated
  }

  return <DefaultLayout {...rest}>{children}</DefaultLayout>; // If authenticated, render the children (protected component)
} // We are only providing default layout to the private routes
