import { motion } from 'framer-motion';
import { Layers, Puzzle, Boxes, Wrench } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { coreStrengths } from '@/data/resumeData';

const iconMap: Record<string, React.ReactNode> = {
  Layers:  <Layers  size={22} />,
  Puzzle:  <Puzzle  size={22} />,
  Boxes:   <Boxes   size={22} />,
  Wrench:  <Wrench  size={22} />,
};

const StrengthsSection = () => {
  return (
    <section id="strengths" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle
          label="Core Strengths"
          title="핵심 역량"
          description="실무를 통해 체득한 4가지 강점입니다."
          align="left"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {coreStrengths.map((strength, i) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary-200 hover:shadow-[0_4px_24px_-4px_rgba(99,102,241,0.12)] transition-all duration-300"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-black text-gray-50 select-none leading-none group-hover:text-primary-50 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                {iconMap[strength.icon]}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug">
                {strength.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {strength.description}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-primary-400/0 via-primary-400/40 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
