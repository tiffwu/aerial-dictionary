// From https://github.com/zeit/next.js/tree/master/examples/with-apollo

import { ApolloClient } from 'apollo-client';
import fetch from 'isomorphic-fetch'; // side-effect: sets global.fetch
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

let apolloClient = null;

/**
 * Always creates a new Apollo client on the server
 * Creates or reuses Apollo client in the browser.
 *
 * @param  {Object} initialState
 */
function initApollo(initialState?) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
}

/**
 * Creates and configures the Apollo client
 *
 * @param  {Object} [initialState={}]
 */
function createClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}

export default initApollo;
