import React from 'react';
import PropTypes from 'prop-types';

import Box from '@quocs/common/src/components/Box';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';

import data from '../../data';

const Copyright = ({ copyright, WrapperProps, TextProps }) => (
  <Box {...WrapperProps}>
    <Container>
      <Typography {...TextProps}>{copyright}</Typography>
    </Container>
  </Box>
);

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Main content text props
   * @See @quocs/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
};

Copyright.defaultProps = {
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    textAlign: 'center',
    color: 'gray.1',
  },
  WrapperProps: {
    py: 4,
    backgroundColor: 'gray.5',
  },
};

export default Copyright;
