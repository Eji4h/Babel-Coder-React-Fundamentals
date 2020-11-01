import React from 'react';
import useFetch from '../useFetch';

interface User {
  id: number;
  email: string;
}

const UserList = () => {
  const {
    data: users,
    isLoading,
  }: { data: User[]; isLoading: boolean } = useFetch('/users');

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
