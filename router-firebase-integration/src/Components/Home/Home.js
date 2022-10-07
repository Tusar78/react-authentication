import React from "react";
import useUsers from "../useUsers/useUsers";

const Home = () => {
  const {users} = useUsers('https://jsonplaceholder.typicode.com/users');
  console.log(users);
  
  return (
    <section className="section">
      <div className="home">
        <h2 className="home__title">Welcome to RFI</h2>


      </div>
    </section>
  );
};

export default Home;
