import { motion } from 'framer-motion';
import { socialLinks } from '../constants/social-links';

const Footer = () => {
  return (
    <footer className="mb-5">
      <div className="container-width">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-6 px-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center px-4">
            © {new Date().getFullYear()} Giovanni Fossati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
