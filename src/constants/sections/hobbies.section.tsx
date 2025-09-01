import { motion } from 'framer-motion';
import { HobbiesProps } from '../../types/hobbies-props';

export const HobbiesSection = ({ hobby }: HobbiesProps) => {
  return (
    <motion.div
      key={hobby.title}
      className="group py-1 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      <div>
        <h3 className={`font-medium`}>{hobby.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {hobby.description}
        </p>
        <p
          className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}
        >
          {hobby.stats}
        </p>
      </div>
    </motion.div>
  );
};
