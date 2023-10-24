
const { createApolloFetch } = require('apollo-fetch');
const getConfig = require('../config');

const { getGraphqlConfig } = require('../config');

const { url, key } = getGraphqlConfig();

const fetch = createApolloFetch({
  uri: url,
});

fetch.use(({ options }, next) => {
    if (!options.headers) {
      options.headers = {};  // Create the headers object if needed.
    }
    options.headers['content-type'] = 'application/json';
    options.headers['x-hasura-admin-secret'] = key;
  
    next();
  });

const insertStocksData = async (payload) => {
    console.log('payload', payload)
  const insertStockMutation = await fetch({
    query: `mutation insertStockData($objects: [stock_data_insert_input!]!) {
      insert_stock_data (objects: $objects) {
        returning {
          id
        }
      }
    }`,
    variables: {
      objects: payload,
    },
  });
  console.log('insertStockMutation', insertStockMutation);
};

module.exports = {
  insertStocksData
}