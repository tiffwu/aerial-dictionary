import React from 'react';
import NextApp from 'next/app';
import '~/styles/main.scss';
import withApollo from '~/lib/hocs/withApollo';

/**
 * Next.js uses the App component to initialize pages. You can override it and
 * control the page initialization. Which allows you to do amazing things like:
 *
 *   - Persisting layout between page changes
 *   - Keeping state when navigating pages
 *   - Custom error handling using componentDidCatch
 *   - Inject additional data into pages (for example by processing GraphQL
 *     queries)
 */

function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default withApollo(App);
