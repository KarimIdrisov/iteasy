import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '5rem',
        width: '20vw',
        height: '14vw',
        background: '#C4C4C4',
        borderRadius: '12%',
        display: 'flex',
    },
    cardImg: {
        width: "inherit",
        height: "inherit",
        borderRadius: "12%",
        position: 'absolute',
        opacity: 0.25
    },
    innerCard: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

export default function TermCard(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            {/*<img src={props.img} alt={props.altImg} className={classes.cardImg}/>*/}
            <div className={classes.innerCard}>
                <Typography variant='h5'>{props.header}</Typography>
            </div>
        </div>
    );
}