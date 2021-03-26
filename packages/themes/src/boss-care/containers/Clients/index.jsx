import React from 'react';
import PropTypes from 'prop-types';

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import Box from '@quocs/common/src/components/Box';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';
import Slider from '@quocs/common/src/components/Slider';

import data from '../../data';

import Avatar from '../../components/Avatar';
import Liquid from '../../components/Liquids/B';

const Clients = ({
  name,
  title,
  comments,
  WrapperProps,
  InnerProps,
  TitleProps,
  SliderProps,
  SlideProps,
  QuoteProps,
  QuoteAuthorProps,
  AvatarProps,
  LiquidProps,
}) => (
  <Box {...WrapperProps} name={name}>
    <Container>
      <Box {...InnerProps}>
        <Box {...LiquidProps}>
          <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
            <Liquid width={614} height={500} />
          </Reveal>
        </Box>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Slider {...SliderProps}>
            {comments?.map((comment, key) => (
              <div key={key}>
                <Box {...SlideProps}>
                  <Avatar {...AvatarProps} {...comment.AvatarProps} />
                  <div>
                    <Typography {...QuoteProps}>{comment.text}</Typography>
                    <Typography {...QuoteAuthorProps}>{comment.author}</Typography>
                  </div>
                </Box>
              </div>
            ))}
          </Slider>
        </Fade>
      </Box>
    </Container>
  </Box>
);

Clients.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * List of client comments
   */
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Author of the comment
       */
      author: PropTypes.node,
      /**
       * Comment text
       */
      text: PropTypes.node,
      /**
       * Object with props for Avatar component.
       * @See @quocs/common/src/components/Avatar
       */
      AvatarProps: PropTypes.object,
    }),
  ),
  /**
   * Main wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Inner box props
   * @See @quocs/common/src/components/Box
   */
  InnerProps: PropTypes.object,
  /**
   * Title text props
   * @See @quocs/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Slider component props
   * @See @quocs/common/src/components/Slider
   */
  SliderProps: PropTypes.object,
  /**
   * Single slide box props
   * @See @quocs/common/src/components/Box
   */
  SlideProps: PropTypes.object,
  /**
   * Comment content text props
   * @See @quocs/common/src/components/Typography
   */
  QuoteProps: PropTypes.object,
  /**
   * Author text props
   * @See @quocs/common/src/components/Typography
   */
  QuoteAuthorProps: PropTypes.object,
  /**
   * Object with props for Avatar component.
   * @See @quocs/common/src/components/Avatar
   */
  AvatarProps: PropTypes.object,
  /**
   * Object with props for Liquid component.
   */
  LiquidProps: PropTypes.object,
};

Clients.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 80,
    },
  },
  InnerProps: {
    position: 'relative',
    ml: {
      _: 0,
      lg: 400,
    },
    my: {
      _: 0,
      lg: 100,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: {
      _: 30,
      lg: 60,
    },
  },
  SliderProps: {
    options: {
      dots: true,
      arrows: false,
    },
  },
  SlideProps: {
    flexBox: true,
    alignItems: 'flex-start',
    pb: 3,
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  QuoteProps: {
    variant: 'quote2',
    color: 'gray.1',
    as: 'q',
  },
  QuoteAuthorProps: {
    as: 'footer',
    variant: 'h4',
    mt: 3,
  },
  AvatarProps: {
    mr: 4,
    mt: {
      _: 4,
      lg: 0,
    },
    order: {
      _: 1,
      lg: 0,
    },
  },
  LiquidProps: {
    top: '50%',
    marginTop: -250,
    zIndex: -1,
    left: -750,
    position: 'absolute',
  },
  ...data.clients,
};

export default Clients;
