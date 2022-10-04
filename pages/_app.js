import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>MARA</title>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}

export default MyApp;
