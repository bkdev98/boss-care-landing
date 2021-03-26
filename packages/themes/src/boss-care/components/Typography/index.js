import { css } from 'styled-components';
import { body, colors } from '../../styles';

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    font-weight: 400;
    line-height: ${body.lineHeight};

    label& {
      cursor: pointer;
      user-select: none;
    }

    ${props =>
      props.gradient &&
      css`
        background: -webkit-${colors.gradients[props.gradient].replace('165.57deg', '-40.83deg')};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `}
  `,
  variants: {
    h1: {
      fontSize: 48,
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 24,
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.6,
    },
    h5: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1.6,
    },
    h6: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 18,
      lineHeight: 1.6,
    },
    body: {
      fontSize: 14,
      lineHeight: 1.7,
    },
    quote1: {
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: 'italic',
    },
    quote2: {
      fontSize: 18,
      lineHeight: 1.6,
      fontStyle: 'italic',
    },
    button1: {
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 'bold',
    },
    button2: {
      fontSize: 18,
      lineHeight: 1.6,
      fontWeight: 'bold',
    },
    button: {
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 600,
    },
  },
};
