import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout";
import clsx from "clsx";
import {useHttp} from "../hooks/http.hooks";
import TermCard from "../components/TermCard";
import MainTermCard from "../components/MainTermCard";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#080f19',
        height: '90.6vh',
    },
    left: {},
    main: {},
    right: {}
}));

interface Term {
    name: string,
    description: string,
    id: string,
    url: string
}

export default function TermsPage(props: any) {
    const classes = useStyles()
    const {loading, request} = useHttp()
    const [terms, setTerms] = useState<Term>()
    const [related, setRelated] = useState<Array<string>>()
    const [relatedId, setRelatedId] = useState<Array<string>>()

    const fetchTerms = useCallback(async () => {
        if (props.match.params.id !== undefined) {
            try {
                const fetched = await request(`/api/term/getId/?id=${props.match.params.id}`, 'GET', null, {})
                setTerms(fetched.term)
                setRelated(fetched.related)
                setRelatedId(fetched.term.relatedWordsId.split(','))
            } catch (e) {}
        } else {}
    }, [request])

    useEffect(() => {
        fetchTerms()
    }, [fetchTerms, setTerms])

    if (loading) {
        return (
            <></>
        )
    }
    return (
        <div className={classes.root}>
            <Layout>
                <div className={clsx('max-w-full max-h-screen flex justify-center items-center', classes.root)}>
                    <div className={classes.left}>
                        <Link to={`/terms/${relatedId ? relatedId[0] : ''}`}>
                            <TermCard
                                altImg="first related" header={related !== undefined ? related[0] : ''}
                                id={related !== undefined ? related[0] : ''}
                            />
                        </Link>
                    </div>
                    <div className={classes.main}>
                        <MainTermCard
                            img={terms !== undefined ? terms.url : ''}
                            altImg="main image" header={terms !== undefined ? terms.name : ''}
                            desc={terms !== undefined ? terms.description : ''}/>
                    </div>
                    <div className={classes.right}>
                        <Link to={`/terms/${relatedId ? relatedId[1] : ''}`}>
                            <TermCard
                                altImg="second related" header={related !== undefined ? related[1] : ''}
                                id={related !== undefined ? related[1] : ''}
                            />
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
