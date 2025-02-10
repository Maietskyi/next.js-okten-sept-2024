import React from 'react';

const UsersPage = async () => {

    const users = await fetch('http://jsonplaceholder.typicode.com/users', {next: {revalidate: 5}})
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

// Incremental Static Regeneration (ISR)
