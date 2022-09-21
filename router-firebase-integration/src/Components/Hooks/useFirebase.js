import { useState } from "react"

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    console.log('Processing to sign in google');
  }

  return {
    user,
    googleSignIn,
    setUser
  };
}

export default useFirebase;