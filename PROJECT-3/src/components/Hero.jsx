import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const roles = ["CS Student", "Builder", "Designer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const headingWords = "Hi, I'm Shahab".split(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Particles Element (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-28">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full glass-pane text-sm font-medium"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for work ✦
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="h-10 flex items-center text-xl md:text-3xl font-light text-gray-400">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 font-medium"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 max-w-lg leading-relaxed text-lg"
          >
            I build exceptional digital experiences that blend stunning aesthetics with high-performance engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
            <a href="/REsume.pdf" download="Shahab_Sadiq_Resume.pdf" className="group px-8 py-4 glass-pane text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors">
              <span>Download CV</span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Content - 3D Glowing Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-square max-w-[500px] mx-auto flex justify-center items-center perspective-[1000px]"
        >
          {/* Inner 3D Container */}
          <motion.div
            animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* The Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_50px_rgba(0,245,255,0.4)] z-20">
              <img src="/my_picture.jpg" alt="Shahab" className="w-full h-full object-cover" />
            </div>

            {/* Glowing Rings (3D simulated) */}
            <div className="absolute inset-[-10%] rounded-full border border-secondary/30 transform translate-z-[-20px] shadow-[0_0_30px_rgba(255,215,0,0.1)]"></div>
            <div className="absolute inset-[-20%] rounded-full border border-primary/20 transform translate-z-[-40px] shadow-[0_0_40px_rgba(0,245,255,0.15)] animate-spin-slow"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-sm py-3 flex">
        <motion.div
          className="flex whitespace-nowrap shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={`m1-${i}`} className="text-sm font-display tracking-widest text-gray-500 mx-4">
              DEVELOPER <span className="text-primary mx-4">·</span>
              BUILDER <span className="text-primary mx-4">·</span>
              STUDENT <span className="text-primary mx-4">·</span>
              CREATOR <span className="text-primary mx-4">·</span>
              DESIGNER <span className="text-primary mx-4">·</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex whitespace-nowrap shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={`m2-${i}`} className="text-sm font-display tracking-widest text-gray-500 mx-4">
              DEVELOPER <span className="text-primary mx-4">·</span>
              BUILDER <span className="text-primary mx-4">·</span>
              STUDENT <span className="text-primary mx-4">·</span>
              CREATOR <span className="text-primary mx-4">·</span>
              DESIGNER <span className="text-primary mx-4">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
