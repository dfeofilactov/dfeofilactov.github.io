import React, { HTMLProps } from 'react';
import classnames from 'classnames';

export interface LabelProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
  uppercase?: boolean;
  bold?: boolean;
}

const Label: React.FC<LabelProps> = ({
  children,
  className,
  uppercase = false,
  bold = false,
  ...props
}) => {
  return (
    <p {...props} className={classnames('label', className, { uppercase, bold })}>
      {children}
    </p>
  );
};

export default Label;
