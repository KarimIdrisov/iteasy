import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#080f19',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        width: '60%',
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    center: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#080f19',
        width: '100%'
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


    useEffect(() => {
        async function getNews() {
            // @ts-ignore
            await axios.request(options).then(function (response: any) {
                setNews(response.data.articles)
            })
        }

        getNews()
    }, [setNews])

    // {
    //     "source": {
    //         "id": "techcrunch",
    //         "name": "TechCrunch"
    //     },
    //     "author": "Rebecca Bellan",
    //     "title": "Utah DOT pilots Blyncsy’s AI-powered road maintenance technology",
    //     "description": "If you drive past potholes and faded lane dividers on your morning commute to work, chances are you’ll continue to see such road blemishes until someone alerts the local department of transportation to the problem by filing a complaint. Utah-based startup Bly…",
    //     "url": "http://techcrunch.com/2021/05/27/utah-dot-pilots-blyncsys-ai-powered-road-maintenance-technology/",
    //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/1.png?w=713",
    //     "publishedAt": "2021-05-27T16:46:28Z",
    //     "content": "If you drive past potholes and faded lane dividers on your morning commute to work, chances are you’ll continue to see such road blemishes until someone alerts the local department of transportation … [+4021 chars]"
    // }

    return (
        <div>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>

                    {news.map( (news: News, number:number) => {
                        return (
                            <div key={number} className={classes.center}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={news.urlToImage}
                                    />
                                    <CardHeader
                                        title={news.title}
                                        subheader={news.publishedAt}/>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
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
