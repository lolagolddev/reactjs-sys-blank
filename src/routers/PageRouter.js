import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import ResetPassPage from "../pages/auth/ResetPassPage";

import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteUser from "./ProtectedRouteUser";

const PageRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signin" element={<SigninPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route exact path="/reset-password" element={<ResetPassPage />} />
      <Route element={<ProtectedRouteAdmin />}>
        <Route exact path="/admin" element={<AdminPage />} />
        {/* <Route exact path="/admin/blog" element={<BlogAdPage />} />
    <Route exact path="/admin/review" element={<ReviewAdPage />} /> */}
      </Route>
      <Route element={<ProtectedRouteUser />}>
        <Route exact path="/usPage" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
