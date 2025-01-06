// Routes/routes.js
import React from "react";
import { Landing, Record } from "../pages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/record" element={<Record />} />
    </Routes>
  );
};

export default AppRoutes;
