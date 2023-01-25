// Libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// Styles
import "./Header.css";

const navLinks = [
  { label: "add people", path: "/" },
  { label: "add relationships", path: "add-relationships" },
  { label: "find connection", path: "find-connection" },
];

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <h3>RaftLabs.</h3>
        </Link>

        {/* Navbar */}
        <nav className="header__nav">
          <ul className="header__nav__list">
            {navLinks.map(({ label, path }) => (
              <li key={label} className="nav__list--item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav__list--link ${isActive ? "active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
