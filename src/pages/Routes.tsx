import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Links from './Links';
import Experience from './Experience';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/links" component={Links} />
    <Route exact path="/cv" component={Experience} />
  </Switch>
);

export default Routes;
