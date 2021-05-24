import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import InfoSlider from "../components/InfoSlider";
import clsx from "clsx";
import TermCard from "../components/TermCard";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C38D9E',
        height: '90.6vh',
        display: 'flex'
    },
    centralContent: {
        backgroundColor: '#41B3A3',
        flex: 2,
    },
    side: {
        flex: 1,
    }
}));

export default function NewsPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>
                    <div className={classes.side}></div>
                    <div className={classes.centralContent}></div>
                    <div className={classes.side}></div>
                </div>
            </Layout>
        </div>
    );
}
