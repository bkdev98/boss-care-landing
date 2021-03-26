import styled from 'styled-components';
import media from 'styled-media-query';

import Box from '@quocs/common/src/components/Box';

export const CardsGrid = styled(Box)`
  margin-bottom: -30px;
  column-count: 2;
  column-gap: 30px;

  ${media.lessThan('medium')`
    column-count: 1;
  `}

  & > * {
    break-inside: avoid-column;
  }
`;
