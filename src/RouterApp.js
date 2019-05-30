import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Weather from "./Component/Weather/";
import Home from "./Component/Home";
import About from "./Component/About";

const RouterApp = () => {
  return (
    <div className="App">
      <Header />

      <switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/weather" component={Weather} />
      </switch>
    </div>
  );
};

export default RouterApp;
