import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/Layout";
import InfoSlider from "../components/InfoSlider";

const useStyles = makeStyles((theme) => ({

}));

export default function MainPage(props: any) {
    const classes = useStyles();
    return (
        <div>
            <Layout>
                <div className={'container bg-green-500 max-w-full max-h-screen'}>
                    <InfoSlider/>
                </div>
            </Layout>
        </div>
    );
}
