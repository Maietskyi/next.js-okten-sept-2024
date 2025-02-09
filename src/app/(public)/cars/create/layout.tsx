import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CarsCreateLayout metadata'
}
type Props = {children: React.ReactNode}
const CarsCreateLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CarsCreateLayout ;


