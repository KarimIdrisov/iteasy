import React from 'react';
import Layout from "../components/Layout";
import { Link } from 'react-router-dom'

export default function MainPage() {

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
