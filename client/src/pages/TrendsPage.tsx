import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C38D9E',
        height: '91vh'
    }
}));

export default function TrendsPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>

                </div>
            </Layout>
        </div>
    );
}
