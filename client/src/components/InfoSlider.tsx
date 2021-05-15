import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import {Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 800,
        maxHeight: '82vh',
        minHeight: '82vh',
    },
    media: {
        height: 350,
    },
    sliderBg: {
        backgroundColor: '#98cfbc'
    }
}));

export default function InfoSlider() {
    const classes = useStyles();

    const items = [
        {
            name: "IT terms in easy words",
            description: "We use cards to learn IT terms easy. You can learn more and also teach english.",
            img: 'https://teacheslonline.files.wordpress.com/2013/03/teachenglish.jpg'
        },
        {
            name: "IT news",
            description: "Last IT news from all world.",
            img: 'https://previews.123rf.com/images/maxkabakov/maxkabakov1312/maxkabakov131201847/24601637-news-concept-pixelated-words-it-news-on-digital-background-3d-render.jpg'
        }
    ]

    return (
        <div className={clsx('p-1', classes.sliderBg)}>
            <Carousel className={'mt-6'}
                      next={() => {/* Do stuff */}}
                      prev={() => {/* Do other stuff */}}
                      autoPlay={false}>
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
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
