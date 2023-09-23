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
    <div className="container mx-auto px-4">
      <DefaultNavbar></DefaultNavbar>
      <DefaultCarousel></DefaultCarousel>
      </div>
    </>
    //   </header>
    // </div>
  );
}
