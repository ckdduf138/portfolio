import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

const SectionTitle = ({ label, title, description, align = 'center', dark = false }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block text-sm font-semibold tracking-[0.2em] text-primary-400 uppercase mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : ''} ${
            dark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
