import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@quocs/common/src/components/Box';
import Icon from '@quocs/common/src/components/Icon';
import Img from '@quocs/common/src/components/Img';
import Grid from '@quocs/common/src/components/Grid';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';
import Card from '@quocs/common/src/components/Card';

import data from '../../data';

const About = ({
  name,
  title,
  text,
  features,
  WrapperProps,
  CaptionProps,
  TitleProps,
  TextProps,
  FeaturesGridProps,
  CardProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Grid {...FeaturesGridProps}>
        {features?.map((feature, key) => (
          <Fade bottom duration={600} key={feature.id} delay={key * 100}>
            <Card {...CardProps}>
              {feature.IconProps && <Icon {...CardProps.IconProps} {...feature.IconProps} />}
              {feature.ImgProps && <Img {...CardProps.ImgProps} {...feature.ImgProps} />}
              <Typography {...CardProps.TitleProps}>{feature.title}</Typography>
              <Typography {...CardProps.TextProps}>{feature.text}</Typography>
            </Card>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
);

About.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * Main content
   */
  text: PropTypes.node,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @quocs/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  /**
   * Main wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @quocs/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @quocs/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main content text props
   * @See @quocs/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Features component grid props
   * @See @quocs/common/src/components/Grid
   */
  FeaturesGridProps: PropTypes.object,
  /**
   * Object with feature card specified props
   */
  CardProps: PropTypes.shape({
    /**
     * Title text props
     * @See @quocs/common/src/components/Typography
     */
    TitleProps: PropTypes.object,
    /**
     * Object with props for Icon component.
     * @See @quocs/common/src/components/Icon
     */
    IconProps: PropTypes.object,
    /**
     * Future description text props
     * @See @quocs/common/src/components/Typography
     */
    TextProps: PropTypes.object,
  }),
};

About.defaultProps = {
  ...data.about,
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: {
      _: 'left',
      md: 'center',
    },
    mb: {
      _: 4,
      lg: 5,
    },
  },
  TitleProps: {
    variant: 'h2',
    as: 'h2',
    mb: 3,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  FeaturesGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
  },
  CardProps: {
    textAlign: 'center',
    IconProps: {
      fontSize: 48,
    },
    TitleProps: {
      as: 'h4',
      variant: 'h4',
      mt: 4,
      mb: 3,
    },
    TextProps: {
      color: 'gray.1',
    },
  },
};

export default About;
