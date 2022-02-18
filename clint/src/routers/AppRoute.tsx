import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { HomePage } from "../pages/landingpage/HomePage";

interface AppRouteProps {}

export const AppRoute: React.FC<AppRouteProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
