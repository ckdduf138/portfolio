import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-violet-500 to-cyan-400" />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.featured && (
                <span className="text-xs font-semibold bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  project.category === 'solo'
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-amber-50 text-amber-600'
                }`}
              >
                {project.category === 'solo' ? '개인 프로젝트' : '팀 프로젝트'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{project.period}</p>
          </div>

          {/* Links */}
          <div className="flex gap-2 ml-4 flex-shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                title="Live Demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {/* Highlights */}
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-5 space-y-1.5"
          >
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>
                {h}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 rounded-md hover:bg-primary-50 hover:text-primary-600 hover:border-primary-100 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-primary-500 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors duration-200"
        >
          {isExpanded ? '접기' : '자세히 보기'}
          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            ↓
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
