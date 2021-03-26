import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Check from '@quocs/icons/src/line/Check';
import Minus from '@quocs/icons/src/line/Minus';

import Box from '@quocs/common/src/components/Box';
import Container from '@quocs/common/src/components/Container';
import Grid from '@quocs/common/src/components/Grid';
import Typography from '@quocs/common/src/components/Typography';
import Switch from '@quocs/common/src/components/Switch';
import Card from '@quocs/common/src/components/Card';
import List from '@quocs/common/src/components/List';
import Icon from '@quocs/common/src/components/Icon';
import Button from '@quocs/common/src/components/Button';
import Radio from '@quocs/common/src/components/Radio';

import data from '../../data';
import { CardWrapper } from './styled.components';
import { borderRadius } from '../../styles';

const Pricing = ({
  WrapperProps,
  ContainerProps,
  GridProps,
  CaptionProps,
  TitleProps,
  TextProps,
  SwitchWrapperProps,
  SwitchTextProps,
  SwitchProps,
  RadioProps,
  CardContainerProps,
  CardWrapperProps,
  CardProps,
  CardTitleProps,
  CardPriceProps,
  CardListProps,
  CardListItemProps,
  CardListIconCheckProps,
  CardListIconMinusProps,
  CardButtonProps,
  sections,
  name,
  prices,
  title,
  text,
  useRadios,
}) => {
  const [selectedSection, setSelectedSection] = useState('a');

  const handleToggleSection = () => setSelectedSection(selected => (selected === 'a' ? 'b' : 'a'));
  const handleSelectA = () => setSelectedSection('a');
  const handleSelectB = () => setSelectedSection('b');

  return (
    <Box {...WrapperProps}>
      <Container {...ContainerProps} name={name}>
        <Grid {...GridProps}>
          <Box {...CaptionProps}>
            <Fade cascade bottom duration={600}>
              <Typography {...TitleProps}>{title}</Typography>
              {text ? <Typography {...TextProps}>{text}</Typography> : <></>}
            </Fade>
          </Box>
          <Box {...SwitchWrapperProps}>
            {useRadios ? (
              <Fade bottom delay={100} duration={600}>
                <Radio
                  onToggle={handleSelectA}
                  checked={selectedSection === 'a'}
                  label={prices?.types?.a}
                  {...RadioProps}
                />
                <Radio
                  onToggle={handleSelectB}
                  checked={selectedSection === 'b'}
                  label={prices?.types?.b}
                  {...RadioProps}
                />
              </Fade>
            ) : (
              <Fade bottom delay={100} duration={600}>
                <Typography onClick={handleSelectA} {...SwitchTextProps}>
                  {prices?.types?.a}
                </Typography>
                <Switch
                  checked={selectedSection === 'b'}
                  onToggle={handleToggleSection}
                  {...SwitchProps}
                />
                <Typography onClick={handleSelectB} {...SwitchTextProps}>
                  {prices?.types?.b}
                </Typography>
              </Fade>
            )}
          </Box>

          <Box {...CardContainerProps}>
            <Reveal effect="cards" duration={600}>
              <CardWrapper {...CardWrapperProps}>
                {prices?.sections?.map((section, i) => (
                  <Card key={i} {...CardProps} {...sections[i]?.CardProps}>
                    <Typography {...CardTitleProps} {...sections[i]?.CardTitleProps}>
                      {section.title}
                    </Typography>
                    <Typography {...CardPriceProps} {...sections[i]?.CardPriceProps}>
                      {selectedSection === 'a' ? section.price?.a : section.price?.b}
                    </Typography>

                    <List {...CardListProps} {...sections[i]?.CardListProps}>
                      {section.features?.map((feature, key) => (
                        <List.Item
                          key={key}
                          {...CardListItemProps}
                          {...sections[i]?.CardListItemProps}
                        >
                          <Icon
                            icon={feature.check ? Check : Minus}
                            {...(feature.check ? CardListIconCheckProps : CardListIconMinusProps)}
                            {...(feature.check
                              ? sections[i]?.CardListIconCheckProps
                              : sections[i]?.CardListIconMinusProps)}
                          />
                          {feature.text}
                        </List.Item>
                      ))}
                    </List>

                    <Button
                      {...CardButtonProps}
                      {...sections[i]?.CardButtonProps}
                      {...section.button.ButtonProps}
                    >
                      {section.button.text}
                    </Button>
                  </Card>
                ))}
              </CardWrapper>
            </Reveal>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const CardPropTypes = {
  /**
   * Main card props
   * @See @quocs/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Props of title of the card
   * @See @quocs/common/src/components/Typography
   */
  CardTitleProps: PropTypes.object,
  /**
   * Props of price in the card
   * @See @quocs/common/src/components/Typography
   */
  CardPriceProps: PropTypes.object,
  /**
   * Features list props
   * @See @quocs/common/src/components/List
   */
  CardListProps: PropTypes.object,
  /**
   * Features list single item props
   * @See @quocs/common/src/components/List
   */
  CardListItemProps: PropTypes.object,
  /**
   * Features list check icon props
   * @See @quocs/common/src/components/Icon
   */
  CardListIconCheckProps: PropTypes.object,
  /**
   * Features list minus icon props
   * @See @quocs/common/src/components/Icon
   */
  CardListIconMinusProps: PropTypes.object,
  /**
   * Card button props
   * @See @quocs/common/src/components/Button
   */
  CardButtonProps: PropTypes.object,
};

Pricing.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Use radio buttons instead of switch
   */
  useRadios: PropTypes.bool,
  /**
   * Price table related data
   */
  prices: PropTypes.shape({
    /**
     * Types of prices ex. Monthly / Annually
     */
    types: PropTypes.shape({
      /**
       * Type A
       */
      a: PropTypes.node,
      /**
       * Type B
       */
      b: PropTypes.node,
    }),
    /**
     * Sections of price list
     */
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of section
         */
        title: PropTypes.node,
        /**
         * Prices divided into types
         */
        price: PropTypes.shape({
          a: PropTypes.node,
          b: PropTypes.node,
        }),
        /**
         * Features list
         */
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
            check: PropTypes.bool,
          }),
        ),
        /**
         * Button below features
         */
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.object,
        }),
      }),
    ),
  }),
  /**
   * Wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @quocs/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Layout grid props
   * @See @quocs/common/src/components/Grid
   */
  GridProps: PropTypes.object,
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
   * Price switch wrapper props
   * @See @quocs/common/src/components/Box
   */
  SwitchWrapperProps: PropTypes.object,
  /**
   * Switch text props
   * @See @quocs/common/src/components/Typography
   */
  SwitchTextProps: PropTypes.object,
  /**
   * Price switch props
   * @See @quocs/common/src/components/Switch
   */
  SwitchProps: PropTypes.object,
  /**
   * Props of radio buttons when useRadios is true
   * @See @quocs/common/src/components/Radio
   */
  RadioProps: PropTypes.object,
  /**
   * Price table cards container props, used to define place in grid
   * @See @quocs/common/src/components/Box
   */
  CardContainerProps: PropTypes.object,
  /**
   * Price table cards wrapper props. It's needed to use both container and wrapper because of animations
   * @See @quocs/common/src/components/Box
   */
  CardWrapperProps: PropTypes.object,
  ...CardPropTypes,
  /**
   * Props defined per every card
   */
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

Pricing.defaultProps = {
  ContainerProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  GridProps: {
    gridTemplateAreas: '"caption" "switch" "cards"',
    gridRowGap: '30px',
  },
  CaptionProps: {
    maxWidth: 770,
    textAlign: 'center',
    mx: 'auto',
    gridArea: 'caption',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
  },
  TextProps: {
    variant: 'body2',
    color: 'gray.1',
    mt: {
      _: 3,
      lg: 4,
    },
  },
  SwitchWrapperProps: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea: 'switch',
  },
  SwitchTextProps: {
    as: 'label',
    variant: 'h4',
  },
  SwitchProps: {
    mx: 3,
  },
  RadioProps: {
    IndicatorProps: {
      color: 'primary',
    },
    mr: 30,
  },
  CardContainerProps: {
    gridArea: 'cards',
  },
  CardWrapperProps: {
    flexBox: true,
    justifyContent: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CardProps: {
    display: 'flex',
    flexDirection: 'column',
    flex: {
      _: '0 0 1',
      lg: '0 0 300px',
    },
    p: 30,
    my: {
      _: 0,
      lg: 30,
    },
  },
  CardTitleProps: {
    textAlign: 'center',
    as: 'h4',
    variant: 'h4',
  },
  CardPriceProps: {
    fontSize: 96,
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: '-0.03em',
    lineHeight: 1,
  },
  CardListProps: {
    mt: 30,
  },
  CardListItemProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      _: 'center',
      lg: 'flex-start',
    },
    color: 'gray.1',
    mb: 12,
  },
  CardListIconCheckProps: {
    gradient: 'quaternary',
    fontSize: 24,
    lineHeight: 1,
    mr: 3,
  },
  CardListIconMinusProps: {
    color: 'gray.4',
    fontSize: 24,
    lineHeight: 1,
    mr: 3,
  },
  CardButtonProps: {
    mt: 60,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  sections: [
    {
      CardProps: {
        borderTopRightRadius: {
          _: borderRadius.normal,
          lg: 0,
        },
        borderBottomLeftRadius: {
          _: 0,
          lg: borderRadius.normal,
        },
        borderBottomRightRadius: 0,
      },
      CardPriceProps: {
        color: 'secondary',
        gradient: 'secondary',
      },
      CardButtonProps: {
        variant: 'secondary',
      },
    },
    {
      CardProps: {
        my: 0,
        flex: {
          _: '0 0 1',
          lg: '0 0 330px',
        },
        zIndex: 2,
        py: {
          _: 30,
          lg: 60,
        },
        borderRadius: {
          _: 0,
          lg: borderRadius.normal,
        },
      },
      CardPriceProps: {
        color: 'tertiary',
        gradient: 'tertiary',
      },
      CardButtonProps: {
        variant: 'tertiary',
      },
    },
    {
      CardProps: {
        borderBottomLeftRadius: {
          _: borderRadius.normal,
          lg: 0,
        },
        borderTopRightRadius: {
          _: 0,
          lg: borderRadius.normal,
        },
        borderTopLeftRadius: 0,
      },
      CardPriceProps: {
        color: 'primary',
        gradient: 'primary',
      },
      CardButtonProps: {
        variant: 'primary',
      },
    },
  ],
  ...data.pricing,
};

export default Pricing;
