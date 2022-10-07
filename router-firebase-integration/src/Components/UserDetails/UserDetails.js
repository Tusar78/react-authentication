import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../ShareComponent/Card/Card';
import useUsers from '../useUsers/useUsers';

const UserDetails = () => {
  const {userId} = useParams();
  const { users } = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  console.log(users);
  return (

    <section className='user-details custom-grid'>
      <h2 className='text-xl font-medium text-gray-800'>User Details</h2>

      <div className="user custom-grid">
        {
          users?.map(user => <Card key={user.id} user={user} />)
        }
      </div>
    </section>
  );
};

export default UserDetails;