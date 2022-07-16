import React from "react";

import Recipes from "./Recipes";

import logo from "../images/logo.png";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero">Hero section</section>
      <main>
        <section>
          <h1>Oh, hi, React</h1>
        </section>
        <section>
          <img src={logo} alt="logo" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
