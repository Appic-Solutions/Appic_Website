import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const FeatureCard = ({ children }) => {

    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          transition: { duration: 0.5 }
        }
      };
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="feature-card"
      >
        {children}
      </motion.div>
    );
  };
  