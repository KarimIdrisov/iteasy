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

const lnews = [
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Rebecca Bellan",
        "title": "Utah DOT pilots Blyncsy’s AI-powered road maintenance technology",
        "description": "If you drive past potholes and faded lane dividers on your morning commute to work, chances are you’ll continue to see such road blemishes until someone alerts the local department of transportation to the problem by filing a complaint. Utah-based startup Bly…",
        "url": "http://techcrunch.com/2021/05/27/utah-dot-pilots-blyncsys-ai-powered-road-maintenance-technology/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/1.png?w=713",
        "publishedAt": "2021-05-27T16:46:28Z",
        "content": "If you drive past potholes and faded lane dividers on your morning commute to work, chances are you’ll continue to see such road blemishes until someone alerts the local department of transportation … [+4021 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Annie Siebert",
        "title": "Widespread electrification requires us to rethink battery technology",
        "description": "The global transition to electrification has increased demand for longer-lasting and faster-charging batteries. But battery innovation hasn’t kept pace with society’s ambitions.",
        "url": "http://techcrunch.com/2021/06/10/widespread-electrification-requires-us-to-rethink-battery-technology/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-954558336.jpg?w=599",
        "publishedAt": "2021-06-10T15:52:10Z",
        "content": "The global economys transition to widespread electrification has increased the demand for longer-lasting and faster-charging batteries across industries including transportation, consumer electronics… [+8099 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/jon-fingas",
        "title": "Google's speedier internet standard is now an actual standard",
        "description": "Google's QUIC data technology is now an official internet standard, potentially improving connections worldwide..",
        "url": "https://www.engadget.com/google-quic-becomes-official-internet-standard-170000970.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/fd12e750-c20d-11eb-85ef-c8d4cf2a6a9b",
        "publishedAt": "2021-05-31T21:00:00Z",
        "content": "One of Google's numerous efforts to speed up the internet is now available to everyone. CNETreports that the Internet Engineering Task Force has published Google's QUIC (Quick UDP Internet Connection… [+1288 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/billy-steele",
        "title": "Recommended Reading: How Ford built the electric F-150",
        "description": "Recommended Reading highlights the week's best long-form writing on technology and more..",
        "url": "https://www.engadget.com/ford-f-150-lightning-interview-140005973.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/aee9a1e0-baa1-11eb-b78f-0e4fdddbe0e2",
        "publishedAt": "2021-05-22T14:00:05Z",
        "content": "Nilay Patel, The Verge\r\nThis was a huge week for Ford. Despite already launching the Mustang Mach-E, the company's biggest EV reveal was its F-150 Lightning an electrified take on the most popular tr… [+736 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Kirsten Korosec",
        "title": "Self-driving truck startup Kodiak partnering with SK Group to expand into Asia",
        "description": "Kodiak Robotics, the U.S.-based self-driving truck startup, is partnering with South Korean conglomerate SK to explore the possibility of deploying its autonomous vehicle technology in Asia. The ultimate aim of the partnership is to sell and distribute Kodiak…",
        "url": "http://techcrunch.com/2021/05/26/self-driving-truck-startup-kodiak-partnering-with-sk-group-to-expand-into-asia/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/Kodiak-Truck-Sunset.jpg?w=733",
        "publishedAt": "2021-05-26T14:53:10Z",
        "content": "Kodiak Robotics, the U.S.-based self-driving truck startup, is partnering with South Korean conglomerate SK to explore the possibility of deploying its autonomous vehicle technology in Asia.\r\nThe ult… [+2896 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Jaime Stathis",
        "title": "How Apps and VR Therapy Can Help OCD Patients",
        "description": "Obsessive-compulsive disorder is often misunderstood. Here’s what it is, and how you can use technology to help navigate uncertainty.",
        "url": "https://www.wired.com/story/apps-vr-help-ocd-obsessive-compulsive-disorder-patients/",
        "urlToImage": "https://media.wired.com/photos/60b6bd7684acd39aeb655500/191:100/w_1280,c_limit/Gear-VR-OCD-therapy-668541394.jpg",
        "publishedAt": "2021-06-02T13:00:00Z",
        "content": "With OCD, as with phobias, there is often a ritual or safety behavior involved that the patient thinks is helping them cope with their fear and make them feel safer, but the rituals actually reinforc… [+3543 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Tyler Hayes",
        "title": "Want to Write Better? Here Are Some Tools to Help You Improve",
        "description": "Whether you're drafting a memo or promoting a book, technology can make the task easier than ever.",
        "url": "https://www.wired.com/story/tech-tips-tools-improve-writing/",
        "urlToImage": "https://media.wired.com/photos/60c00597e90f148723cbc78b/191:100/w_1280,c_limit/Gear-Writing-Tools-1307393936.jpg",
        "publishedAt": "2021-06-09T11:00:00Z",
        "content": "It doesnt matter whether youre drafting a company-wide memo, struggling through a school assignment, or working on your first novel. Writing is never effortless. It takes work. If youre here, you alr… [+3961 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/karissa-bell",
        "title": "Snapchat shows off new AR features and more ‘inclusive’ camera tech",
        "description": "Snap showed off new AR features, announced partnerships with YouTube, and previewed a new more “inclusive” version of its cameras technology..",
        "url": "https://www.engadget.com/snapchat-camera-ar-updates-inclusive-175513510.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/0657c460-b98b-11eb-bdfb-f132712d3740",
        "publishedAt": "2021-05-20T17:55:13Z",
        "content": "Snapchat just unveiled some major upgrades to its in-app camera. The company showed off new interactive augmented reality features, announced partnerships with YouTube and other companies and preview… [+1677 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/mariella-moon",
        "title": "Google's first Street View EV is a Jaguar loaded with air quality sensors",
        "description": "Over the next twelve months, Jaguar I-Pace EVs outfitted with Google's Street View mapping technology will be driving around Dublin..",
        "url": "https://www.engadget.com/google-street-view-jaguar-air-quality-sensors-060901462.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-05/78bf1470-bdde-11eb-acff-afcf06f85594",
        "publishedAt": "2021-05-26T06:09:01Z",
        "content": "Over the next twelve months, Jaguar I-Pace EVs outfitted with Google's Street View mapping technology will be driving around Dublin. And they won't be collecting just Street View imagery they'll also… [+1706 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Gregory Barber",
        "title": "The Mayor of Reno Is Betting Big on the Blockchain",
        "description": "Hillary Schieve invests in cryptocurrencies herself, and she sees the technology as a way to improve government services.",
        "url": "https://www.wired.com/story/mayor-reno-betting-blockchain/",
        "urlToImage": "https://media.wired.com/photos/60b1373bc4c56a005b696871/191:100/w_1280,c_limit/Oped-Reno-Whale-Sculpture-1211167074.jpg",
        "publishedAt": "2021-06-01T12:00:00Z",
        "content": "Hillary Schieve, the mayor of Reno, Nevada, takes my arm before we jaywalk across the street from City Hall. She continues clutching it as we traverse the gritty public plaza on the other side, and d… [+3617 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "C. Brandon Ogbunu",
        "title": "STEM’s Racial Reckoning Just Entered Its Most Crucial Phase",
        "description": "One year after George Floyd’s murder, science and technology institutions continue to evolve. The most radical and necessary step remains.",
        "url": "https://www.wired.com/story/stems-racial-reckoning-just-entered-its-most-crucial-phase/",
        "urlToImage": "https://media.wired.com/photos/60ac3c95f83409ce52d3c684/191:100/w_1280,c_limit/ideas-george-floyd.jpg",
        "publishedAt": "2021-05-25T12:00:00Z",
        "content": "Make no mistakethe resources phase is critical. When done correctly, resources (especially financial) provide the infrastructure necessary to address long-standing problems. That is, resources arent … [+4000 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Rebecca Bellan",
        "title": "Nvidia acquires hi-def mapping startup DeepMap to bolster AV technology",
        "description": "Chipmaker Nvidia is acquiring DeepMap, the high-definition mapping startup announced. The company said its mapping IP will help Nvidia’s autonomous vehicle technology sector, Nvidia Drive. “The acquisition is an endorsement of DeepMap’s unique vision, technol…",
        "url": "http://techcrunch.com/2021/06/10/nvidia-acquires-hi-def-mapping-startup-deepmap-to-bolster-av-technology/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-10-at-2.54.41-PM.png?w=731",
        "publishedAt": "2021-06-10T23:52:23Z",
        "content": "Chipmaker Nvidia is acquiring DeepMap, the high-definition mapping startup announced. The company said its mapping IP will help Nvidia’s autonomous vehicle technology sector, Nvidia Drive.\r\nThe acqui… [+1278 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Kirsten Korosec",
        "title": "AI pioneer Raquel Urtasun launches self-driving technology startup with backing from Khosla, Uber and Aurora",
        "description": "One of the lingering mysteries from Uber’s sale of its Uber ATG self-driving unit to Aurora has been solved. Raquel Urtasun, the AI pioneer who was the chief scientist at Uber ATG, has launched a new startup called Waabi that is taking what she describes as a…",
        "url": "http://techcrunch.com/2021/06/08/ai-pioneer-raquel-urtasun-launches-self-driving-vehicle-startup-with-backing-from-khosla-uber-and-aurora/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Raquel_Urtasun_Portrait_horizontal-copy.jpg?w=600",
        "publishedAt": "2021-06-08T10:00:13Z",
        "content": "One of the lingering mysteries from Uber’s sale of its Uber ATG self-driving unit to Aurora has been solved.\r\nRaquel Urtasun, the AI pioneer who was the chief scientist at Uber ATG, has launched a ne… [+4457 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Will Knight",
        "title": "Covid Brings Automation to the Workplace, Killing Some Jobs",
        "description": "Unable to find enough workers, employers are turning to technology to perform tasks—and women are likely to be the hardest hit.",
        "url": "https://www.wired.com/story/covid-brings-automation-workplace-killing-some-jobs/",
        "urlToImage": "https://media.wired.com/photos/60b8046a41e613255aec164c/191:100/w_1280,c_limit/GettyImages-1230947770.jpg",
        "publishedAt": "2021-06-07T11:00:00Z",
        "content": "Lees Famous Recipe Chicken, a fast-food chain in Ohio, hardly seems an obvious venue for cutting-edge artificial intelligence. But the companys drive-thrus are showcasing technology that reveals how … [+4232 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Ingrid Lunden",
        "title": "AnyClip snaps up $47M for its video search and analytics technology",
        "description": "Video is, quite literally, what gets the world moving online these days, expected to account for 82% of all IP traffic this year. Today a startup that has built a set of tools to help better parse, index and ultimately discover that trove of content is announ…",
        "url": "http://techcrunch.com/2021/05/25/anyclip-snaps-up-47m-for-its-video-search-and-analytics-technology/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/anyclip-in-action.jpg?w=764",
        "publishedAt": "2021-05-25T07:08:44Z",
        "content": "Video is, quite literally, what gets the world moving online these days, expected to account for 82% of all IP traffic this year. Today a startup that has built a set of tools to help better parse, i… [+6326 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Chaim Gartenberg",
        "title": "Anker’s second-generation Nano II GaN chargers are even smaller than before",
        "description": "Anker’s new second-generation Nano II GaN chargers use the company’s latest gallium nitride technology for even more efficient charging in a smaller size.",
        "url": "https://www.theverge.com/2021/5/24/22450999/anker-second-generation-nano-ii-gan-chargers-smaller",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/e-CSfdrm8I5SyNjq7tTwZzYtTwc=/0x65:1877x1048/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22536111/Untitled.jpg",
        "publishedAt": "2021-05-24T16:00:00Z",
        "content": "Image: Anker\r\n\n \n\n Anker’s GaN (gallium nitride) chargers are some of the best around, offering tiny sizes but powerful charging capabilities. Now, the company is introducing its second-generation Ga… [+1771 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Ram Iyer",
        "title": "What SOSV’s Climate Tech 100 tells founders about investors in the space",
        "description": "Who's investing in technology and startups that promise better human and planetary health? Here's a definitive who's-who of top climate tech VCs, angels and more.",
        "url": "http://techcrunch.com/2021/06/10/what-sosvs-climate-tech-100-tells-founders-about-investors-in-the-space/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1159835038.jpg?w=711",
        "publishedAt": "2021-06-10T16:51:17Z",
        "content": "More posts by this contributor\r\nOn Earth Day, April 22, SOSV published the SOSV Climate Tech 100, a list of the best startups that weve supported from their earliest stages to address climate change.… [+1957 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Annie Siebert",
        "title": "For vehicle safety, the future is now",
        "description": "Congress has an opportunity to help build public trust in the safety of driverless technology by requiring existing innovations that will be the building blocks of driverless vehicles.",
        "url": "http://techcrunch.com/2021/06/14/for-vehicle-safety-the-future-is-now/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-1300574373.jpg?w=600",
        "publishedAt": "2021-06-14T20:00:22Z",
        "content": "Every day in the United States, more than 100 people die because of a car crash. Some are teenagers, like the daughter of writer Michael Lewis and Tabitha Soren, and her boyfriend, who died in a wron… [+8036 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Lifehacker.com"
        },
        "author": "Sam Blum",
        "title": "How to Know an 'Entry Level' Job Is BS",
        "description": "Much like Millennials who graduated college in the Great Recession, the class of 2021 faces grim prospects in the job market (it’s still improved remarkably from last year’s COVID-stricken market, however). Or at least that’s how they feel, according to a new…",
        "url": "https://lifehacker.com/if-you-arent-qualified-for-their-entry-level-job-you-d-1846976334",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/02d5932d881005084717e07baf43eda1.jpg",
        "publishedAt": "2021-05-26T21:30:00Z",
        "content": "Much like Millennials who graduated college in the Great Recession, the class of 2021 faces grim prospects in the job market (its still improved remarkably from last years COVID-stricken market, howe… [+3547 chars]"
    },
    {
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Ram Iyer",
        "title": "The hidden benefits of adding a CTO to your board",
        "description": "Not only do CTOs understand the ever-changing tech landscape, they also provide insights to help organizations to go beyond traditional IT conversations and leverage technology to scale businesses.",
        "url": "http://techcrunch.com/2021/06/07/the-hidden-benefits-of-adding-a-cto-to-your-board/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-607969437.jpg?w=711",
        "publishedAt": "2021-06-07T19:35:53Z",
        "content": "The pandemic forced companies around the world to adjust to a “new normal,” which caused many leaders to pivot their business strategies and adopt new technologies to continue operations. In a time o… [+2068 chars]"
    }
]

export default function NewsPage(props: any) {
    const classes = useStyles();
    const [news, setNews] = useState(lnews)

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
