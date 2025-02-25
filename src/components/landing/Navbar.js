import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link>
              <span className="menuItem">Alerts</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Products</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Solutions</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Company</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Support</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Pricing</span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="menuItem">Contacts</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
