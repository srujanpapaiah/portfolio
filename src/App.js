import React from "react";
import "./css/style.css";
import "./css/query.css";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import srujan from "./assets/img-ii.png";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="container">
        <div className="col col-1">
          <p className="intro-text">
            Hi, my name is
            <br />
            <span className="name-decoration"> Srujan Papaiahgari. </span>
            <br />
            <span>I design and build products for the Web.</span>
          </p>
          <button className="hireButton">Hire me</button>
        </div>
        <div className="col col-2">
          <img src={srujan} alt="Srujan Papaiahgari" className="srujan-img" />
        </div>
      </main>

      <Footer year="2022" />
    </>
  );
};

export default App;
