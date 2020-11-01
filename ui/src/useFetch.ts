import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const { data } = await axios.get(url);
      setData(data);
    };
    fetchPosts();
    setIsLoading(false);
  }, [url]);

  return {
    data,
    isLoading
  };
}

export default useFetch;