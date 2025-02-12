import React from 'react';

const UsersPage = async () => {

    const users = await fetch('http://localhost:3000/users/api')
        .then(res => res.json());
    return (
        <div>
            Users Page
            {users.map((user: any) => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};

export default UsersPage;