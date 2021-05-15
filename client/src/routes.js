import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import TermsPage from "./pages/TermsPage";
import NewsPage from "./pages/NewsPage";
import TrendsPage from "./pages/TrendsPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/about">
                <AboutUsPage/>
            </Route>
            <Route path="/terms/">
                <TermsPage/>
            </Route>
            <Route path="/news">
                <NewsPage/>
            </Route>
            <Route path="/trends">
                <TrendsPage/>
            </Route>
            <Route path="/">
                <MainPage/>
            </Route>
        </Switch>
    )
}
