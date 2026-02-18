import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import SkillGroupCard from '@/components/ui/SkillGroupCard';
import { skillGroups, mainSkills } from '@/data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Skills"
          title="기술 스택"
          description="사용자 경험을 구현하기 위해 활용하는 기술들입니다."
        />

        {/* Main skills with progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-8"
        >
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {mainSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-2.5 hover:bg-primary-50/60 transition-colors duration-200 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <p className="text-sm font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-200">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillGroupCard
              key={group.title}
              title={group.title}
              skills={group.skills}
              index={i}
            />
          ))}
        </div>

        {/* Learning section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-violet-500 rounded-2xl text-white"
        >
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} />
            </span>
            <div>
              <h3 className="font-bold mb-1">현재 학습 중</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                사용자 입장에서 미리 생각하는 UX 도서 및 HCI 관련 자료를 통해, 어떻게하면 사용자가 더 자연스럽게 서비스를 사용할 수 있을지를 연구하고 있습니다.
                주어진 요구사항을 구현하는 데 그치지 않고, “왜 이 인터랙션이 사용자에게 편할까”를 먼저 묻는 개발자가 되고자 합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
