import { motion } from 'framer-motion';
import { Code2, Layers, Rocket } from 'lucide-react';

export default function About() {
  const stats = [
    { num: '5+', label: 'Projects' },
    { num: '2+', label: 'Years Designing' },
    { num: '5+', label: 'Technologies' },
  ];

  const whatIDo = [
    { title: 'Web Development', desc: 'Crafting responsive, beautiful SPAs with React & Tailwind.', icon: Code2 },
    { title: 'Full-Stack Apps', desc: 'Building end-to-end systems with modern back-end tools.', icon: Layers },
    { title: 'Builder & Creator', desc: 'Turning ideas into real, functioning products.', icon: Rocket },
  ];

  return (
    <section id="about" className="py-24 relative z-10 container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left Side Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm Shahab, a passionate CS & IT student who loves building intuitive, visually stunning 
              applications. My journey started with a curiosity for how the web works, which quickly 
              evolved into a deep passion for software engineering, design, and AI tools.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              I believe that great software shouldn't just work—it should feel magical. I strive to blend 
              robust back-end logic with captivating front-end experiences.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="text-4xl font-display font-bold text-white mb-2"
                >
                  {stat.num}
                </motion.div>
                <div className="text-sm tracking-wider text-primary uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side What I do */}
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-semibold mb-6">What I Do</h3>
          {whatIDo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-pane p-6 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
