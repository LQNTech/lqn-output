import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Documents from '../Documents/Documents';

import GlobalStyles from '../../globalStyles';
import Header from '../../components/Header/Header';
import { Container } from './appStyles';

export default ({ path }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header href="/output" />
      <Container>
        <Router basename={path}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
};
