import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Пользователи</h1>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
