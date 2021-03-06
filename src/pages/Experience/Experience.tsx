import React from 'react';
import { AboutMe, Profile, Skills, Work } from './components';
import { Page } from '~/layout';
import './Experience.scss';

const Experience: React.FC = () => {
  return (
    <Page title="Experience" className="experience">
      <div className="cv-wrapper">
        <Profile />
        <div className="column left">
          <Work />
        </div>
        <div className="column right">
          <Skills />
          <AboutMe />
        </div>
      </div>
    </Page>
  );
};

export default Experience;
