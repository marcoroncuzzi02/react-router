import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/content" Component={ContactPage} />
            <Route path="/about" Component={AboutPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
