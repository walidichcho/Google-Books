import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <a className="navbar-brand" href="/">
        <h4 className="text-white">Google Books</h4>
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              search </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
    </Link>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
