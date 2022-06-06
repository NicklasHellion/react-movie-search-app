import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="brand">
            <Link to="#">PLACEHOLDER LINK</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="#">LINK #1</Link>
            </li>
            <li>
              <Link to="#">LINK #2</Link>
            </li>
            <li>
              <Link to="#">LINK #3</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
