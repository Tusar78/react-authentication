import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import useUsers from "../useUsers/useUsers";

const Posts = () => {
  const { users } = useUsers('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <section className='post-section'>
      <h2 className="post__title title">Our Blog Post</h2>
      
      <div className="post__container custom-grid">
        {/* {
          users?.length
        } */}
        <SinglePost />
      </div>
    </section>
  );
};

export default Posts;