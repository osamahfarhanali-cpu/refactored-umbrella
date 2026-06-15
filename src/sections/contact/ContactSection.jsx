import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';
import './contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{portfolioData.sections.contact.label}</p>
          <h2>{portfolioData.sections.contact.title}</h2>
          <p className="section-subtitle">
            {portfolioData.sections.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={portfolioData.contactInfo.formPlaceholders.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={portfolioData.contactInfo.formPlaceholders.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{portfolioData.contactInfo.formPlaceholders.service}</option>
                {portfolioData.services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={portfolioData.contactInfo.formPlaceholders.message}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="button button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Get in Touch</h3>
            <p>Feel free to reach out through any of these channels:</p>

            <div className="social-links">
              {portfolioData.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>

            <div className="contact-details">
              <div className="detail">
                <strong>Email</strong>
                <p>{portfolioData.contactInfo.email}</p>
              </div>
              <div className="detail">
                <strong>Phone</strong>
                <p>{portfolioData.contactInfo.phone}</p>
              </div>
              <div className="detail">
                <strong>Location</strong>
                <p>{portfolioData.contactInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
