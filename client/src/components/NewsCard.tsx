import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '5rem',
        width: '24vw',
        height: '16vw',
        background: '#C4C4C4',
        borderRadius: '12%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

export default function NewsCard(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <img src={props.img} alt={props.altImg} className={classes.cardImg}/>
            <div className={classes.innerCard}>
                <Typography><h2>{props.header}</h2></Typography>
                <Typography style={{fontSize: '0.8rem'}}>{props.desc}</Typography>
            </div>
        </div>
    );
}
