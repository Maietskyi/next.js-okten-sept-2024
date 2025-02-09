import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/cars'}>Cars</Link>
                </li>
                <li>
                    <Link href={'/cars/create'}>Create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;