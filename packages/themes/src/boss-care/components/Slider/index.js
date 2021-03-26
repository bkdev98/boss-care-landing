import { css } from 'styled-components';
import { colors, transition } from '../../styles';

export default {
  main: css`
    .slick-dots {
      display: flex !important;
      padding: 0;
      margin: 0;
      list-style: none;
      justify-content: center;

      li {
        button {
          display: inline-block;
          width: 10px;
          height: 10px;
          padding: 0;
          margin: 0 5px;
          font-size: 0;
          color: transparent;
          cursor: pointer;
          background-color: ${colors.tertiary};
          border: none;
          border-radius: 50%;
          outline: none;
          opacity: 0.1;
          transition: ${transition.all};
        }

        &.slick-active button {
          opacity: 1;
        }
      }
    }
  `,
};
