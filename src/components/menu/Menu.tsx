import React from 'react';

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/car'>auth</Link>
                </li>
                <li>
                    <Link to='/auth/users'>Users</Link>
                </li>
                <li>
                    <Link to='/auth/recipes'>recipes</Link>
                </li>
            </ul>
        </div>
);
};

export default MenuComponent;