import { GraduationCap } from 'lucide-react';

export interface Education {
  school: string;
  major: string;
  period: string;
  status: string;
}

interface Props {
  edu: Education;
}

const EducationItem = ({ edu }: Props) => (
  <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50 rounded-2xl">
    <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
      <GraduationCap size={17} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-bold text-gray-900 text-sm">{edu.school}</p>
        <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0">
          {edu.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-0.5">{edu.major}</p>
      <p className="text-xs text-gray-400 mt-1">{edu.period}</p>
    </div>
  </div>
);

export default EducationItem;
