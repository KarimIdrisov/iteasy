import React, { useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import {useHttp} from "../hooks/http.hooks";
import TermCard from "../components/TermCard";
import MainTermCard from "../components/MainTermCard";
import getTerm from "../utils/getTerm";
import '../static/style.css'
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#080f19',
        height: '90.6vh',
    },
    left: {},
    main: {
        fontSize: '2.5rem',
    },
    right: {},
    lefta: {
        width: 30,
        height: 30,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: '50%',

    },
    minimain: {
        fontSize: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    nav: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        borderRadius: '3px',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,

    }
}));

interface Term {
    name: string,
    description: string,
    id: string,
    url: string,
    relatedWords: string,
    relatedWordsId: string
}

const terms_local = [
    {
        "name": "Artificial Intellegence",
        "description": "Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality.",
        "relatedWords": "Machine Learning, Human Mind",
        "relatedWordsId": "ml,hm",
        "id": "ai",
        "url": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1138781799%2F0x0.jpg%3FcropX1%3D28%26cropX2%3D7436%26cropY1%3D0%26cropY2%3D4166"
    },
    {
        "name": "Machine Learning",
        "description": "Machine learning (ML) is the study of computer algorithms that improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence.",
        "relatedWords": "Artificial Intellegence, Algorithms",
        "relatedWordsId": "ai,alg",
        "id": "ml",
        "url": "https://blog.bismart.com/hubfs/20190903-MachineLearning.jpg"
    },
    {
        "name": "Algorithms",
        "description": "In mathematics and computer science, an algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.",
        "relatedWords": "Machine Learning, Computer Science",
        "relatedWordsId": "ml,compscience",
        "id": "alg",
        "url": "data:image/webp;base64,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"
    },
    {
        "name": "Computer science",
        "description": "Computer science is the study of algorithmic processes, computational machines and computation itself. As a discipline, computer science spans a range of topics from theoretical studies of algorithms, computation and information to the practical issues of implementing computational systems in hardware and software.",
        "relatedWords": "Automata theory, Algorithms",
        "relatedWordsId": "auttheory,alg",
        "id": "compscience",
        "url": "https://habrastorage.org/webt/xr/rr/tc/xrrrtcstkcrk4nn3c4pslfkie8e.png"
    },
    {
        "name": "Mathematics",
        "description": "Mathematics includes the study of such topics as quantity (number theory), structure (algebra), space (geometry), and change (analysis). It has no generally accepted definition.",
        "relatedWords": "Computer Science, Algorithms",
        "relatedWordsId": "compscince,alg",
        "id": "math",
        "url": "https://cdn.cdnparenting.com/articles/2020/11/01194956/1588916176.jpg"
    },
    {
        "name": "Human Mind",
        "description": "The mind is the set of faculties including cognitive aspects such as consciousness, imagination, perception, thinking, intelligence, judgement, language and memory, as well as noncognitive aspects such as emotion and instinct. ",
        "relatedWords": "Artificial Intelligence",
        "relatedWordsId": "ai,math",
        "id": "hm",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Phrenology1.jpg/300px-Phrenology1.jpg"
    },
    {
        "name": "Automata theory",
        "description": "Automata theory is the study of abstract machines and automata, as well as the computational problems that can be solved using them. It is a theory in theoretical computer science. The word automata (the plural of automaton) comes from the Greek word αὐτόματα, which means \"self-making\".",
        "relatedWords": "Computer Science, Computational problem",
        "relatedWordsId": "compscience,comproblems",
        "id": "auttheory",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/450px-Automata_theory.svg.png"
    },
    {
        "name": "Computational problem",
        "description": "Computational problems are one of the main objects of study in theoretical computer science. The field of computational complexity theory attempts to determine the amount of resources (computational complexity) solving a given problem will require and explain why some problems are intractable or undecidable.",
        "relatedWords": "Computer Science, Computer",
        "relatedWordsId": "compscience,computer",
        "id": "comproblems",
        "url": ""
    },
    {
        "name": "Computer",
        "description": "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs.",
        "relatedWords": "Computational problem, Algorithms",
        "relatedWordsId": "comproblems, alg",
        "id": "computer",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/ThinkCentre_S50.jpg/255px-ThinkCentre_S50.jpg"
    }
]


export default function TermsPage(props: any) {
    const classes = useStyles()
    const {loading, request} = useHttp()
    const [terms, setTerms] = useState<Array<Term>>()
    const [current, setCurrent] = useState<Term>()

    function changeCurrentLeft() {
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[0]))
    }

    function changeCurrentRight() {
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[1]))
    }

    useEffect(() => {
        setTerms(terms_local)
        setCurrent(terms_local[0])
    }, [setTerms])

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


    if (loading) {
        return (
            <></>
        )
    }
    if (width < 800) {
        if (current !== undefined) {
            return (
                <div className={classes.root}>
                    <Layout>
                        <div className={clsx('max-w-full max-h-screen flex justify-center items-center', classes.root)}>

                            <div className={classes.minimain}>

                                <MainTermCard
                                    altImg="main image" header={current.name}
                                    img={current.url}
                                    desc={current.description}/>

                                <div className={classes.nav} onClick={changeCurrentLeft}>
                                    <Typography variant='h6'>{current.relatedWords.split(',')[0]}</Typography>

                                </div>

                                <div className={classes.nav} onClick={changeCurrentRight}>
                                    <Typography variant='h6'>{current.relatedWords.split(',')[1]}</Typography>
                                </div>

                            </div>


                        </div>
                    </Layout>
                </div>
            );
        } else {
            return (
                <>Loading</>
            )
        }
    } else {
        if (current !== undefined) {
            return (
                <div className={classes.root}>
                    <Layout>
                        <div className={clsx('max-w-full max-h-screen flex justify-center items-center', classes.root)}>

                            <div className={classes.left} onClick={changeCurrentLeft}>
                                <TermCard
                                    header={current.relatedWords.split(',')[0]}
                                    altImg="first related"
                                />
                            </div>
                            <div className={classes.main}>
                                <MainTermCard
                                    altImg="main image" header={current.name}
                                    img={current.url}
                                    desc={current.description}/>
                            </div>
                            <div className={classes.right} onClick={changeCurrentRight}>
                                <TermCard
                                    altImg="second related" header={current.relatedWords.split(',')[1]}
                                />
                            </div>
                        </div>
                    </Layout>
                </div>
            );
        } else {
            return (
                <>Loading</>
            )
        }
    }
}
