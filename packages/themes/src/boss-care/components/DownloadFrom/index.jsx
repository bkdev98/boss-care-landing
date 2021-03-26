import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { base } from '@quocs/common/src/utils';

import appStore from '../../assets/app-store.svg';
import googlePlay from '../../assets/google-play.svg';

const Link = styled.a`
  ${base};
`;

const DownloadFrom = ({ href, alt, img, ...props }) => (
  <Link href={href} {...props}>
    <img src={img} alt={alt} />
  </Link>
);

DownloadFrom.propTypes = {
  /**
   * URL to application
   */
  href: PropTypes.string,
  /**
   * Button image
   */
  img: PropTypes.string,
  /**
   * Alternative text for image
   */
  alt: PropTypes.string,
};

DownloadFrom.AppStore = props => <DownloadFrom {...props} />;
DownloadFrom.AppStore.defaultProps = {
  href: 'https://quocs.com',
  img: appStore,
  alt: 'Download from app store',
};

DownloadFrom.GooglePlay = props => <DownloadFrom {...props} />;
DownloadFrom.GooglePlay.defaultProps = {
  href: 'https://quocs.com',
  img: googlePlay,
  alt: 'Download from google play',
};

export default DownloadFrom;
