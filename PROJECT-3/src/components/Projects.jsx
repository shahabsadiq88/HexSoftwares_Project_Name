import { motion } from 'framer-motion';
import { ExternalLink, Palette, ArrowRight } from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Behance = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.375 5.426l-7.442.012c.118 1.83 1.393 3.655 3.329 3.655 1.579 0 2.723-1.015 3.109-1.385l.828 1.087zm-7.643-4.502l4.887-.008c-.287-1.371-1.282-2.316-2.508-2.316-1.554 0-2.228 1.135-2.379 2.324zm-2.083.502c0 2.76-1.196 5.4-5.6 5.4h-8.4v-16h8.049c3.924 0 5.013 2.115 5.013 4.296 0 1.637-.621 2.822-2.073 3.42 1.688.423 2.898 1.705 3.011 3.522v-.638zm-10-8v4.949h3.766c1.696 0 2.627-.852 2.627-2.456 0-1.849-1.229-2.493-2.613-2.493h-3.78zm0 11h4.156c1.942 0 3.011-.994 3.011-2.825 0-1.921-1.332-2.738-3.076-2.738h-4.091v5.563z"/>
  </svg>
);

const projects = [
  {
    title: 'UniMarket',
    featured: true,
    desc: 'A comprehensive campus marketplace where students can buy, sell, and trade items securely. Features real-time listings, saved items, category filtering, and user authentication powered by Supabase.',
    tech: ['React', 'Supabase', 'TailwindCSS'],
    link: 'https://unimarket-phi.vercel.app',
    github: '#',
    imageUrl: '/projects/unimarket.png',
    fallback: 'linear-gradient(135deg, #00f5ff20 0%, #0a0a0a 100%)',
  },
  {
    title: 'Store Management APP',
    featured: false,
    desc: 'A full-featured electric store management system with inventory tracking, invoice generation, and a mobile-responsive internal dashboard for store owners.',
    tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    link: 'https://binhayat.vercel.app',
    github: '#',
    imageUrl: '/projects/binhayat.png',
    fallback: 'linear-gradient(135deg, #ffd70020 0%, #0a0a0a 100%)',
  },
  {
    title: 'React Todo App',
    featured: false,
    desc: 'A clean, minimal task manager with task filtering by status, dark mode toggle, and smooth UI interactions — all built with React and local state management.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://react-todo-app-weld-three.vercel.app',
    github: '#',
    imageUrl: '/projects/todo.png',
    fallback: 'linear-gradient(135deg, #00ff5520 0%, #0a0a0a 100%)',
  },
  {
    title: 'Portfolio V2',
    featured: false,
    desc: 'This very portfolio — built with React, TailwindCSS, and Framer Motion. Features a dark glassmorphism design, smooth scroll animations, and a custom cursor.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    link: '#',
    github: '#',
    imageUrl: null,
    fallback: 'linear-gradient(135deg, #a855f720 0%, #0a0a0a 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Things I've Built</h2>
          <div className="h-[1px] bg-white/20 flex-1 ml-4 mt-2 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {projects.map((project, i) => {
            if (project.featured) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="col-span-1 md:col-span-12 glass-pane rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] relative"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Project Image */}
                    <div className="h-64 md:h-full w-full overflow-hidden relative">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                          style={{ background: project.fallback }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:block hidden" />
                    </div>

                    {/* Project Info */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-black/40">
                      <div className="text-primary font-mono text-sm mb-4">Featured Project</div>
                      <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((t, j) => (
                          <span key={j} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        {project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                          </a>
                        )}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 font-medium">
                          <ExternalLink size={24} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-1 md:col-span-6 lg:col-span-4 glass-pane rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col"
              >
                {/* Image / Gradient */}
                <div className="h-48 w-full overflow-hidden relative">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: project.fallback }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col -mt-10 relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, j) => (
                       <span key={j} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* UI/UX Design Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative overflow-hidden rounded-[40px] glass-pane p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-[0_0_40px_rgba(0,84,255,0.15)] transition-shadow duration-500"
        >
          {/* Background Gradient & Glows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0054ff]/10 to-transparent opacity-50"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#0054ff] blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0054ff]/20 flex items-center justify-center backdrop-blur-md border border-[#0054ff]/30">
                <Palette className="w-6 h-6 text-[#0054ff]" />
              </div>
              <span className="text-[#0054ff] font-mono text-sm tracking-widest uppercase font-bold">UI/UX Design</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              I also design <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0054ff]">beautiful interfaces.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-0">
              Beyond coding, I'm passionate about crafting intuitive, user-centric designs and prototypes in Figma. Explore my creative process and design case studies on Behance.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a 
              href="https://www.behance.net/mshahabsadiq1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#0054ff] hover:bg-[#0042cc] text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,84,255,0.5)] group/btn"
            >
              <Behance size={24} />
              <span>View Behance Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
