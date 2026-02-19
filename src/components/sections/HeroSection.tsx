import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Layers, Puzzle, Boxes, Wrench } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { coreStrengths } from '@/data/resumeData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers  size={24} />,
  Puzzle: <Puzzle  size={24} />,
  Boxes:  <Boxes   size={24} />,
  Wrench: <Wrench  size={24} />,
};

const HeroSection = () => {
  const { normalizedX, normalizedY } = useMousePosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const blobX = normalizedX * 30;
  const blobY = normalizedY * 30;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark-900">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px] opacity-20 bg-primary-600"
          style={{ transform: `translate(${blobX}px, ${blobY}px)` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full filter blur-[120px] opacity-15 bg-violet-600"
          style={{ transform: `translate(${-blobX * 0.8}px, ${-blobY * 0.8}px)` }}
        />
      </div>

      {/* ── 상단: 이름 + 소개 + CTA ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex-1 flex items-end justify-center px-6 pb-8"
      >
        <div className="max-w-4xl w-full text-center pt-20 sm:pt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-400 bg-primary-950/60 border border-primary-800/50 px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* 이름 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-white leading-none tracking-tight mb-3"
          >
            이창열
          </motion.h1>

          {/* 태그라인 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-violet-400 to-cyan-400 mb-2"
          >
            사용자를 먼저 생각하는 프론트엔드 개발자
          </motion.p>

          {/* 한 줄 소개 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.55 }}
            className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed mb-6"
          >
            TypeScript · React 기반으로 기획부터 배포까지 경험한 2년차 개발자입니다.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-primary-500/25"
            >
              프로젝트 보기
            </motion.button>
            <motion.a
              href="https://github.com/ckdduf138"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </motion.a>
            <motion.a
              href="/이창열_이력서.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border border-primary-400/40 text-primary-300 font-semibold rounded-xl hover:bg-primary-500/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              이력서
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── 핵심역량 카드 그리드 ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 w-full border-t border-white/[0.08]"
      >
        {/* 섹션 라벨 */}
        <div className="text-center pt-3 pb-1">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-600 uppercase">
            Core Strengths
          </span>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-8 grid grid-cols-2 md:grid-cols-4">
          {coreStrengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.08, duration: 0.45 }}
              className="group relative flex flex-col gap-3 px-6 py-6 border-l border-white/[0.07] first:border-l-0 md:first:border-l-0 hover:bg-white/[0.03] transition-colors duration-200"
            >
              {/* 아이콘 */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-all duration-200">
                {iconMap[s.icon]}
              </div>

              {/* 텍스트 */}
              <div>
                <p className="text-white text-sm font-bold mb-1.5 leading-snug">{s.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
              </div>

              {/* 하단 강조선 */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-white transition-colors duration-200 group z-20"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-7 border border-current rounded-full flex items-start justify-center pt-1.5 group-hover:border-white"
        >
          <div className="w-1 h-1.5 bg-current rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
