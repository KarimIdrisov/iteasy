import React from 'react';
import Header from "./Header";

export default function Layout(props: any) {
    return (
        <div className={'container max-w-full max-h-screen'}>
            <Header/>
            {props.children}
        </div>
    );
}
