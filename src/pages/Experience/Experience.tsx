import React from 'react';
import { AboutMe } from './components';
import { Page } from '~/layout';
import './Experience.scss';

const Experience: React.FC = () => {
  return (
    <Page title="Experience" className="experience">
      <div className="cv-wrapper">
        <AboutMe />
      </div>
    </Page>
  );
};

export default Experience;
