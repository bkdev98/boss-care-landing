import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';
import Box from '@quocs/common/src/components/Box';

import { PhoneImg, Images } from './styled.components';

import phoneImg from '../../assets/Phones.png';
import phoneImg2x from '../../assets/Phones@2x.png';
import DownloadFrom from '../../components/DownloadFrom';
import Liquid from '../../components/Liquids/A';

import data from '../../data';

const Welcome = ({
  WrapperProps,
  ContainerProps,
  ImagesWrapperProps,
  ImagesProps,
  CaptionProps,
  TitleProps,
  TextProps,
  PhoneImgProps,
  LiquidProps,
  title,
  text,
  name,
  LiquidComponent,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps} name={name}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
        <Box flexBox mt={4}>
          <Fade left duration={600} delay={100} distance="30px">
            <DownloadFrom.AppStore mr={2} />
          </Fade>
          <Fade right duration={600} delay={100} distance="30px">
            <DownloadFrom.GooglePlay />
          </Fade>
        </Box>
      </Box>

      <Box {...ImagesWrapperProps}>
        <Images {...ImagesProps}>
          <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
            <LiquidComponent {...LiquidProps} />
            <PhoneImg {...PhoneImgProps} />
          </Reveal>
        </Images>
      </Box>
    </Container>
  </Box>
);

Welcome.propTypes = {
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
   * Component container props
   * @See @quocs/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Wrapper for header image and liquid in background
   * @See @quocs/common/src/components/Box
   */
  ImagesWrapperProps: PropTypes.object,
  /**
   * Images container which can be used for determine percentage size of images
   * @See @quocs/common/src/components/Box
   */
  ImagesProps: PropTypes.object,
  /**
   * Caption props
   * @See @quocs/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
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
   * Props of image with phones (main image)
   * @See @quocs/common/src/components/Img
   */
  PhoneImgProps: PropTypes.object,
  /**
   * Props with liquid in background
   */
  LiquidProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Liquid component in background
   */
  LiquidComponent: PropTypes.elementType,
};

Welcome.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    marginBottom: {
      _: -110,
      lg: -140,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    marginBottom: {
      _: 140,
      lg: 200,
    },
  },
  ImagesWrapperProps: {
    alignSelf: 'stretch',
    position: 'relative',
    width: '100%',
    zIndex: -1,
  },
  ImagesProps: {
    paddingTop: '120.3592814371%',
  },
  CaptionProps: {
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'center',
    pt: 3,
    pb: {
      _: 3,
      lg: 5,
    },
    flex: {
      _: '0 0 1',
      lg: `0 0 470px`,
    },
    height: '100%',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h1',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  PhoneImgProps: {
    src: phoneImg,
    srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
    alt: data.title,
    top: `-17%`,
    left: `-72%`,
    width: `242.5149700599%`,
  },
  LiquidProps: {
    position: 'absolute',
    top: '12px',
    left: '-40px',
    zIndex: 1,
    width: '119.7604790419%',
  },
  LiquidComponent: Liquid,
  ...data.welcome,
};

export default Welcome;
