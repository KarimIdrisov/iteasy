import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography"
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C38D9E',
        height: '90.6vh',
        display: 'flex',
        justifyContent: 'center',
    },
    Container: {
        marginTop: '7%',
        display: 'flex',
        height: '65vh',
        width: '80vw',
    },
    centralContent: {
        backgroundColor: '#41B3A3',
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideR: {
        backgroundColor: '#85DCB0',
        flex: 1,
        borderRadius: '0 25% 25% 0',
    },
    sideL: {
        backgroundColor: '#85DCB0',
        flex: 1,
        borderRadius: '25% 0 0 25%',
    },
    cardImg: {
        height: '65vh',
        width: '40vw',
        position: 'absolute',
        opacity: 0.1
    },
}));

export default function TrendsPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>
                    <div className={classes.Container}>
                        <div className={classes.sideL}></div>
                        <div className={classes.centralContent}>
                            <Typography variant="h3" component="h2">Augument Reality(AR)</Typography>
                            <Typography variant="h4" component="h5">AR is an interactive experience of a real-world environment
                                where the objects that reside in the real world are enhanced by computer-generated perceptual
                                information, sometimes across multiple sensory modalities, including visual, auditory, haptic,
                                somatosensory and olfactory.</Typography>
                            <img src='https://mobidev.biz/wp-content/uploads/2020/01/augmented-reality-future-trends-1.png' alt='ILOVE' className={classes.cardImg}/>
                        </div>
                        <div className={classes.sideR}></div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
