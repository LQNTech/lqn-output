import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { Theme } from 'lqn-components';

import client from './services/apolloClient';
import App from './containers/App/App';

const WrappedApp = ({ match: { path }, history }) => {
  const params = new URLSearchParams(global.location.search);
  const leadCode = params.get('leadCode');

  if (!leadCode) history.push('/?redirect=/output');

  return (
    <ApolloProvider client={client}>
      <Theme>
        <App path={path} />
      </Theme>
    </ApolloProvider>
  );
};

export default WrappedApp;
