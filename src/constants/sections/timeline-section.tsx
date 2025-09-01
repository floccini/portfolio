import { motion } from 'framer-motion';
import { TimelineSectionProps } from '../../types/experiences';

export const TimelineSection = ({ experience }: TimelineSectionProps) => {
  return (
    <div key={experience.company + experience.date} className="relative">
      <div
        className={`absolute -left-[20px] top-2 w-[9px] h-[9px] rounded-full ${experience.dotColor} ring-4 ring-white dark:ring-gray-900`}
      />
      <motion.div
        className="group py-1 transition-colors"
        whileHover={{ scale: 1.05 }}
        style={{ transformOrigin: 'left' }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <p className="font-medium">{experience.company}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
            {experience.date}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          {experience.title}
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
          {experience.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
