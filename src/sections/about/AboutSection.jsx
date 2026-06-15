import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './about.css';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    {
      number: portfolioData.photographer.experience,
      label: 'Experience',
    },
    {
      number: portfolioData.photographer.projects,
      label: 'Projects',
    },
    {
      number: portfolioData.photographer.clients,
      label: 'Happy Clients',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{portfolioData.sections.about.label}</p>
          <h2>{portfolioData.sections.about.title}</h2>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-placeholder">
              <img
                src={portfolioData.photographer.aboutImage}
                alt="Alexandra Mitchell"
              />
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-bio">{portfolioData.photographer.bio}</p>
            
            <div className="about-highlights">
              <h3>Photography Specialties</h3>
              <ul>
                <li>Wedding Photography</li>
                <li>Portrait Sessions</li>
                <li>Event Coverage</li>
                <li>Nature & Landscape</li>
                <li>Product Photography</li>
                <li>Photo Editing & Retouching</li>
              </ul>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
