import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionWrapper = ({ children, tagName = 'div', direction, className, ...props }) => {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Adapt useEffect to control animations based on inView
  React.useEffect(() => {
    if (inView) {
      controls.start('onscreen');
    } else {
      controls.start('offscreen');
    }
  }, [controls, inView]);

  // Generalized variant to match the cardVariants structure
  const variants = {
    offscreen: {
      y: direction === 'bottomToTop' ? 50 : 0, // Customize based on direction
      x: direction === 'leftToRight' ? -50 : (direction === 'rightToLeft' ? 50 : 0), // Adjust for horizontal movements
      opacity: 0,
    },
    onscreen: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const MotionComponent = motion[tagName] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="offscreen"
      animate={controls}
      className={className}
      variants={variants}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;
