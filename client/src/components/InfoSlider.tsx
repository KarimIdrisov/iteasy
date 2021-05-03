import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import {Button, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function InfoSlider(props: any) {
    const classes = useStyles();

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: 'https://teacheslonline.files.wordpress.com/2013/03/teachenglish.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div className={'p-1 bg-green-500'}>
            <Carousel className={'mt-6'}
                      next={() => {/* Do stuff */
                      }}
                      prev={() => {/* Do other stuff */
                      }}>
                {
                    items.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
        </div>
    );
}

function Item(props: any) {
    return (
        <Paper className={''}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img className={'mx-auto'} width={200} src={props.item.img}/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
