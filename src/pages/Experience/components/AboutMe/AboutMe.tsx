import React from 'react';
import { Card } from '~/shared/components';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <Card className="about-me">
      <Card.Title>About me</Card.Title>
      <p>
        22 years old JavaScript developer with 3 years experience in developing and optimizing React
        web applications.
      </p>
      <p>
        I also have a small experience in backend development (NodeJs, Koa). Strong engineering
        professional with a Bachelor’s Degree focused in Computer Engineering from NAU.
        Communicative, flexible thinking, result orientation person with positive attitude to life.
      </p>
      <p>
        I am also interested in web design and 3d modeling. One of my hobby is music and I am bass
        guitar player.
      </p>
    </Card>
  );
};

export default AboutMe;
