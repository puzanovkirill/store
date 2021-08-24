import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useUser} from "../stores/UserStore";

const AppRouter = () => {
    const {userStore} = useContext(Context);
    const [user, setUser] = useUser();
    const isAuth = true;
    return (
            <Switch>
                {user && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )};
                <Redirect to={HOME_ROUTE}/>
            </Switch>
    );
};

export default AppRouter;