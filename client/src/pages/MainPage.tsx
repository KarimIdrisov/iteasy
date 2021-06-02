import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import clsx from "clsx";
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#85b3dc',
        height: '90.6vh',
    },
    firstPage: {
        textAlign: 'center',
        paddingTop: "10vh",
        height: '92vh',
        backgroundPosition: '50% 0',
        backgroundImage: 'url(https://wallpaperaccess.com/full/1398314.jpg)',
        color: '#e2e0e0'
    },
    secondPage: {
        textAlign: 'left',
        paddingTop: "10vh",
        height: '100vh',
        paddingRight: '50px',

        backgroundColor: '#d048c3',
        color: '#eed1d1',
        backgroundImage: 'url(https://cdn.wallpapersafari.com/17/4/zt6WL8.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    leftContent: {},
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
    link: {
        marginTop: '10px',
        color: '#d4d3d3',
        border: '1px solid gray'
    }
}));

export default function MainPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>

                    <div className={classes.firstPage}>
                        <Typography className={classes.topText}>Science portal</Typography><br/>
                        <Typography className={classes.midText}>Make technical world <br/>
                            a little bit closer to you</Typography><br/>
                        <Typography className={classes.botText}>Do you want to know what that overcomplicated <br/>
                            scientifically oriented terms are meaning?<br/>
                            We will have an answer for you!</Typography>
                        <Link to={'/terms/ai'}>
                            <Button variant='outlined' className={classes.link}>
                                Learn more
                            </Button>
                        </Link>
                    </div>

                    <div className={classes.secondPage}>

                    </div>

                    <div className={classes.leftContent}>

                    </div>
                </div>
            </Layout>

        </div>
    );
}
