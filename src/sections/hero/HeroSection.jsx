import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './hero.css';

export default function HeroSection() {
  const { hero } = portfolioData;

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

  const scrollDown = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
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
            {hero.eyebrow}
          </motion.p>
          <motion.h1 className="hero-title" variants={itemVariants}>
            {hero.title}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {hero.subtitle}
          </motion.p>
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          {hero.ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`button button-${button.variant}`}
            >
              {button.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollDown}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
