import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export interface Value {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

interface Props {
  value: Value;
  index: number;
}

const ValueCard = ({ value, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4 p-4 sm:p-5 bg-gray-50 rounded-2xl hover:bg-primary-50 hover:shadow-sm transition-all duration-300 group"
  >
    <div className="w-9 h-9 rounded-xl bg-white text-primary-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-primary-100 transition-colors duration-200">
      {value.icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors duration-200 text-sm">
        {value.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
      {value.href && (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs text-primary-500 hover:text-primary-600 font-medium transition-colors"
        >
          solved.ac 프로필 <ExternalLink size={11} />
        </a>
      )}
    </div>
  </motion.div>
);

export default ValueCard;
