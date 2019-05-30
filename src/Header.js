import React from "react";
import logo from "./logo.svg";
import Navigation from "./Navigation";

const Header = props => {
  return (
    <div>
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is Weather Crawler</h1>
      </header>
    </div>
  );
};

export default Header;
