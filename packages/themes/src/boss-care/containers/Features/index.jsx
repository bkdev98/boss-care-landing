import React from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

import Feature from './Feature';

import data from '../../data';

const Features = ({ name, features }) => (
  <Element name={name}>
    {features.map((feature, i) => (
      <Feature {...feature} key={i} />
    ))}
  </Element>
);

Features.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(PropTypes.object),
};

Features.defaultProps = {
  features: [
    {
      feature: data.features[0],
    },
    {
      feature: data.features[1],
      GridProps: {
        ...Feature.defaultProps.GridProps,
        gridTemplateAreas: {
          _: '"caption" "photo" "features"',
          lg: '"caption photo" "features photo"',
        },
        justifyContent: 'flex-end',
      },
      ImageProps: {
        position: 'relative',
        maxWidth: {
          _: '100%',
          lg: 'calc(100% + 80px)',
        },
        display: 'block',
      },
    },
    {
      useCards: true,
      feature: data.features[2],
      GridProps: {
        gridTemplateAreas: {
          _: '"caption" "features"',
          lg: '"caption features"',
        },
        gridColumnGap: '60px',
        gridTemplateColumns: {
          _: '1fr',
          lg: '340px auto',
        },
        alignItems: 'center',
      },
    },
  ],
};

export default Features;
