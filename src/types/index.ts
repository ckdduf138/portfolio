export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  period: string;
  featured: boolean;
  category: 'solo' | 'team';
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'etc';
  color: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
