import React from 'react';
import { ReactSVG } from 'react-svg';
import { motion, Variants } from 'framer-motion';
import { AboutMe, Profile, Skills, Work } from './components';
import cvPdf from './assets/cv.pdf';
import downloadSvg from '~/shared/assets/download.svg';
import { Page } from '~/layout';
import './Experience.scss';
import Button from '~/shared/components/Button';

const DELAY = 0.5;

const Experience: React.FC = () => {
  return (
    <Page title="Experience" className="experience">
      <div className="file">
        <a href={cvPdf} target="_blank" rel="noreferrer noopener">
          <Button tiny>Open PDF</Button>
        </a>
        <a className="download-link" href={cvPdf} download="Denis-Feofilactov-CV-React">
          <ReactSVG className="download-icon" src={downloadSvg} />
          Download
        </a>
      </div>
      <div className="cv-wrapper">
        <motion.div
          initial="hide"
          animate="show"
          variants={blockVariants}
          transition={{ delay: DELAY }}
        >
          <Profile />
        </motion.div>
        <div className="column left">
          <motion.div
            initial="hide"
            animate="show"
            variants={blockVariants}
            transition={{ delay: DELAY + 0.1 }}
          >
            <Work />
          </motion.div>
        </div>
        <div className="column right">
          <motion.div
            initial="hide"
            animate="show"
            variants={blockVariants}
            transition={{ delay: DELAY + 0.2 }}
          >
            <Skills />
          </motion.div>
          <motion.div
            initial="hide"
            animate="show"
            variants={blockVariants}
            transition={{ delay: DELAY + 0.3 }}
          >
            <AboutMe />
          </motion.div>
        </div>
      </div>
    </Page>
  );
};

export default Experience;

const blockVariants: Variants = {
  hide: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
