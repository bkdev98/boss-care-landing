import { css } from 'styled-components';
import { borderRadius, colors, transition } from '../../styles';

export default {
  main: css`
    position: relative;
    display: block;
    width: 64px;
    height: 40px;
    cursor: pointer;
    background: ${colors.gradients.primary.replace('165.57deg', '141.76deg')};
    border-radius: ${borderRadius.xLarge}px;

    &::before {
      position: relative;
      top: 2px;
      left: 2px;
      display: block;
      width: 36px;
      height: 36px;
      content: '';
      background-color: ${colors.gray[7]};
      border-radius: 50%;
      transition: ${transition.all};
      transform-origin: left center;
    }

    &.checked::before {
      transform: translateX(24px);
    }
  `,
  Input: {
    main: css`
      display: none;
    `,
  },
};
