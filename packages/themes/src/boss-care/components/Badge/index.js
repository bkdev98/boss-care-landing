import { css } from 'styled-components';

import Typography from '../Typography';
import { colors } from '../../styles';

export default {
  main: css`
    ${Typography.variants.h6};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    color: ${colors.gray[7]};
    background-color: ${colors.primary};
    border-radius: 50%;
    box-shadow: 0 24px 48px rgba(251, 148, 143, 0.4);
  `,
};
