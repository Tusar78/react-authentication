import React from 'react';
import SingleUser from '../SingleUsers/SingleUser';
import useUsers from '../useUsers/useUsers';

const Users = () => {
  const {users} = useUsers('https://jsonplaceholder.typicode.com/users');
  return (
    <section className='section'>
      <div className="users-container custom-grid mt-8">
        {
          users?.map(user => <SingleUser key={user.id} user={user} />)
        }
      </div>
    </section>
  );
};

export default Users;