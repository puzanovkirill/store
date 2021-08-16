import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/*user authorization check */ authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
            </Switch>
            <Redirect to={HOME_ROUTE}/>
        </BrowserRouter>
    );
};

export default AppRouter;