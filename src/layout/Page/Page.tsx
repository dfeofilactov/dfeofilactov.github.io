import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import './Page.scss';

interface Props {
  className: string;
  title?: string;
}

const Page: React.FC<Props> = ({ children, className, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className={classnames('page', className)}
    >
      {title && <h2>{title}</h2>}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: 'easeInOut' }}
        className="content"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Page;
