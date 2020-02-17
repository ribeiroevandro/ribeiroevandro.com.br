import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

// import { Container } from './styles';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: 'blue' }}>
            About
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
