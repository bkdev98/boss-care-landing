import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  CrossQuaternary,
  CrossTertiary,
  DashedCircle,
  FullCircle,
  Image,
  Wrapper,
} from './styled.components';

const Avatar = ({ fancy, className, src, srcSet, ImgProps, ...props }) => (
  <Wrapper className={classNames(className, { fancy })} {...props}>
    {fancy && (
      <>
        <DashedCircle />
        <FullCircle />
        <CrossTertiary />
        <CrossQuaternary />
      </>
    )}
    <Image src={src} srcSet={src} {...ImgProps} />
  </Wrapper>
);

Avatar.propTypes = {
  /**
   * Url to image
   */
  src: PropTypes.string,
  /**
   * Set of urls to image
   */
  srcSet: PropTypes.string,
  /**
   * Use fancy styling
   */
  fancy: PropTypes.bool,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Img component props
   */
  ImgProps: PropTypes.object,
};

export default Avatar;
