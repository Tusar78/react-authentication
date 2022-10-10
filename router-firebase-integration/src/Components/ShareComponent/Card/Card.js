import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user, children }) => {
  const { id, name, email } = user || user[0] || {};
  const { username, phone, company } = children || {};
  return (
    <>
      <Link
        className={children ? "relative block rounded-xl border border-gray-200 p-4 shadow-sm" : "relative block rounded-xl border border-gray-100 p-4 shadow-md"}
        to={`/user/${id}`}
      >
        <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
          {id}
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8">
          <img
            className={
              children
                ? "w-8 h-8 sm:w-24 sm:h-24 mx-auto border rounded-full ring-4 ring-gray-200"
                : "w-8 h-8 sm:w-10 sm:h-10"
            }
            src="https://i.ibb.co/9sY24xD/user-1.png"
            alt="user icon"
          />
          <p className="text-center text-purple-400 mt-3">{username}</p>

          <h5 className="mt-4 text-[18px] font-semibold text-gray-900">
            {children ? <>Name: {name}</> : <>{name}</>}
          </h5>

          <p className="mt-2 hidden text-sm sm:block">
            {children ? <>Email: {email}</> : <>{email}</>}
          </p>
          <p className="mt-2 hidden text-sm sm:block">
            {
              children ? <>Company: {company}</> : ''
            }
          </p>
          <p className="mt-2 hidden text-sm sm:block">
            {
              children ? <>Phone: {phone}</> : ''
            }
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
