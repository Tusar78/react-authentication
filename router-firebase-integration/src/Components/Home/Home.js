import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h2 className="hero__title">We Enter to Learn Leave to Achieve</h2>
            <p className="hero__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quam consectetur repudiandae dolorum aliquam labore
              at animi sed, ratione magnam odit commodi quasi porro velit.
            </p>
            <button className="hero__btn">Get Started</button>
          </div>
          <div className="hero__img">
            <img src="" alt="" className="hero-img" />
          </div>
        </div>
      </section>
    </>
    // <section className="section">
    //   <div className="home">
    //     <div className="users-container custom-grid mt-8">
    //       {users?.map((user) => (
    //         <SingleUser key={user.id} user={user} />
    //       ))}
    //     </div>

    //     <div className="custom-grid mt-10">
    //       <Link
    //         className="group w-32 transition-all duration-100 hover:w-40 relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    //         to="/users"
    //       >
    //         <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
    //           <svg
    //             className="h-5 w-5"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M17 8l4 4m0 0l-4 4m4-4H3"
    //             />
    //           </svg>
    //         </span>

    //         <span className="text-sm font-medium transition-all group-hover:ml-4">
    //           Load More
    //         </span>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Home;
