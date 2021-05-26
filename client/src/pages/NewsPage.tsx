import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C38D9E',
        height: '90.6vh',
        display: 'flex'
    },
    centralContent: {
        backgroundColor: '#41B3A3',
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    side: {
        flex: 1,
    },
    imgUru: {
        height: '35vh',
    }
}));

export default function NewsPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <div className={clsx('container max-w-full max-h-screen', classes.root)}>
                    <div className={classes.side}></div>
                    <div className={classes.centralContent}>
                        <img src="https://i1.wp.com/www.insidetelecom.com/wp-content/uploads/2021/05/ByteDance-CEO.jpg?w=1200&ssl=1" alt="bebebe" className={classes.imgUru}/>
                        <Typography variant="h3" component="h2">NEWSByteDance CEO steps down, raising questions over government involvement</Typography>
                        <Typography>Shock and surprise were the predominant emotions bustling through ByteDance employees when their softly spoken founder Zhang Yiming announced that he will be stepping down as CEO of what has been described to be the world’s biggest unicorn.

                            Zhang – a 38-year-old billionaire estimated by Forbes to have a net worth of $35.6 billion – said in his internal letter to ByteDance employees that “since the beginning of this year, I’ve spent a lot of time thinking about how to better drive real long-term breakthroughs.”

                            He highlighted that the decision comes following numerous months of thinking and decided to let go of the “day-to-day responsibilities” behind, which would allow him to have “greater impact on longer term initiatives.”

                            “The truth is, I lack some of the skills that make an ideal manager,” the TikTok founder noted. “I’m more interested in analyzing organizational and market principles, and leveraging these theories to further reduce management work, rather than actually managing people.”

                            Liang Rubo, long-time collaborator, co-founder, and head of human resources, will succeed as chief executive, allowing Zhang to shift his focus toward long-term strategy, corporate culture, and social responsibility, in his position as chairman of the company’s board of directors and largest individual shareholder with 25 percent, according to a September Wall Street Journal report.

                            During his tenure, Zhang had a large involvement in making ByteDance the global household name it is today; among them is the 2017 merger of Musical.ly with TikTok – its most successful app to date, as it was one of the very few Chinese apps to gain notoriety outside of mainland China.

                            Zhang becomes yet another young tech entrepreneur in China who quit while heading a company on the rise, joining the ranks of Alibaba’s Jack Ma, Meituan’s Wang Xing, and Pinduoduo’s Colin Huang Zheng.

                            Earlier in March, the 41-year-old Colin Huang Zheng announced that he would step down as chairman to pursue other goals, including his childhood dream of becoming a scientist or researcher.</Typography>
                    </div>
                    <div className={classes.side}></div>
                </div>
            </Layout>
        </div>
    );
}
