import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <NavLink to="/menu">Menu</NavLink>
    </ul>
  );
};

export default Home;
