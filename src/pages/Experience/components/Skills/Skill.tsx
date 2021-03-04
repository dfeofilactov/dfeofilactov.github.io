import React from 'react';
import classnames from 'classnames';

interface SkillProps {
  caption: string;
  rating: number;
}

const Skill: React.FC<SkillProps> = ({ caption, rating }) => {
  return (
    <div className="skill">
      <p className="caption">{caption}</p>
      <div className="rating">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <div key={index} className={classnames('point', { filled: index < rating })} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
