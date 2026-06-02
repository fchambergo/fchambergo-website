import { motion } from "framer-motion";

const skillLines = [
  { label: "Programming Languages", skills: "JavaScript, TypeScript, C#, Python" },
  { label: "Full-Stack", skills: "React, Next.js, Angular, Node.js, Express, .NET" },
  { label: "Databases", skills: "MongoDB, SQL Server, PostgreSQL" },
  { label: "Tools", skills: "GitHub Copilot, Cursor, VS Code" },
  { label: "Miscellaneous", skills: "Curriculum Development, Mentorship" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
            Tech Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          {skillLines.map((line) => (
            <p key={line.label} className="text-sm md:text-base leading-relaxed">
              <span className="font-display font-semibold text-primary">{line.label}:</span>{" "}
              <span className="text-muted-foreground">{line.skills}</span>
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
