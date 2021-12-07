import React from 'react';
import styled from 'styled-components';

import { base } from '@quocs/common/src/utils';

import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} alt="Mobile App" {...props} />;

export default Logo;
