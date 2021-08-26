import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import { useUser } from '../stores/UserStore';

const AppRouter = () => {
  const [user] = useUser();
  return (
    <Switch>
      {user &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      ;
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      ;
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
