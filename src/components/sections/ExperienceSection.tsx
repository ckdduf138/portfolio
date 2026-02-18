import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/resumeData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle
          dark
          label="Experience"
          title="실무 경험"
          description="산업기능요원으로 총 2년 3개월간 프론트엔드 실무를 경험했습니다."
          align="left"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500/60 via-violet-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-7 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-500/20 hidden sm:block" />

                <div className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:bg-white/[0.05] transition-all duration-300">
                  {/* Top accent line */}
                  <div className="h-px bg-gradient-to-r from-primary-500/60 via-violet-500/40 to-transparent" />

                  {/* Card header */}
                  <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-white/8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                          <h3 className="text-lg sm:text-xl font-bold text-white">{exp.company}</h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-500/15 text-primary-400 border border-primary-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-primary-400 font-semibold text-sm">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5">
                        <span className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        {exp.siteUrl && (
                          <a
                            href={exp.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-primary-400 transition-colors duration-200"
                          >
                            <ExternalLink size={11} />
                            회사 사이트
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="px-6 sm:px-8 py-6">
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                      {exp.tasks.map((task, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                          className="flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500/70 flex-shrink-0 mt-[7px]" />
                          <p className="text-gray-400 text-sm leading-relaxed">{task}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
