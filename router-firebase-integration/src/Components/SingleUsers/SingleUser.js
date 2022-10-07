import React from 'react';
import Card from '../ShareComponent/Card/Card';

const SingleUser = ({user}) => {
  return (
    <section className='single-user'>
      <Card user={user} />
    </section>
  );
};

export default SingleUser;