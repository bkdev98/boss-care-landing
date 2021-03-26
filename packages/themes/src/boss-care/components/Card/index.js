import { css } from 'styled-components';
import { boxShadow } from 'styled-system';
import { borderRadius, colors } from '../../styles';

export default {
  main: css`
    padding: 60px 30px;
    text-align: left;
    background-color: ${colors.gray[7]};
    border: none;
    border-radius: ${borderRadius.normal}px;
    outline: none !important;
    box-shadow: 0 20px 40px rgba(195, 107, 132, 0.1);

    button& {
      cursor: pointer;
    }

    ${boxShadow}
  `,
};
