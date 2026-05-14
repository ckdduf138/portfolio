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
                프론트엔드 테스트 전략(Vitest · React Testing Library · Playwright)을 학습하며 Deerlink 실서비스에 단계적으로 적용 중입니다.
                병행하여 브라우저 렌더링 파이프라인과 번들 최적화를 깊이 있게 공부해, "느낌이 빠른 UI"가 아닌 "측정 가능한 성능 개선"으로 풀어내는 개발자가 되고자 합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
