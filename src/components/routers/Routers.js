import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from '../tableList/Table';
import CreateProfile from "../home/CreateProfile";
export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="form" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
