import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class Router extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        {renderRoutes(this.props.children, this.props.authenticated)}
      </BrowserRouter>
    );
  }
}

function renderRoutes(children, auth, baseUrl = '') {
  return (
    <Fragment>
      {children}
      <Switch>
        {(children.type.routes || []).map((route, index) => {
          const path = baseUrl + route.path;
          let CompEl = React.createElement(route.component);
          let Component = CompEl.type.routes && CompEl.type.routes.length ? renderRoutes(CompEl, auth, path) : CompEl;
          
          return (
            <Route
              key={index}
              path={path}
              exact={route.exact}
              render={() => handleAuthentication(Component, route, auth)}
            />
          );
        })}
      </Switch>
    </Fragment>
  );
}

function handleAuthentication(Component, route, auth) {
  if(!route.allowAnonymous) {
    const isAuthenticated = auth === (route.authenticWhen === undefined && true);

    if(isAuthenticated) {
      return Component;
    } else {
      return <Redirect from={route.path} to={route.redirect || '/'} />
    }
  }
  
  return Component;
}