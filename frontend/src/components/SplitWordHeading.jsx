import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SplitWordHeading = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const words = children.split(' ');

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default SplitWordHeading;
