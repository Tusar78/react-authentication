import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className="nav custom-grid">
        <h1 className='nav__logo'>RFI</h1>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="/" className="nav__link">Product</a></li>
            <li className="nav__item"><a href="/" className="nav__link">Order</a></li>
            <li className="nav__item"><a href="/" className="nav__link">Register</a></li>
            <li className="nav__item"><a href="/" className="nav__link">Login</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;