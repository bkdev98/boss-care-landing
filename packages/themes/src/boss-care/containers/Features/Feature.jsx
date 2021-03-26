import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import _ from 'lodash';

import Box from '@quocs/common/src/components/Box';
import Grid from '@quocs/common/src/components/Grid';
import Card from '@quocs/common/src/components/Card';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';
import List from '@quocs/common/src/components/List';
import Img from '@quocs/common/src/components/Img';
import Icon from '@quocs/common/src/components/Icon';

import { CardsGrid } from './styled.components';

const Feature = ({
  ContainerProps,
  GridProps,
  ImageWrapperProps,
  ImageProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ListProps,
  AdditionalListProps,
  ListItemProps,
  ListTitleProps,
  ListTextProps,
  ListIconProps,
  CardGridProps,
  CardProps,
  CardIconProps,
  CardTitleProps,
  CardTextProps,
  feature,
  useCards,
  chunkLength,
}) => (
  <Box overflow="hidden">
    <Container {...ContainerProps}>
      <Grid {...GridProps}>
        {feature.ImageProps && (
          <Box {...ImageWrapperProps}>
            <Fade right duration={600}>
              <Img alt={feature.title} {...ImageProps} {...feature.ImageProps} />
            </Fade>
          </Box>
        )}
        <Box {...CaptionProps}>
          <Fade cascade bottom duration={600}>
            <Typography {...TitleProps}>{feature.title}</Typography>
            <Typography {...TextProps}>{feature.text}</Typography>
          </Fade>
        </Box>
        {!useCards &&
          [...(chunkLength ? _.chunk(feature.list, chunkLength) : [feature.list])].map(
            (list, key) => (
              <List key={key} {...ListProps} {...(key > 0 ? AdditionalListProps : {})}>
                {list.map((item, i) => (
                  <List.Item key={i} {...ListItemProps}>
                    <Box flexBox>
                      {item.IconProps && (
                        <Fade right duration={600}>
                          <Icon {...ListIconProps} {...item.IconProps} />
                        </Fade>
                      )}
                      <Box>
                        <Fade cascade bottom duration={600}>
                          <Typography {...ListTitleProps}>{item.title}</Typography>
                          <Typography {...ListTextProps}>{item.text}</Typography>
                        </Fade>
                      </Box>
                    </Box>
                  </List.Item>
                ))}
              </List>
            ),
          )}
        {useCards && (
          <CardsGrid {...CardGridProps}>
            {feature.list.map((item, i) => (
              <Fade key={i} top duration={600} delay={i * 100}>
                <Card {...CardProps} key={i}>
                  <Icon {...CardIconProps} {...item.IconProps} />
                  <Typography {...CardTitleProps}>{item.title}</Typography>
                  <Typography {...CardTextProps}>{item.text}</Typography>
                </Card>
              </Fade>
            ))}
          </CardsGrid>
        )}
      </Grid>
    </Container>
  </Box>
);

Feature.propTypes = {
  /**
   * Feature related data
   */
  feature: PropTypes.shape({
    /**
     * Props of the image component, if empty component won't be rendered
     */
    ImageProps: PropTypes.shape({
      /**
       * Basic src to the image
       */
      src: PropTypes.any,
    }),
    /**
     * Title of given feature
     */
    title: PropTypes.node,
    /**
     * Short description of feature
     */
    text: PropTypes.node,
    /**
     * Additional list of sub-features
     */
    list: PropTypes.arrayOf(
      PropTypes.shape({
        IconProps: PropTypes.object,
        title: PropTypes.node,
        text: PropTypes.node,
      }),
    ),
  }),
  /**
   * Use cards for sub-features instead of lists
   */
  useCards: PropTypes.bool,
  /**
   * Create chunk of lists. Useful when you want to add image between features etc.
   */
  chunkLength: PropTypes.number,
  /**
   * Container props
   * @See @quocs/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Main grid props
   * @See @quocs/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Image wrapper props
   * @See @quocs/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Default feature image props
   * @See @quocs/common/src/components/Img
   */
  ImageProps: PropTypes.object,
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
   * Main feature text props
   * @See @quocs/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * List wrapper of sub-features props
   * @See @quocs/common/src/components/List
   */
  ListProps: PropTypes.object,
  /**
   * Props added to additional lists creates by chunks
   * @See @quocs/common/src/components/List
   */
  AdditionalListProps: PropTypes.object,
  /**
   * Sub-feature list single item props
   * @See @quocs/common/src/components/List
   */
  ListItemProps: PropTypes.object,
  /**
   * Title of sub-future props
   * @See @quocs/common/src/components/Typography
   */
  ListTitleProps: PropTypes.object,
  /**
   * Main content text sub-future props
   * @See @quocs/common/src/components/Typography
   */
  ListTextProps: PropTypes.object,
  /**
   * Icon of sub-future props
   * @See @quocs/common/src/components/Icon
   */
  ListIconProps: PropTypes.object,
  /**
   * Cards grid wrapper props
   * @See @quocs/common/src/components/Grid
   */
  CardGridProps: PropTypes.object,
  /**
   * Sub-feature card props
   * @See @quocs/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Sub-feature card icon props
   * @See @quocs/common/src/components/Icon
   */
  CardIconProps: PropTypes.object,
  /**
   * Sub-feature card title props
   * @See @quocs/common/src/components/Typography
   */
  CardTitleProps: PropTypes.object,
  /**
   * Sub-feature card text props
   * @See @quocs/common/src/components/Typography
   */
  CardTextProps: PropTypes.object,
};

Feature.defaultProps = {
  ContainerProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  GridProps: {
    gridTemplateAreas: {
      _: '"caption" "photo" "features"',
      lg: '"photo caption" "photo features"',
    },
    gridColumnGap: '100px',
    gridRowGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: '470px 470px',
    },
  },
  ImageWrapperProps: {
    gridArea: 'photo',
    position: 'relative',
    mx: {
      _: 'auto',
      lg: 0,
    },
    left: {
      _: '0',
      lg: -40,
    },
  },
  ImageProps: {
    maxWidth: {
      _: '100%',
      lg: 'calc(100% + 80px)'
    },
    display: 'block',
  },
  CaptionProps: {
    gridArea: 'caption',
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
    variant: 'body2',
    color: 'gray.1',
  },
  ListProps: {
    gridArea: 'features',
  },
  AdditionalListProps: {
    gridArea: 'additional-features',
  },
  ListItemProps: {
    mb: 4,
  },
  ListTitleProps: {
    as: 'h4',
    variant: 'h4',
  },
  ListTextProps: {
    variant: 'body2',
    color: 'gray.1',
  },
  ListIconProps: {
    mr: 3,
    mt: -2,
    fontSize: 48,
  },
  CardGridProps: {
    gridArea: 'features',
  },
  CardProps: {
    px: 36,
    py: 30,
    mt: -30,
    mb: 60,
  },
  CardIconProps: {
    fontSize: 48,
    mb: 24,
    lineHeight: 1,
    display: 'block',
  },
  CardTitleProps: {
    as: 'h4',
    variant: 'h4',
    mb: 2,
  },
  CardTextProps: {
    variant: 'body2',
    color: 'gray.1',
  },
};

export default Feature;
