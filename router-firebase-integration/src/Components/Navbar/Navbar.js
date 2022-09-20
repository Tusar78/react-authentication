import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <nav className="nav custom-grid">
        <h1 className="nav__logo">
          <Link to="/">RFI</Link>
        </h1>

        <div className={toggle ? "nav__menu right-0" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <ActiveLink to="/home" className="nav__link">
                Home
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/product" className="nav__link">
                Product
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/order" className="nav__link">
                Order
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/register" className="nav__link">
                Register
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink to="/login" className="nav__link">
                Login
              </ActiveLink>
            </li>
          </ul>
        </div>

        <button className="nav__toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <MdClose className="nav__toggle-icon" />
          ) : (
            <HiMenuAlt4 className="nav__toggle-icon" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
