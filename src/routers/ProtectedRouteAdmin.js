import React, { useEffect, useState } from "react";
import {
  Route,
  Redirect,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const ProtectedRouteAdmin = (props) => {
  //   const token = localStorage.getItem("token");
  //   const navigate = useNavigate();
  //   function presentPage() {
  //     navigate(-1);
  //   }
  //   useEffect(() => {
  //     if (token && jwtDecode(token).role !== "admin") {
  //       presentPage();
  //     }
  //   }, [token && jwtDecode(token).role !== "admin"]);

  //   const decodedData = jwtDecode(token);
  //   //   if (!token) return <Navigate to="/" />;

  //   if (decodedData.role === "admin") {
  //     return <Outlet {...props} />;
  //   } else if (decodedData.role !== "admin") {
  //     presentPage();
  //   }
  return <Outlet {...props} />;
};

export default ProtectedRouteAdmin;
