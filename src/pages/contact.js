// contact.js

import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <h1>Contact Us</h1>
        <p>
          Need to get in touch with us? Fill out the form below, and we'll get
          back to you as soon as possible.
        </p>

        {/* Exemplo básico de formulário de contato */}
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
