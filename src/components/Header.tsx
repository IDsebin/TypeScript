import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </h1>
  );
}

export default Header;
