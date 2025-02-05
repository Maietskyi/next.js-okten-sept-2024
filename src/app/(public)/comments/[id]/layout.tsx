import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Comments Layout metadata'
}
type Props = {children: React.ReactNode}
const CommentsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsLayout;
