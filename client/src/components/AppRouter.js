import React, {useContext} from 'react';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {userStore} = useContext(Context);
    return (
        <BrowserRouter>
            <Switch>
                {userStore.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
            </Switch>
            <Redirect to={LOGIN_ROUTE}/>
        </BrowserRouter>
    );
};

export default AppRouter;