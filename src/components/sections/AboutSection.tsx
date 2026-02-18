import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code2, Users, GraduationCap, Trophy } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import EducationItem from '@/components/sections/about/EducationItem';
import ValueCard, { type Value } from '@/components/sections/about/ValueCard';
import { personalInfo, education, awards } from '@/data/resumeData';

type TabKey = 'intro' | 'education';

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'intro', label: '소개', icon: <User size={15} /> },
  { key: 'education', label: '학력', icon: <GraduationCap size={15} /> },
];

const values: Value[] = [
  {
    icon: <Code2 size={18} />,
    title: 'UX 중심 개발',
    description:
      '기능 구현 전에 "사용자가 이 화면에서 무엇을 원하는가"를 먼저 생각합니다. 사용자가 별도의 학습 없이도 자연스럽게 사용할 수 있는 인터페이스를 지향합니다.',
  },
  {
    icon: <Users size={18} />,
    title: '협업과 커뮤니케이션',
    description:
      '팀원과의 조화로운 협업과 열린 커뮤니케이션을 핵심으로 삼습니다. 아이디어를 공유하고 서로의 의견을 존중하며 함께 더 나은 결과물을 만들어 나갑니다.',
  },
  {
    icon: <GraduationCap size={18} />,
    title: '코드 품질',
    description:
      '한 줄의 코드도 최적의 방법을 찾기 위해 노력합니다. 재사용 가능한 컴포넌트 설계와 가독성 높은 코드 작성으로 유지보수가 쉬운 프로젝트를 만듭니다.',
  },
  {
    icon: <Trophy size={18} />,
    title: '알고리즘 & PS',
    description:
      '알고리즘 PS를 즐기며 스터디를 직접 운영하고 있습니다. ICPC 등 대회 참가를 통해 논리적 사고력과 문제 해결 능력을 꾸준히 연습하고 있습니다.',
    href: 'https://solved.ac/profile/ckdduf138',
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('intro');

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="About Me"
          title="사용자를 먼저 생각하는 개발자"
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Tab content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab bar */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6 w-full sm:w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'intro' && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
                    <p>
                      저는{' '}
                      <span className="font-semibold text-gray-900">
                        사용자가 어떻게 하면 더 편하게 웹 사이트를 사용할 수 있을까
                      </span>
                      에 중점을 맞춰 개발하는 프론트엔드 개발자입니다.
                    </p>
                    <p>
                      사용자 경험을 단순한 디자인 문제가 아닌{' '}
                      <span className="font-semibold text-gray-900">개발자의 책임</span>으로 바라봅니다.
                      어떤 UI 배치가 사용자에게 더 직관적인지, 어떤 인터랙션이 더 자연스러운지를
                      고민하며 개발에 임하고 있습니다.
                    </p>
                    <p>
                      주로{' '}
                      <span className="text-primary-600 font-semibold">TypeScript</span>와{' '}
                      <span className="text-primary-600 font-semibold">React</span>를 기반으로
                      개발하며, 컴포넌트의 재사용성과 코드 가독성을 항상 고려합니다.
                    </p>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: '이름',   value: personalInfo.name },
                      { label: '이메일', value: personalInfo.email,         href: `mailto:${personalInfo.email}` },
                      { label: '연락처', value: personalInfo.phone,         href: `tel:${personalInfo.phone}` },
                      { label: 'GitHub', value: personalInfo.githubHandle,  href: personalInfo.github },
                    ].map((info) => (
                      <div key={info.label} className="bg-gray-50 rounded-xl p-3.5">
                        <p className="text-xs text-gray-400 font-medium mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-semibold text-primary-600 hover:text-primary-700 break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-800">{info.value}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* 수상 및 대회 */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Trophy size={13} className="text-primary-500" />
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">수상 및 대회</p>
                    </div>
                    <ul className="space-y-1.5">
                      {awards.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary-400 font-bold mt-0.5 flex-shrink-0">·</span>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {education.map((edu) => (
                    <EducationItem key={edu.school} edu={edu} />
                  ))}

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Profile photo + Values */}
          <div className="space-y-6">
            {/* ── 프로필 사진 ── */}
            {/* 실제 사진으로 교체하려면: public/profile.JPG 를 교체하면 됩니다 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary-100 shadow-xl">
                  <img
                    src="/profile.JPG"
                    alt="이창열 프로필 사진"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 💡 실제 사진으로 교체: public/profile.jpg 추가 후 src를 "/profile.jpg" 로 변경하세요 */}
              </div>
            </motion.div>

            {/* ── Values ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {values.map((value, i) => (
                <ValueCard key={value.title} value={value} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
