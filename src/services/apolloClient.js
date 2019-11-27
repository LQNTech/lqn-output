import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_ENDPOINT,
  request: operation => {
    const token = JSON.parse(
      JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_SLOT))
    );
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : ''
      }
    });
  }
});

export default client;
