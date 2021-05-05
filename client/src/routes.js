import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import TermsPage from "./pages/TermsPage";
import NewsPage from "./pages/NewsPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <MainPage/>
            </Route>
            <Route path="/about">
                <AboutUsPage/>
            </Route>
            <Route path="/terms/:terms">
                <TermsPage/>
            </Route>
            <Route path="/news">
                <NewsPage/>
            </Route>
        </Switch>
    )
}
