import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-background" />
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <motion.p className="hero-eyebrow" variants={itemVariants}>
            Professional Photography
          </motion.p>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Capturing Moments That Last Forever
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Professional Photographer | Portraits | Events | Nature
          </motion.p>
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#portfolio" className="button button-primary">
            View Portfolio
          </a>
          <a href="#contact" className="button button-secondary">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
