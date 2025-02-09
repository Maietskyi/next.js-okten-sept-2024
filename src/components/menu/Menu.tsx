import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className="flex gap-4">
                <li className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Link href={'/cars'}>Cars</Link>
                </li>
                <li className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Link href={'/cars/create'}>Create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;