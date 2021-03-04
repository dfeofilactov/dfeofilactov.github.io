import React, { FC } from 'react';
import classnames from 'classnames';
import Title, { TitleProps } from './Title';
import Label, { LabelProps } from './Label';
import './Card.scss';

interface CardProps {
  className?: string;
}

interface Card extends FC<CardProps> {
  Title: FC<TitleProps>;
  Label: FC<LabelProps>;
}

const Card: Card = ({ children, className }) => {
  return <div className={classnames('Card', className)}>{children}</div>;
};

Card.Title = Title;
Card.Label = Label;
export default Card;
