import React from 'react';
import classnames from 'classnames';

export interface LabelProps {
  className?: boolean;
  uppercase?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, className, uppercase = false }) => {
  return <p className={classnames('label', className, { uppercase })}>{children}</p>;
};

export default Label;
