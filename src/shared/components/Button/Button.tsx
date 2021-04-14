import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  tiny?: boolean;
  secondary?: boolean;
  caption?: string;
}

const Button: React.FC<Props> = ({ tiny, secondary, children, caption, ...rest }) => {
  return (
    <button className={classNames('Button', { tiny, secondary })} {...rest}>
      {children || caption}
    </button>
  );
};

export default Button;
