import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';

const Comp = () => <div>sisaas</div>;

export default ({ path }) => {
  return (
    <Router basename={path}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aa">
          <Comp />
        </Route>
      </Switch>
    </Router>
  );
};
