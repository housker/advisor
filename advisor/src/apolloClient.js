import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: '<HASURA_CONSOLE_URL>'
});

export default apolloClient;