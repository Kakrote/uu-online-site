'use client';

import { motion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ 
    children, 
    className = '', 
    delay = 0, 
    direction = 'up', 
    duration = 0.6,
    distance = 60 
  }, ref) => {
    // Define initial positions based on direction
    const getInitialPosition = () => {
      switch (direction) {
        case 'up':
          return { y: distance, x: 0 };
        case 'down':
          return { y: -distance, x: 0 };
        case 'left':
          return { x: distance, y: 0 };
        case 'right':
          return { x: -distance, y: 0 };
        default:
          return { y: distance, x: 0 };
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={{
          ...getInitialPosition(),
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1
        }}
        viewport={{ 
          once: true, 
          margin: "-10% 0px -10% 0px" // Trigger when element is 10% visible
        }}
        transition={{
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for smooth motion
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;