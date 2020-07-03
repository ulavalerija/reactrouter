import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/discover">Discover movies</NavLink>
      <NavLink to="/about">About this website</NavLink>
      <NavLink exact to="/">
        Homepage
      </NavLink>
    </div>
  );
}
