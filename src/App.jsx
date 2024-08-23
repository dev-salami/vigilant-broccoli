import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pagees/Home";
import PrivacyPolicy from "./pagees/Privacy-Policy";
import AboutUs from "./pagees/AboutUs";

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Page;
