import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import useUsers from "../useUsers/useUsers";

const Posts = () => {
  const { users } = useUsers('https://jsonplaceholder.typicode.com/posts');
  if (users) {
    users.length = 10;
  }

  return (
    <section className='post-section'>
      <h2 className="post__title title">Our Blog Post</h2>
      
      <div className="post__container custom-grid">
        {
          users?.map(user => <SinglePost key={user.id} user={user} />)
        }
        
      </div>
    </section>
  );
};

export default Posts;