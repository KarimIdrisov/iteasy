import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography"
import clsx from "clsx";
import {Button, Card, CardActions, CardContent} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'url(https://cdn.hipwallpaper.com/i/49/59/CJBg9I.jpg)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundSize: "cover",
        flexWrap: 'wrap'
    },
    card: {
        width: '25%',
        margin: '3rem'
    }

}));

const trends = [
    {
        id: 'ai',
        title: 'Artificial Intelligence',
        description: 'Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more.',

    },
    {
        id: 'rpa',
        title: 'Robotic Process Automation (RPA)',
        description: 'Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do. ',

    },
    {
        id: 'ec',
        title: 'Edge Computing',
        description: 'Formerly a new technology trend to watch, cloud computing has become mainstream, with major players AWS (Amazon Web Services), Microsoft Azure and Google Cloud Platform dominating the market. The adoption of cloud computing is still growing, as more and more businesses migrate to a cloud solution. But it’s no longer the emerging technology trend. Edge is.',

    }
    ,{
        id: 'qc',
        title: 'Quantum Computing',
        description: 'Next remarkable technology trend is quantum computing, which is a form of computing that takes advantage of quantum phenomena like superposition and quantum entanglement. This amazing technology trend is also involved in preventing the spread of the coronavirus, and to develop potential vaccines, thanks to its ability to easily query, monitor, analyze and act on data, regardless of the source. Another field where quantum computing is finding applications in banking and finance, to manage credit risk, for high-frequency trading and fraud detection.',

    },
    {
        id: 'vr',
        title: 'Virtual Reality and Augmented Reality',
        description: 'The next exceptional technology trend - Virtual Reality (VR) and Augmented Reality (AR), and Extended Reality (ER). VR immerses the user in an environment while AR enhances their environment. Although this technology trend has primarily been used for gaming thus far, it has also been used for training, as with VirtualShip, a simulation software used to train U.S. Navy, Army and Coast Guard ship captains.',

    }
]

export default function TrendsPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>

                    {trends.map( (trend: any, number: number) => {
                        return (
                        <Card key={number} className={classes.card}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {trend.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {trend.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        )
                    })}
                </div>
            </Layout>
        </div>
    );
}
