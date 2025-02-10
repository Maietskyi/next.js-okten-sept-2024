import React from 'react';

const UsersPage = async () => {

    const users = await fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

    return (
        <div>
            Users Page
            {users.map((user: {id:number, username:string}) => (<div key={user.id}>
                {user.username}
            </div>))}
        </div>
    );
};

export default UsersPage;

// Це підхід до сторінок на яких інформація рідко оновлюється
// Static Site Generation (SSG);