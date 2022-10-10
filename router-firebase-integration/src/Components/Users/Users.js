import React from 'react';
import SingleUser from '../SingleUsers/SingleUser';
import useUsers from '../useUsers/useUsers';

const Users = () => {
  const {users} = useUsers('https://jsonplaceholder.typicode.com/users');
  return (
    <section className='user-section'>
      <h2 className="user__title title">Our Students</h2>
      <div className="users-container custom-grid mt-8">
        {
          users?.map(user => <SingleUser key={user.id} user={user} />)
        }
      </div>
    </section>
  );
};

export default Users;