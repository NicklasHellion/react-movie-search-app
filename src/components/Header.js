import React from "react";
import { Link } from "react-router-dom";
import "./Add";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie Search</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/Watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/Watched">Watched</Link>
            </li>
            <li>
              <Link to="/Add" className="btn btn-main">
                Add +
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
