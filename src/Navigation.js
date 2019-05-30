import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home </Link>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/weather"> Weather </NavLink>
    </div>
  );
};

export default Navigation;
