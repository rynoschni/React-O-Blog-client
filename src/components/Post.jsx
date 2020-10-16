import React from 'react';
import { useParams } from 'react-router-dom';

const Post = props => {
  const { posts } = props;
  const { slug } = useParams();
  const post = posts.find((post) => {
    return post.slug === slug ? post : null;

  });

  return(
    <>
      <h2>{post.title}</h2>
      <div>
        <p>{post.entry}</p>
      </div>
    </>
  );

};

export default Post;