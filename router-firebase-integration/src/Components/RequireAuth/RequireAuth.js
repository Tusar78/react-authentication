// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../Firebase/firebase.init';

// const RequireAuth = ({ children }) => {
//   const [ user ] = useAuthState(auth);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{from: location}} replace />
//   } else {
//     return children;
//   }
// };

// export default RequireAuth;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const RequireAuth = ({children}) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <p>Loading ....</p>
  }

  if (!user) {
    return <Navigate to="/signIn" state={{from: location}} replace />
  } else {
    return children;
  }
};

export default RequireAuth;