import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

export default function MainPage(props: any) {

    return (
        <Layout page="Home">
            <main className="main">
                <div className="container">
                    <h1 className="main__title">
                        Science portal
                    </h1>
                    <h2 className="main__subtitle">
                        Make technical world
                        a little bit closer to you
                    </h2>
                    <h3 className="main__subsubtitle">
                        Do you want to know what that overcomplicated
                        scientifically oriented terms are meaning?
                        We will have an answer for you!
                    </h3>

                    <Link className="main__more-button" to="/terms">Learn more</Link>
                </div>
            </main>
        </Layout>
    );
}
