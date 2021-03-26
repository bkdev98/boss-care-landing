import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@quocs/themes/src/boss-care';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  About,
  Features,
  Screenshots,
  Clients,
  FAQ,
  Pricing,
  Contact,
} from '@quocs/themes/src/boss-care/containers';

import preview from '@quocs/themes/src/boss-care/assets/preview.png';

import SEO from '../components/SEO';

const Landing1 = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Home" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>
    <Welcome name="" />
    <About name="about" />
    <Features name="features" />
    <Screenshots name="screens" />
    <Clients name="clients" />
    <FAQ name="support" />
    <Pricing name="pricing" />
    <Contact name="contact" />

    <Footer />
    <Copyright />
  </Theme>
);

Landing1.propTypes = {
  url: PropTypes.string,
};

Landing1.defaultProps = {
  url: 'https://bosscare.quocs.com',
};

export default Landing1;
