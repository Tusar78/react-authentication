import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }
  return (
    <>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-md m-12 focus:ring-2 ring-offset-2 ring-blue-300"
        onClick={handleGoogle}
      >
        Sign in Google
      </button>
    </>
  );
}

export default App;
