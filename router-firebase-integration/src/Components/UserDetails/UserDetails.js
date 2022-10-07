import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {userId} = useParams();
  return (
    <section className='user-details custom-grid'>
      <p>
        Hello, {userId}
      </p>
    </section>
  );
};

export default UserDetails;