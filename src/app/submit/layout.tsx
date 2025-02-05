import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Submit Page metadata'
}
type Props = {children: React.ReactNode}
const SubmitPage= ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default SubmitPage;
