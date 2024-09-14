import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">DSA Sheet</a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
