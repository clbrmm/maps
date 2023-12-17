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
          <Link href="/about">
            <a>about page</a>
          </Link>{' '}
          or{' '}
          Maps{' '}
          <Link href="/maps">
            <a>maps page</a>
          </Link>{' '}
          <Link href="/contact">
            <a>contact us</a>
          </Link>{' '}
          if you have any questions.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
