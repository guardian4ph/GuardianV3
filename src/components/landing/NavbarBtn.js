import React from "react";
import { Link } from "react-router-dom";
import "./NavbatBtn.css";

const NavbarBtn = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link>
              <span className="menuItem">Register</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Log In</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBtn;
