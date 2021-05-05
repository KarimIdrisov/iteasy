import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import InfoSlider from "../components/InfoSlider";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C38D9E'
    }
}));

export default function TermsPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>
                    <InfoSlider/>
                </div>
            </Layout>
        </div>
    );
}
