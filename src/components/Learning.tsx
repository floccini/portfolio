import { motion } from 'framer-motion';
import { topics } from '../constants/topics';

export const Learning = () => (
  <motion.div
    className="space-y-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-lg font-semibold">Currently Learning</h2>
    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  </motion.div>
);
