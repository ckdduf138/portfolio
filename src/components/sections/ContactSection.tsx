import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Phone, Copy, Check } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: '이메일',
    value: 'leecy0131@gmail.com',
    href: 'mailto:leecy0131@gmail.com',
    color: 'from-primary-500 to-violet-500',
    copyable: true,
    copyValue: 'leecy0131@gmail.com',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/ckdduf138',
    href: 'https://github.com/ckdduf138',
    color: 'from-gray-600 to-gray-800',
    copyable: false,
    copyValue: '',
  },
  {
    icon: <Phone size={20} />,
    label: '전화번호',
    value: '010-3801-2614',
    href: 'tel:010-3801-2614',
    color: 'from-emerald-400 to-teal-500',
    copyable: true,
    copyValue: '010-3801-2614',
  },
];

const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/5 filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle
          dark
          label="Contact"
          title="함께 만들어요"
          description="좋은 사용자 경험을 함께 만들어 나갈 팀을 찾고 있습니다. 언제든지 연락 주세요!"
        />

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {item.icon}
              </div>
              <p className="text-xs text-gray-500 mb-1">{item.label}</p>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white font-semibold text-sm break-all hover:text-primary-300 transition-colors duration-200"
              >
                {item.value}
              </a>
              {item.copyable && (
                <button
                  onClick={() => handleCopy(item.label, item.copyValue)}
                  className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {copiedKey === item.label ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      복사
                    </>
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="mailto:leecy0131@gmail.com"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-200 shadow-lg shadow-primary-500/25"
          >
            <Mail size={18} />
            이메일 보내기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
