import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import app from "../../firebase.init";

const LogIn = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className=" max-w-screen-lg w-full mx-auto grid justify-center">
      {!user.uid ? (
        <>
          <div className="border p-4 rounded-md w-80 grid mt-6">
            <div className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="border px-3 py-2 outline-none rounded-md w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-3 py-2 outline-none rounded-md w-full mt-1"
              />

              <button className="bg-amber-500 text-white px-6 py-2 rounded-md uppercase focus:ring-2 ring-offset-2 ring-amber-300">
                Sign In
              </button>
            </div>
          </div>
          <div className="justify-self-center mt-8 space-x-8">
            <button onClick={handleGoogleSignIn}>
              <FcGoogle className="text-5xl border p-2 rounded-md shadow" />
            </button>
            <button>
              <FaTwitter className="text-5xl border p-2 rounded-md shadow text-[#00acee]" />
            </button>
            <button>
              <FaGithub className="text-5xl border p-2 rounded-md shadow" />
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <button
            className="bg-red-500 text-white w-32 py-2 rounded-md uppercase focus:ring-2 ring-offset-2 ring-red-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <div className="border p-4 rounded-md w-80 grid mt-3 space-y-2">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-24 h-24 border-4 border-blue-200 rounded-md"
            />
            <p className="py-1 rounded-md border-b">Name: {user.displayName}</p>
            <p className={user.email ? "py-1 rounded-md border-b" : "hidden"}>
              Email: {user?.email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
