import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const { data } = await axios.get('/posts');
      setPosts(data);
    };
    fetchPosts();
    setIsLoading(false);
  }, []);

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
