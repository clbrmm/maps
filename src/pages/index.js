// src/pages/index.js

import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout pageTitle="Welcome to Our Website">
      <div>
        <h1>Welcome to Our Website</h1>
        <p>
          Explore our interactive maps, designed for an intuitive user
          experience.
        </p>
        <p>
          Learn more about us on the{' '}
          <Link about>
            <a id="link">about page</a>
          </Link>{' '}
          or{' '}
          Maps{' '}
          <Link maps>
            <a id="link" >maps page</a>
          </Link>{' '}
          <Link contact>
            <a id="link" >contact us</a>
          </Link>{' '}
          if you have any questions.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
