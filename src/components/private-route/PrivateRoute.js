import React from "react";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

const isAuth = true; // Replace with actual authentication logic

export default function PrivateRoute({ children, ...rest }) {
  if (!isAuth) {
    return <Navigate to="/" />; // Redirect to home if not authenticated
  }

  return <DefaultLayout>{children}</DefaultLayout>; // If authenticated, render the children (protected component)
} // We are only providing default layout to the private routes
