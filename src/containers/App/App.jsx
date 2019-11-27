import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import appQuery from './appQuery';

import { resolveNodes } from '../../services/Helper';

import Home from '../Home/Home';
import Documents from '../Documents/Documents';
import Collect from '../Collect/Collect';
import Success from '../Success/Success';

import GlobalStyles from '../../globalStyles';
import Header from '../../components/Header/Header';
import { Container } from './appStyles';

export default ({ path, history }) => {
  const params = new URLSearchParams(global.location.search);
  const leadCode = params.get('code');

  const { loading, data } = useQuery(appQuery, {
    variables: { code: leadCode }
  });
  if (loading) return null;

  const user = resolveNodes(data.me)[0];
  const documents = resolveNodes(data.allDocumentsLeadCredit);
  if (!user || !documents) history.push('/');

  return (
    <Router basename={path}>
      <GlobalStyles />
      <Header href={path} user={user} />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home user={user} documents={documents} />
          </Route>
          <Route path="/documents">
            <Documents leadCode={leadCode} />
          </Route>
          <Route path="/collect">
            <Collect />
          </Route>
          <Route path="/success">
            <Success leadCode={leadCode} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
