import { motion } from 'framer-motion';
import { Code2, Layers, Wrench } from 'lucide-react';
import type { SkillGroup } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  'Languages & Frameworks': <Code2 size={16} />,
  'Styling & State': <Layers size={16} />,
  'Tools & Deploy': <Wrench size={16} />,
};

type SkillGroupCardProps = SkillGroup & { index: number };

const SkillGroupCard = ({ title, skills, index }: SkillGroupCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
          {iconMap[title]}
        </span>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
            className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-primary-50 hover:text-primary-600 hover:border-primary-100 cursor-default transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillGroupCard;
