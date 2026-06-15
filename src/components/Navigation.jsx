import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = portfolioData.navigation;

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">Alexandra Mitchell</a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="nav-link"
              whileHover={{ color: '#d4af37' }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta-mobile"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
