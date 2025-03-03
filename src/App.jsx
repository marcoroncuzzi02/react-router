import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../pages/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Route path="/" Component={HomePage} />
      </BrowserRouter>
    </>
  )
}

export default App
