import React from 'react';
import { Work } from './items';
import { Card } from '~/shared/components';

interface Props {
  work: Work;
}

const WorkItem: React.FC<Props> = ({ work }) => {
  return (
    <Card className="work-item">
      <Card.Title className="position">{work.position}</Card.Title>
      <div className="work-info">
        <Card.Label className="company">{work.company}</Card.Label>
        <Card.Label className="period">
          {work.period.start} - {work.period.end}
        </Card.Label>
      </div>
      <ul className="work-projects">
        {work.projects.map((project) => (
          <div key={project.id}>
            <p className="description">{project.description}</p>
            <ol className="responsibilities">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <div className="point" />
                  <p>{responsibility}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default WorkItem;
