import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import useFirebase from "../Hooks/useFirebase";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, handleSingOut } = useFirebase();

  return (
    <div className="navbar">
      <nav className="nav custom-grid">
        <h1 className="nav__logo">
          <Link to="/">RFI</Link>
        </h1>

        <div className={toggle ? "nav__menu right-0" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <ActiveLink
                to="/home"
                className="nav__link"
                onClick={() => setToggle(false)}
              >
                Home
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink
                to="/product"
                className="nav__link"
                onClick={() => setToggle(false)}
              >
                Product
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink
                to="/order"
                className="nav__link"
                onClick={() => setToggle(false)}
              >
                Order
              </ActiveLink>
            </li>
            <li className="nav__item">
              <ActiveLink
                to="/register"
                className="nav__link"
                onClick={() => setToggle(false)}
              >
                Register
              </ActiveLink>
            </li>
            <li className="nav__item">
              {user?.uid ? (
                <div className="flex items-center">
                  <img className="w-10 h-10" src={user?.photoURL} alt="userPhoto" />
                  <button onClick={handleSingOut}>Logout</button>
                </div>
              ) : (
                <>
                  <ActiveLink
                    to="/login"
                    className="nav__link"
                    onClick={() => setToggle(false)}
                  >
                    Login
                  </ActiveLink>
                </>
              )}
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
