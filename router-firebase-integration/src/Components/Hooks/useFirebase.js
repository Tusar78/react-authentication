import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  console.log(user);


  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return {
    user,
    googleSignIn,
    setUser
  };
}

export default useFirebase;