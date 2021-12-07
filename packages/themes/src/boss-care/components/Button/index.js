import { css } from 'styled-components';
import { variant } from '@quocs/common/src/utils';

import { colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button2};

    padding: 12px 32px;
    white-space: nowrap;
    border-radius: 25px;
    transition: ${transition.all};

    & > span {
      position: relative;
      z-index: 2;
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      content: '';
      background-color: #000;
      mix-blend-mode: soft-light;
      border-radius: 26px;
      opacity: 0;
      transition: opacity ${transition.base};
    }

    &:hover &::after {
      opacity: 1;
    }

    &:focus,
    &:active {
      box-shadow: none;
    }

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'flat',
      scale: 'Button.flat',
    })}
    ${variant({
      prop: 'outlined',
      scale: 'Button.outlined',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
  `,
  variants: {
    primary: css`
      color: ${colors.gray[7]};
      background: ${colors.gradients.primary};
      box-shadow: 0 20px 40px rgba(251, 148, 143, 0.4);
    `,
    secondary: css`
      color: ${colors.gray[7]};
      background: ${colors.gradients.secondary};
      box-shadow: 0 20px 40px rgba(242, 202, 200, 0.7);
    `,
    tertiary: css`
      color: ${colors.gray[7]};
      background: ${colors.gradients.tertiary};
      box-shadow: 0 20px 40px rgba(195, 107, 132, 0.3);
    `,
    quaternary: css`
      color: ${colors.gray[7]};
      background: ${colors.gradients.quaternary};
      box-shadow: 0 20px 40px rgba(254, 187, 117, 0.4);
    `,
  },
  flat: {
    true: css`
      box-shadow: none;
    `,
  },
  outlined: {
    true: css`
      color: ${colors.gray[0]};

      &::before {
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        display: block;
        content: '';
        background-color: ${colors.gray[7]};
        border-radius: 24px;
      }
    `,
  },
  sizes: {
    small: css`
      padding: 6px 16px;
      ${Typography.variants.button};
    `,
    large: css`
      padding: 16px 48px;
      ${Typography.variants.button1};
      border-radius: 33px;

      &::after,
      &::before {
        border-radius: 33px;
      }
    `,
  },
};
