import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Index";
import LandingPage from "./components/landingPage";
import Footer from "./components/landingPage/Footer";
import SwipePage from "./components/swipePage/SwipePage";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><LandingPage/></>}/>
        <Route path="/swipe" element={<> <SwipePage/> </>}/>
      </Routes>
   </BrowserRouter>
    
  );
}

export default App;
