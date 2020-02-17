import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

// import { Container } from './styles';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: 'red' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Layout>
  );
}
