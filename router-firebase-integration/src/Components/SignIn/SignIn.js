import React from "react";
import { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const SignIn = () => {
  const [signIn, setSignIn] = useState(false);
  const [createError, setCreateError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmedPass: "",
  });

  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    hooksError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFormInput = (event) => {
    userInfo[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInfo.password !== userInfo.confirmedPass) {
      setCreateError(`Password can't mass!`);
      return;
    }

    if (!signIn) {
      setCreateError("");
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } else {
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    console.log(userInfo);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [myUser] = useAuthState(auth);

  let from = location.state?.from?.pathname || '';

  if (myUser) {
    navigate(from, {replace: true});
  }
  

  return (
    <section className="signIn custom-grid">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            {signIn ? "Sign In!" : "Sign Up!"}
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                onBlur={handleFormInput}
                className="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter email"
                name="email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                onBlur={handleFormInput}
                className="w-full rounded-lg outline-none focus:ring-2 border focus:ring-blue-200 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {signIn ? (
            ""
          ) : (
            <div>
              <label htmlFor="password" className="sr-only">
                Confirmed Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  onBlur={handleFormInput}
                  className="w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-200  border border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirmed password"
                  name="confirmedPass"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          )}
          <p className="text-red-400">
            {hooksError ? hooksError.message : createError}
          </p>

          {!signIn
            ? createUser && (
                <p className="text-green-400">User created successfully~</p>
              )
            : ""}
          {user && <p className="text-green-400">Login successfully~</p>}

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {signIn ? "No account? " : "You have already account? "}
              <input
                className="hidden"
                type="checkbox"
                id="loginRegister"
                onChange={() => {
                  setSignIn(!signIn);
                }}
              />
              <label
                className="underline cursor-pointer"
                htmlFor="loginRegister"
              >
                {signIn ? "Sign Up" : "Sign In"}
              </label>
            </p>

            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
