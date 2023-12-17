// index.js

import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to Our Website</h1>
        <p>
          Explore our interactive maps, designed for an intuitive user
          experience.
        </p>
        <p>
          Learn more about us on the <a href="/about">about page</a> or
          <a href="/contact">contact us</a> if you have any questions.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
