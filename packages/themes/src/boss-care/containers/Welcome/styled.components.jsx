import styled, { keyframes } from 'styled-components';
import { position, layout } from 'styled-system';

import Box from '@quocs/common/src/components/Box';

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Images = styled(Box)`
  pointer-events: none;
  user-select: none;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const PhoneImg = styled.img`
  position: absolute;
  z-index: 2;
  pointer-events: none;
  user-select: none;

  .liquid & {
    opacity: 0;
    animation: 600ms ${opacity} forwards 150ms;
  }

  ${position};
  ${layout}
`;
