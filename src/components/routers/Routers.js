import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateProfile from "../home/CreateProfile";
import Card  from '../cards/Card';
export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card/>} />
        <Route path="form" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
