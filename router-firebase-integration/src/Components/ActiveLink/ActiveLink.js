import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link 
        {...props}
        className={match ? 'nav__link bg-[#fff1c5]' : 'nav__link'}
        to={to}
      >
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;