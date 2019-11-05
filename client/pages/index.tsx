import React from 'react';
import Home from '../routes/Home';
import withApollo from '~/lib/hocs/withApollo';

function Index() {
  return <Home />;
}

export default withApollo(Index);
