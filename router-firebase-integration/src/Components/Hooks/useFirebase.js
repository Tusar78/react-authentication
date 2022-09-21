import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {
    user,
    googleSignIn,
    setUser,
    handleLogout,
  };
};

export default useFirebase;
