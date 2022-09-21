import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const Home = () => {
  const [ user ] = useAuthState(auth);

  return (
    <section className="section">
      <div className="home">
        <h2 className="home__title">Welcome to RFI</h2>

        <div className="user">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="user__img"
              />
              <h3>Name: {user?.displayName}</h3>
              <p>Email: {user?.email}</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
