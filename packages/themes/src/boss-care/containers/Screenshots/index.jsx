import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@quocs/common/src/components/Box';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';

import { Img, ImgSlider } from './styled.components';

import data from '../../data';

const Screenshots = ({
  WrapperProps,
  CaptionProps,
  TitleProps,
  SliderProps,
  TextProps,
  ImgProps,
  name,
  title,
  text,
  images,
}) => (
  <Box {...WrapperProps} name={name}>
    <Container>
      <Box {...CaptionProps}>
        <Fade cascade bottom duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
    </Container>
    <Fade duration={600}>
      <ImgSlider {...SliderProps}>
        {slider => {
          return images.map((img, key) => (
            <Img {...ImgProps} key={key} onClick={() => slider.current.slickGoTo(key)} {...img} />
          ));
        }}
      </ImgSlider>
    </Fade>
  </Box>
);

Screenshots.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption props
   * @See @quocs/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Props of slider component
   * @See @quocs/common/src/components/Slider
   */
  SliderProps: PropTypes.object,
  /**
   * Title text props
   * @See @quocs/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @quocs/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Single image / slide props
   * @See @quocs/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of images used for slides
   */
  images: PropTypes.array,
};

Screenshots.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  CaptionProps: {
    textAlign: {
      _: 'left',
      lg: 'center',
    },
    mb: 4,
    maxWidth: 770,
    mx: 'auto',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  SliderProps: {
    options: {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      slidesToScroll: 1,
    },
  },
  ImgProps: {
    width: {
      _: '256px !important',
      lg: '375px !important',
    },
    mb: 60,
    mx: -20,
    borderRadius: 15,
  },
  ...data.screenshots,
};

export default Screenshots;
