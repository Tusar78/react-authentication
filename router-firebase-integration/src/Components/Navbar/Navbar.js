import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <nav className="nav custom-grid">
        <h1 className="nav__logo">RFI</h1>

        <div className={toggle ? "nav__menu right-0" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Product
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Order
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Register
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Login
              </a>
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
