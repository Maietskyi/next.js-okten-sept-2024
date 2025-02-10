import React, {FC} from 'react';

type Props = {
    params: Promise <{[
        key: string]:
    string | string[] | undefined}>
}

const UserPage:FC<Props> = async ({params}) => {
    const id = (await params).id;
    console.log(id);

    const user = await fetch('http://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.json());
    return (

        <div>
            User Page
            {JSON.stringify(user)}
        </div>
    );
};

export default UserPage;

// переренджується тільки динамічна сторінки users/+id
//  а статична users залишається такою як була
// Server-Side Rendering (SSR)
