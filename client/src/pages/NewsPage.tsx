import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {

    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#080f19',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        height: '100%'
    },
    media: {
        height: 200,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    card: {
        width: '26vw',
        marginTop: '2rem',
        marginBottom: '2rem',
        fontSize: '1.2rem',
        height: '72vh'
    },
    center: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#080f19',
        width: '28vw',
        flexWrap: "wrap",
    },
    minicard: {
        width: '60vw',
        marginTop: '2rem',
        marginBottom: '2rem',
        fontSize: '1.2rem',
        height: '60vh',
    },
    minicenter: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#080f19',
        width: '28vw',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '5rem'
    },
    flexcolumn: {
        flexDirection: 'column',
        display: "flex",
    },
    minimedia: {
        height: 100,
    }
}));

interface News {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export default function NewsPage(props: any) {
    const classes = useStyles();
    const [news, setNews] = useState([])

    const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=technology&apiKey=987268c1d99c499298f567576900915c',
    };

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

    useEffect(() => {
        async function getNews() {
            // @ts-ignore
            await axios.request(options).then(function (response: any) {
                setNews(response.data.articles)
            })
        }

        getNews()
    }, [setNews])

    if (width < 800) {
        return (
            <div>
                <Layout>
                    <div className={clsx('container max-w-full', classes.root, {[classes.flexcolumn]: width < 1000})}>

                        {news.map((news: News, number: number) => {
                            return (
                                <div key={number}
                                     className={clsx(classes.center, {[classes.minicenter]: width < 1000})}>
                                    <Card className={clsx(classes.card, {[classes.minicard]: width < 1000})}>
                                        <CardMedia
                                            className={classes.minimedia}
                                            image={news.urlToImage}
                                        />
                                        <CardHeader
                                            variant='h6'
                                            title={news.title}
                                            subheader={news.publishedAt.slice(0, 10)}/>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </Layout>
            </div>
        )
    } else {
        return (
            <div>
                <Layout>
                    <div className={clsx('container max-w-full', classes.root, {[classes.flexcolumn]: width < 1000})}>

                        {news.map((news: News, number: number) => {
                            return (
                                <div key={number}
                                     className={clsx(classes.center, {[classes.minicenter]: width < 1000})}>
                                    <Card className={clsx(classes.card, {[classes.minicard]: width < 1000})}>
                                        <CardMedia
                                            className={classes.media}
                                            image={news.urlToImage}
                                        />
                                        <CardHeader
                                            title={news.title}
                                            subheader={news.publishedAt.slice(0, 10)}/>
                                        <CardContent>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                {news.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Button>Read more</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </Layout>
            </div>
        );
    }
}
