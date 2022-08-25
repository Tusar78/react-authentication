import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");
  const [error, setError] = useState(true);
  const [register, setRegister] = useState(false);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleValidate = (e) => {
    const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regEx.test(e.target.value)) {
      console.log("Yes");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleRegister = (e) => {
    setRegister(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regEx.test(password)) {
      setValidate(
        "Minimum eight characters, at least one letter and one number"
      );
      return;
    }
    setValidate(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <div className="max-w-screen-lg w-full mx-auto flex justify-center mt-6">
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              {register
                ? "Sign in to our platform"
                : "Register for our platform"}
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                placeholder="name@company.com"
                onBlur={handleEmailBlur}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className={
                  error
                    ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none ring-2 ring-red-500"
                }
                onBlur={handlePasswordBlur}
                onChange={handleValidate}
              />
              <p className="text-red-500">
                <small>{validate}</small>
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 opacity-0 w-0 h-0"
                    onChange={handleRegister}
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer hover:underline"
                >
                  {register ? "You can register" : "Already Register?"}
                </label>
              </div>
              <a
                href="/"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {
                register ? 'Sign In' : 'Register'
              }
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="/"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
