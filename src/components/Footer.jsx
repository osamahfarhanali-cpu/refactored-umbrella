import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Alexandra Mitchell</h3>
          <p>Professional Photography | Capturing Moments That Last Forever</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Follow</h4>
          <div className="footer-socials">
            {portfolioData.socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="footer-social-link"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                {getIcon(link.icon)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Alexandra Mitchell. All rights reserved.</p>
        <p>Crafted with passion and React</p>
      </motion.div>
    </footer>
  );
}
