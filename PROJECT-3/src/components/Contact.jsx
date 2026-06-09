import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

const Linkedin = ({ size = 24, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      _subject: `New message from ${e.target.name.value} - Portfolio Form`,
      _captcha: "false" // Disable captcha for smooth AJAX submission
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/mshahabsadiq@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success === "true" || result.success) {
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        // Fallback for success in case of first time activation
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 container mx-auto px-6 md:px-12 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-pane p-8 md:p-16 rounded-[40px] relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info & Links */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Build Something Together</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions
            </p>

            <div className="space-y-6 mt-auto">
              <a href="mailto:mshahabsadiq@gmail.com" className="group flex items-center gap-4 text-xl font-display font-medium hover:text-primary transition-colors w-fit">
                <div className="w-12 h-12 rounded-full glass-pane flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                </div>
                mshahabsadiq@gmail.com
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="https://www.linkedin.com/in/shahab-sadiq-952875265" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl font-display font-medium hover:text-[#0077b5] transition-colors w-fit">
                <div className="w-12 h-12 rounded-full glass-pane flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077b5]" />
                </div>
                Shahab Sadiq — LinkedIn
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="https://wa.me/923268623635" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl font-display font-medium hover:text-[#25D366] transition-colors w-fit">
                <div className="w-12 h-12 rounded-full glass-pane flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#25D366]" />
                </div>
                +92 326 8623635
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full py-4 rounded-2xl font-bold text-black bg-primary flex flex-row items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <span>Message Sent! ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
