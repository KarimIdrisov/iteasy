import React, {MouseEventHandler, useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import {useHttp} from "../hooks/http.hooks";
import TermCard from "../components/TermCard";
import MainTermCard from "../components/MainTermCard";
import {Link} from "react-router-dom";
import getTerm from "../utils/getTerm";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#080f19',
        height: '90.6vh',
    },
    left: {},
    main: {
        fontSize: '2.5rem',
    },
    right: {}
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
        console.log(getTerm(terms, current?.relatedWordsId.split(',')[0]))
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[0]))
    }

    function changeCurrentRight() {
        setCurrent(getTerm(terms, current?.relatedWordsId.split(',')[1]))
    }


    const fetchTerms = useCallback(async () => {
        try {
            const fetched = await request(`/api/term/`, 'GET', null, {})
            setTerms(fetched.terms)
            setCurrent(fetched.terms[0])
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchTerms()
    }, [fetchTerms, setTerms])

    if (loading) {
        return (
            <></>
        )
    }
    console.log(current)
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
        return <>Loading</>
    }
}
