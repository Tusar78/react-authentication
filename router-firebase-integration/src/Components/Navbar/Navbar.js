import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import ActiveLink from "../ActiveLink/ActiveLink";
import useFirebase from "../Hooks/useFirebase";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { handleLogout } = useFirebase();
  const [myUser, setMyUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setMyUser(user);
      } else {
        setMyUser({});
      }
    });
  }, []);  

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
              {myUser?.uid ? (
                <button className="nav__link" onClick={ handleLogout }>Logout</button>
              ) : (
                <ActiveLink
                  to="/login"
                  className="nav__link"
                  onClick={() => setToggle(false)}
                >
                  Login
                </ActiveLink>
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
