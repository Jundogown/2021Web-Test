import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      id : <span>{user.id}</span> /  
      name : <span>{user.name}</span> / 
      phone : <span>{user.phone}</span> / 
      email : <span>({user.email})</span>
    </div>
  );
}

const UserList = ({}) => {
  const users = [
    {
        id: 1234,
        pw: 1234,
        name: 'velopert',
        phone: '010-1234-1234',
        email: 'public.velopert@gmail.com'
    },
    {
        id: 12345,
        pw: 1234,
        name: 'tester',
        phone: '010-1234-1232',
        email: 'tester@example.com'
    },
    {
        id: 112345,
        pw: 1234,
        name: 'liz',
        phone: '010-1234-1232',
        email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;