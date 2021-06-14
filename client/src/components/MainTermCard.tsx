import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '3rem',
        width: '28vw',
        height: '20vw',
        background: '#C4C4C4',
        borderRadius: '12%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    cardImg: {
        width: "inherit",
        height: "inherit",
        borderRadius: "12%",
        position: 'absolute',
        opacity: 0.25
    },
    innerCard: {
        width: '88%',
        height: '60%',
    },
}));

export default function MainTermCard(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <img src={props.img} alt={props.altImg} className={classes.cardImg}/>
            <div className={classes.innerCard}>
                <Typography variant='h5'>{props.header}</Typography>
                <Typography style={{fontSize: '1rem', marginTop: 15}}>{props.desc}</Typography>
            </div>
        </div>
    );
}
