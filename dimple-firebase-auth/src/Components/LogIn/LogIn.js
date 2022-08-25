import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import app from "../../firebase.init";

const LogIn = () => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <div className=" max-w-screen-lg w-full mx-auto grid justify-center">
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

      <div className="hidden">
        <button className="bg-red-500 text-white w-32 py-2 rounded-md uppercase focus:ring-2 ring-offset-2 ring-red-300">
          Sign In
        </button>
        <div className="border p-4 rounded-md w-80 grid mt-6 space-y-3">
          <img src="" alt="" className="w-24 h-24 border-4 border-blue-300" />
          <p className="px-3 py-2 rounded-md border-b">Name: Tusar</p>
          <p className="px-3 py-2 rounded-md border-b">
            Email: tusar@gmail.com
          </p>
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
    </div>
  );
};

export default LogIn;
