import styled from 'styled-components';

import Img from '@quocs/common/src/components/Img';
import { base } from '@quocs/common/src/utils';

import dashedCircle from './dashedCircle.svg';
import fullCircle from './fullCircle.svg';
import crossTertiary from './crossTertiary.svg';
import crossQuaternary from './crossQuaternary.svg';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 70px;
  height: 70px;

  &.fancy {
    width: 270px;
    height: 270px;
  }

  ${base};
`;

export const Image = styled(Img)`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const DashedCircle = styled.img.attrs({ src: dashedCircle })`
  position: absolute;
  top: -45px;
  left: -45px;
  z-index: 2;
`;

export const FullCircle = styled.img.attrs({ src: fullCircle })`
  position: absolute;
  top: 7px;
  right: -54px;
  z-index: 0;
`;

export const CrossTertiary = styled.img.attrs({ src: crossTertiary })`
  position: absolute;
  top: 209px;
  left: -10px;
  z-index: 0;
`;

export const CrossQuaternary = styled.img.attrs({ src: crossQuaternary })`
  position: absolute;
  top: 250px;
  left: 220px;
  z-index: 0;
`;
