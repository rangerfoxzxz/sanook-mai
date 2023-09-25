"use client";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DefaultCarousel from "./components/carousel";
import DefaultNavbar from "./components/navbar";
import MainPage from "pages/main-page";

function App() {
  return (
    <div className="App bg-[#D8D8D8]">
      <MainPage></MainPage>
      {/* <header className="App-header">

       </header> */}
    </div>
  );
}

export default App;
