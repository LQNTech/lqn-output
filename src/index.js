import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { Theme } from 'lqn-components';

import client from './services/apolloClient';
import App from './containers/App/App';

const WrappedApp = ({ match: { path }, ...props }) => {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <App path={path} {...props} />
      </Theme>
    </ApolloProvider>
  );
};

export default WrappedApp;
