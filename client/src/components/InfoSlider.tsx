import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import {Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '72vw',
        maxHeight: '82vh',
        minHeight: '82vh',
        minWidth: '72vw',
    },
    media: {
        height: '40vh',
    },
    sliderBg: {
        backgroundColor: '#98cfbc'
    }
}));

export default function InfoSlider() {
    const classes = useStyles();

    const items = [
        {
            name: "Kiril Iriskin",
            description: "300 bucks",
            img: 'https://sun9-36.userapi.com/impg/6iVf09SYCvjU_nD7ovEUmWSzmZVMVKi--92StA/4tyQKL-wQVY.jpg?size=1000x967&quality=95&sign=fe88d8906fe219edb2716ed55136f954&type=album'
        },
        {
            name: "Kim Asa",
            description: "Next door.",
            img: 'https://sun9-68.userapi.com/impg/brDFPzPADedGEigJsfFjTl9OZX7BOmZTh_bEZA/LWotm2Ji4lQ.jpg?size=1280x995&quality=96&sign=d99e66998d8bb4f6f5f7b0b446286a53&type=album'
        }
    ]

    return (
        <div className={clsx('p-1', classes.sliderBg)}>
            <Carousel className={'mt-6'}
                      next={() => {/* Do stuff */}}
                      prev={() => {/* Do other stuff */}}
                      autoPlay={true}>
                {
                    items.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
        </div>
    );
}

function Item(props: any) {
    const classes = useStyles();

    return (
        <div className={'text-center flex justify-center'}>
            <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={props.item.img}
                        title="Slider image"/>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {props.item.description}
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    )
}
