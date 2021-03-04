import React from 'react';
import Skill from './Skill';
import { Card } from '~/shared/components';
import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <Card className="skills">
      <Card.Title>Skills</Card.Title>
      <Skill caption="HTML, CSS" rating={3} />
      <Skill caption="React, Redux" rating={4} />
      <Skill caption="JavaScript, Typescript" rating={3} />
      <Skill caption="Node, Koa, Express" rating={2} />
      <Skill caption="PostgreSQL, Mongo" rating={1} />
      <Skill caption="Docker" rating={2} />
      <br />
      <Skill caption="GCP, DigitalOcean" rating={4} />
      <Skill caption="CircleCI, GitLab CI, Travis" rating={4} />
    </Card>
  );
};

export default Skills;
