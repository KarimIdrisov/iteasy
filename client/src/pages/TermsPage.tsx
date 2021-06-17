import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import {useHttp} from "../hooks/http.hooks";
import TermCard from "../components/TermCard";
import MainTermCard from "../components/MainTermCard";
import getTerm from "../utils/getTerm";
import '../static/style.css'
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#080f19',
        height: '90.6vh',
    },
    left: {

    },
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

export default function TermsPage(props: any) {
    const classes = useStyles()
    const {loading, request} = useHttp()
    const [terms, setTerms] = useState<Term>()
    const [current, setCurrent] = useState<Term>()

    function changeCurrentLeft() {
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[0]))
    }

    function changeCurrentRight() {
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[1]))
    }

    const fetchTerms = useCallback(async () => {
        try {
            const fetched = await request(`/api/term/getTerms`, 'GET', null, {})
            setTerms(fetched.terms)
            setCurrent(fetched.terms[0])
        } catch (e) {
        }
    }, [request])

    useEffect(() => {
        fetchTerms()
    }, [fetchTerms, setTerms])

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
