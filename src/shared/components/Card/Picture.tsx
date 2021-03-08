import classNames from 'classnames';
import React, { HTMLProps } from 'react';

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
}

const Picture: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <div className={classNames('picture', className)}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Picture;
