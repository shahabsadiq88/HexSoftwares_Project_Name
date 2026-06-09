import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Supabase", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git / GitHub", "Vercel", "Figma", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Arsenal</h2>
        <p className="text-gray-400 text-lg">Technologies and tools I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-pane p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Ambient background glow for each card */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 blur-[80px] rounded-full pointer-events-none opacity-30 
              ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-purple-500'}`} 
            />

            <h3 className="text-2xl font-display font-bold mb-8 text-white">{group.category}</h3>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i * 0.2) + (j * 0.1) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 shadow-lg cursor-default hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
