import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './services/apolloClient';
import App from './containers/App/App';

const WrappedApp = ({ match: { path } }) => {
  return (
    <ApolloProvider client={client}>
      <App path={path} />
    </ApolloProvider>
  );
};

export default WrappedApp;
