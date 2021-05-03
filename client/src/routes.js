import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <MainPage/>
            </Route>
        </Switch>
    )
}
