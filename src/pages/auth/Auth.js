import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  let user = console.log(localStorage.getItem("token"));
  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
}

export default memo(Auth);
