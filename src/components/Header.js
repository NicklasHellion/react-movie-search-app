import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="brand">
            <Link to="/">Movie Search</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="./Watchlist.js">Watchlist</Link>
            </li>
            <li>
              <Link to="./Watched.js">Watched</Link>
            </li>
            <li>
              <Link to="/src/components/Add.js">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
