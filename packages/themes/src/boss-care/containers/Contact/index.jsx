import React from 'react';
import PropTypes from 'prop-types';

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import { Formik, Form } from 'formik';

import Box from '@quocs/common/src/components/Box';
import Container from '@quocs/common/src/components/Container';
import Typography from '@quocs/common/src/components/Typography';
import Button from '@quocs/common/src/components/Button';
import Input from '@quocs/common/src/components/Formik/Input';

import Liquid from '../../components/Liquids/A';

import phoneImg from '../../assets/contact-phone.png';
import phoneImg2x from '../../assets/contact-phone@2x.png';

import { PhoneImg } from './styled.components';
import data from '../../data';

const Contact = ({
  name,
  title,
  text,
  sendButtonText,
  form,
  WrapperProps,
  ContainerProps,
  InnerProps,
  ImgWrapperProps,
  ImgProps,
  LiquidProps,
  FormProps,
  TitleProps,
  TextProps,
  ButtonProps,
}) => (
  <Box {...WrapperProps}>
    <Container name={name} {...ContainerProps}>
      <Box {...InnerProps}>
        <Box {...ImgWrapperProps}>
          <Fade duration={600} delay={100}>
            <PhoneImg alt="" {...ImgProps} />
          </Fade>
        </Box>
        <Box {...LiquidProps}>
          <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
            <Liquid width={570} />
          </Reveal>
        </Box>
        <Box {...FormProps}>
          <Formik
            validationSchema={form.validationSchema}
            onSubmit={form.onSubmit}
            initialValues={form.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {},
            )}
          >
            <Form>
              <Fade cascade bottom duration={600}>
                <Typography {...TitleProps}>{title}</Typography>
                <Typography {...TextProps}>{text}</Typography>
                <div>
                  {form.fields.map(field => (
                    <Input key={field.name} {...field} />
                  ))}
                  <Button type="submit" {...ButtonProps}>
                    {sendButtonText}
                  </Button>
                </div>
              </Fade>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Container>
  </Box>
);

Contact.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * Main content text
   */
  text: PropTypes.node,
  /**
   * Send button content
   */
  sendButtonText: PropTypes.node,
  /**
   * Form details
   */
  form: PropTypes.shape({
    /**
     * Formik validation schema
     * @see https://jaredpalmer.com/formik/docs/guides/validation
     */
    validationSchema: PropTypes.object,
    /**
     * Form submit function
     */
    onSubmit: PropTypes.func,
    /**
     * List of fields
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Name of field
         */
        name: PropTypes.string.isRequired,
        /**
         * Type of field
         */
        type: PropTypes.string,
        /**
         * Placeholder for field
         */
        placeholder: PropTypes.string,
        /**
         * Initial value used in formik
         */
        initialValue: PropTypes.string,
      }),
    ),
  }),
  /**
   * Main wrapper props
   * @See @quocs/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @quocs/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Inner box props
   * @See @quocs/common/src/components/Box
   */
  InnerProps: PropTypes.object,
  /**
   * Props list for phone image wrapper
   * @See @quocs/common/src/components/Box
   */
  ImgWrapperProps: PropTypes.object,
  /**
   * Phone image props
   * @See @quocs/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * Object with props for Liquid component.
   */
  LiquidProps: PropTypes.object,
  /**
   * Form wrapper props
   * @See @quocs/common/src/components/Box
   */
  FormProps: PropTypes.object,
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
   * Send button props
   * @See @quocs/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
};

Contact.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    mt: -60,
    pt: 60,
  },
  InnerProps: {
    flexBox: true,
    pt: {
      _: 60,
      lg: 120,
    },
    pb: {
      _: 90,
      lg: 180,
    },
    ml: {
      _: 0,
      lg: 700,
    },
    position: 'relative',
  },
  FormProps: {
    flex: {
      _: '1',
      lg: '0 0 370px',
    },
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
    color: 'gray.1',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  ButtonProps: {
    variant: 'primary',
    mt: {
      _: 3,
      lg: 4,
    },
  },
  ImgWrapperProps: {
    position: 'absolute',
    top: -60,
    left: -860,
    zIndex: -1,
  },
  ImgProps: {
    src: phoneImg,
    srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
    alt: 'Contact us',
  },
  LiquidProps: {
    top: 140,
    zIndex: -2,
    left: -600,
    position: 'absolute',
  },
  ...data.contact,
};

export default Contact;
