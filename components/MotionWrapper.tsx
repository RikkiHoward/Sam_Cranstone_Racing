'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
}

export default function MotionWrapper({ 
  children, 
  initial, 
  animate, 
  transition, 
  className 
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}