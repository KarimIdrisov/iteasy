import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography  from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#85b3dc',
        height: '90.6vh',
    },
    rightContent: {
        float: "right",
        marginTop: "10vh",
        marginRight: "8vw",
    },
    leftContent: {

    },
    topText: {
        fontSize: "5rem",
        fontFamily: "Copperplate",
        letterSpacing: '0.0002rem',
        lineHeight: '4.5rem',
    },
    midText: {
        fontSize: "5rem",
        fontFamily: "Impact",
        letterSpacing: '0.0002rem',
        lineHeight: '4.5rem',
    },
    botText: {
        fontSize: "1.2rem",
        letterSpacing: '0.0002rem',
        lineHeight: '1rem',
    },
    rect: {
        position: "absolute",
        bottom: 0,
        width: 200,
        height: 200,
        border: '15px solid #E27D60',
    },
    irect: {
        position: "absolute",
        bottom: 30,
        left: 30,
        width: 140,
        height: 140,
        border: '15px solid #E8A87C',
    },
    iirect: {
        position: "absolute",
        bottom: 60,
        left: 60,
        width: 80,
        height: 80,
        border: '15px solid #C38D9E',
    },
    imhex: {
        position: 'absolute',
        opacity: 0.25,
        right: 40,
        width: '35vw',
        height: '35vw',
    },
    imbox: {
        position: 'absolute',
        opacity: 0.25,
        left: '-12vw',
        width: '65vw',
        height: '30vw',
    }
}));

export default function MainPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <img src="box.png" alt="hex" className={classes.imbox}/>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>

                    <div className={classes.rightContent}>
                        <img src="2.png" alt="hex" className={classes.imhex}/>
                        <Typography className={classes.topText}>Science portal</Typography><br/>
                        <Typography className={classes.midText}>Make technical world <br/>
                        a little bit closer to you</Typography><br/>
                        <Typography className={classes.botText}>Do you want to know what that overcomplicated <br/>
                        scientifically oriented terms are meaning?<br/>
                        We will have an answer for you!</Typography>
                    </div>
                    <div className={classes.leftContent}>
                        Paralax side
                    </div>
                    <div className={classes.rect}></div>
                    <div className={classes.irect}></div>
                    <div className={classes.iirect}></div>
                </div>
            </Layout>

        </div>
    );
}
