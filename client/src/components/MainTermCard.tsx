import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '3rem',
        width: '35vw',
        height: '34vw',
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
        paddingTop: 50
    },
    minicard: {
        width: '60vw',
        height: '60vh',
        background: '#C4C4C4',
        borderRadius: '12%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

export default function MainTermCard(props: any) {
    const classes = useStyles();

    // test
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    if (width < 800) {
        return (
            <div className={classes.minicard}>
                <img src={props.img} alt={props.altImg} className={classes.cardImg}/>
                <div className={classes.innerCard}>
                    <Typography variant='body1'>{props.header}</Typography>
                    <Typography style={{fontSize: '1rem', marginTop: 5}}>{props.desc}</Typography>
                </div>
            </div>
        )
    } else {

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
}
