import React from 'react';
import { AboutMe, Profile, Skills, Work } from './components';
import { Page } from '~/layout';
import './Experience.scss';

const Experience: React.FC = () => {
  return (
    <Page title="Experience" className="experience">
      <div className="cv-wrapper">
        <Profile />
        <Skills />
        <Work />
        <AboutMe />
      </div>
    </Page>
  );
};

export default Experience;
