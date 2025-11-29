'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageAnimationWrapper = ({ children, className = '' }: PageAnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: 20
      }}
      animate={{ 
        opacity: 1,
        y: 0
      }}
      exit={{ 
        opacity: 0,
        y: -20
      }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimationWrapper;