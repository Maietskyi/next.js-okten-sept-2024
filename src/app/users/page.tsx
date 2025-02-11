'use client';


import {useEffect} from "react";

const UsersPage = () => {

    useEffect(() => {
        console.log(localStorage);
    }, []);

    return (
        <div>
        </div>
    );
};

export default UsersPage;

