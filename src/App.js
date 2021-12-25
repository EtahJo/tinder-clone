import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Index";
import LandingPage from "./components/landingPage";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><LandingPage/></>}/>
      </Routes>
   </BrowserRouter>
    
  );
}

export default App;
