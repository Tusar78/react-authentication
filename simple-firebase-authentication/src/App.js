import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
    <>
      <div className="m-12">
        {!user.email ? (
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md focus:ring-2 ring-offset-2 ring-blue-300"
            onClick={handleSignIn}
          >
            Sign in Google
          </button>
        ) : (
          <button
            className="px-6 py-2 ml-4 bg-red-600 text-white rounded-md focus:ring-2 ring-offset-2 ring-red-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
        <div className="mt-4 w-96 p-4 border rounded-md space-y-4">
          <img src={user?.photoURL} alt={user.displayName} />
          <p className="border-b border-blue-300 pb-2">
            Name: {user.displayName}
          </p>
          <p className="border-b border-blue-300 pb-2">Email: {user.email}</p>
        </div>
      </div>
    </>
  );
}

export default App;
