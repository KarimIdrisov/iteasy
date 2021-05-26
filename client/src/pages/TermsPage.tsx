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
        backgroundColor: '#41B3A3',
        height: '90.6vh',
    },
    left: {},
    main: {},
    right: {}
}));

interface Term {
    name: string,
    description: string,
    id: string
}

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function TermsPage(props: any) {
    const classes = useStyles();
    const {loading, request} = useHttp()
    const [terms, setTerms] = useState<Term>()
    const [related, setRelated] = useState<Array<string>>()
    const [relatedId, setRelatedId] = useState<Array<string>>()

    const forceUpdate = useForceUpdate();

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
                        <Link to={`/terms/${relatedId ? relatedId[0] : ''}`} onClick={forceUpdate}>
                            <TermCard
                                img="https://www.plm.automation.siemens.com/media/global/ru/Artificial-Intelligence-AI-Automotive-AT_tcm52-91268.jpg"
                                altImg="Fusce viverra" header={related !== undefined ? related[0] : ''}
                                id={related !== undefined ? related[0] : ''}
                            />
                        </Link>
                    </div>
                    <div className={classes.main}>
                        <MainTermCard
                            img="data:image/jpeg;base64,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"
                            altImg="" header={terms !== undefined ? terms.name : ''}
                            desc={terms !== undefined ? terms.description : ''}/>
                    </div>
                    <div className={classes.right}>
                        <Link to={`/terms/${relatedId ? relatedId[1] : ''}`} onClick={forceUpdate}>
                            <TermCard
                                img="https://hmm.ucsb.edu/sites/default/files/sitefiles/main/Human-Mind-and-Migration-2-impactmania.png"
                                altImg="" header={related !== undefined ? related[1] : ''}
                                id={related !== undefined ? related[1] : ''}
                            />
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
