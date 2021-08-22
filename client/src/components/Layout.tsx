import React from 'react';
import Header from "./Header";

export default function Layout(props: any) {
    const links = [
        { title: 'Home', url: '/' },
        { title: 'News', url: '/news' },
        { title: 'Trends', url: '/trends' },
        { title: 'Terms', url: '/terms' },
    ]

    return (
        <div>
            <Header links={links} page={props.page} />
            {props.children}
        </div>
    );
}
