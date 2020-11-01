import React from 'react';
import useFetch from '../useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const {
    data: posts,
    isLoading,
  }: { data: Post[]; isLoading: boolean } = useFetch('/posts');

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
