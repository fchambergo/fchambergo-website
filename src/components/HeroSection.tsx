import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Software Engineer · Educator · Mentor
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hey, I'm{" "}
            <span className="text-gradient">Frank Chambergo</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Full-stack software engineer and technical educator based in the DC-Baltimore area.
            I build production software, design curriculum for top EdTech platforms, and mentor
            the next generation of developers — from bootcamp learners to Fortune 500 associates.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            {/* <a
              href="/Frank_Chambergo_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download Resume
            </a> */}
            <a
              href="https://www.linkedin.com/in/fchambergo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/fchambergo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
