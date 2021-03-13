import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/profile/Fred">Profile with Param</Link>
      </li>
      <li>Page2</li>
    </ul>
  );
};

export default Nav;
