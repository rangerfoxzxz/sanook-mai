"use client";
import React from "react";
import logo from "./logo.svg";
import "App.css";
import DefaultCarousel from "components/carousel";
import DefaultNavbar from "components/navbar";

export default function MainPage() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <>
      <DefaultNavbar></DefaultNavbar>
      <DefaultCarousel></DefaultCarousel>
    </>
    //   </header>
    // </div>
  );
}
