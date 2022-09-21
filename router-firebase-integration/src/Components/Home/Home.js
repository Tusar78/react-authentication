import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();

  return (
    <section className="section">
      <div className="home">
        <h2 className="home__title">Welcome to RFI</h2>

        <div className="user">
          {user.uid ? (
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
