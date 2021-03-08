import React from 'react';
import { works } from '~/pages/Experience/components/Work/items';
import WorkItem from '~/pages/Experience/components/Work/WorkItem';
import { Card } from '~/shared/components';
import './Work.scss';

const Work: React.FC = () => {
  return (
    <Card className="work">
      <Card.Title>Work</Card.Title>
      {works.map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
    </Card>
  );
};

export default Work;
