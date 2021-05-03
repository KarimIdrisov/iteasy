import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";

const useStyles = makeStyles((theme) => ({

}));

export default function Layout(props: any) {
    const classes = useStyles();
    return (
        <div className={'container max-w-full max-h-screen'}>
            <Header/>
            {props.children}
        </div>
    );
}
