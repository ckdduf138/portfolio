import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useMousePosition } from '@/hooks/useMousePosition';

const roles = [
  'Frontend Developer',
  'UX Enthusiast',
  'React Developer',
  'TypeScript Lover',
];

const HeroSection = () => {
  const displayText = useTypewriter(roles, 80, 2200);
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
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient blobs with mouse parallax */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ transition: 'transform 0.1s linear' }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px] opacity-20 bg-primary-600"
          style={{ transform: `translate(${blobX}px, ${blobY}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full filter blur-[120px] opacity-15 bg-violet-600"
          style={{ transform: `translate(${-blobX * 0.8}px, ${-blobY * 0.8}px)` }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full filter blur-[100px] opacity-10 bg-cyan-500"
          style={{ transform: `translate(${blobX * 0.5}px, ${blobY * 0.5}px)` }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 bg-primary-950/50 border border-primary-800/50 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-2 font-light">
          안녕하세요, 저는
        </motion.p>

        <motion.h1 variants={itemVariants} className="mb-4">
          <span className="block text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight">
            이창열
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-violet-400 to-cyan-400 mt-2 leading-tight">
            Lee Chang Yeol
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-8 h-12"
        >
          <span className="text-xl md:text-2xl font-medium text-gray-300">
            {displayText}
            <span className="animate-blink text-primary-400">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          사용자가{' '}
          <span className="text-white font-medium">더 편하고 직관적으로</span> 사용할 수 있는
          웹 경험을 만드는 것을 가장 중요하게 생각합니다.
          <br />
          좋은 UX는 좋은 코드에서 시작된다고 믿으며,{' '}
          <span className="text-primary-400 font-medium">사용자 중심의 개발</span>을 지향합니다.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-primary-500/25 flex items-center justify-center"
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
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </motion.a>
          {/* PDF 파일을 public/이창열_이력서.pdf 에 위치하거나, HTML 버전을 열려면 /이창열_이력서.html로 변경하세요 */}
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

        {/* Tech tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {['TypeScript', 'React', 'Next.js', 'TailwindCSS'].map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border border-current rounded-full flex items-start justify-center pt-1.5 group-hover:border-white"
        >
          <div className="w-1 h-1.5 bg-current rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
