// about.js

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>  
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our about page. We are passionate about creating amazing
          maps for websites using Next.js.
        </p>
        <p>
          Learn more about our <Link href='/contact'> contact information</Link>.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
