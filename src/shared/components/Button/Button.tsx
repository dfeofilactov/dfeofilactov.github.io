import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  tiny?: boolean;
  secondary?: boolean;
}

const Button: React.FC<Props> = ({ tiny, secondary, children, ...rest }) => {
  return (
    <button className={classNames('Button', { tiny, secondary })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
