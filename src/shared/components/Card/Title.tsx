import React from 'react';

export interface TitleProps {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h3 className={className}>{children}</h3>;
};

export default Title;
