import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Box from '@quocs/common/src/components/Box';
import Button from '@quocs/common/src/components/Button';
import Container from '@quocs/common/src/components/Container';
import Card from '@quocs/common/src/components/Card';
import Typography from '@quocs/common/src/components/Typography';
import Input from '@quocs/common/src/components/Input';

import data from '../../data';
import Liquid from '../../components/Liquids/B';

const Newsletter = ({
  WrapperProps,
  ContainerProps,
  LiquidProps,
  CardProps,
  TitleProps,
  TextProps,
  InputProps,
  ButtonProps,
  name,
  title,
  text,
  buttonText,
  inputPlaceholder,
  LiquidComponent,
}) => (
  <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
    <Box {...WrapperProps} name={name}>
      <Container {...ContainerProps}>
        <LiquidComponent {...LiquidProps} />
        <Card {...CardProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
            <Input
              name="email"
              {...InputProps}
              placeholder={inputPlaceholder}
              suffix={(
                <Button variant="primary" {...ButtonProps}>
                  {buttonText}
                </Button>
              )}
            />
          </Fade>
        </Card>
      </Container>
    </Box>
  </Reveal>
);

Newsletter.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Component container props
   * @See @quocs/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Props with liquid in background
   */
  LiquidProps: PropTypes.object,
  /**
   * Props for card wrapper
   */
  CardProps: PropTypes.object,
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
   * Input email props
   * @See @quocs/common/src/components/Input
   */
  InputProps: PropTypes.object,
  /**
   * Send button props
   * @See @quocs/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Email input placeholder
   */
  inputPlaceholder: PropTypes.string,
  /**
   * Text for button in form
   */
  buttonText: PropTypes.node,
  /**
   * Liquid component in background
   */
  LiquidComponent: PropTypes.elementType,
};

Newsletter.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    py: {
      _: 60,
      lg: 150,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: {
      _: 0,
      lg: 148,
    },
    pb: {
      _: 0,
      lg: 163,
    },
  },
  LiquidProps: {
    position: 'absolute',
    maxWidth: {
      _: 'none',
      lg: 770,
    },
    width: {
      _: '130%',
      lg: '100%',
    },
    zIndex: -1,
    transform: 'scale(1, -1)',
  },
  CardProps: {
    borderRadius: {
      _: 30,
      lg: 90,
    },
    p: {
      _: 30,
      lg: 60,
    },
    width: '100%',
    maxWidth: 570,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: 2,
  },
  TextProps: {
    variant: 'body2',
    color: 'gray.1',
  },
  InputProps: {
    WrapperProps: {
      mt: 4,
    },
    InputWrapperProps: {
      borderRadius: 30,
    },
  },
  ButtonProps: {
    m: '4px',
  },
  LiquidComponent: Liquid,
  ...data.newsletter,
};

export default Newsletter;
