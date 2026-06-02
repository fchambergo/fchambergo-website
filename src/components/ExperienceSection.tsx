import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: "engineering" | "education";
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "GEICO",
    role: "Software Engineer III — Full Stack",
    period: "Jan 2020 – Apr 2022",
    type: "engineering",
    highlights: [
      "Built Self Service Claim web & mobile application features using React, JavaScript, and C# .NET",
      "Contributed to the Telematics project for GEICO's DriveEasy mobile application",
      "Developed the Underwriting System's frontend and added RESTful endpoints with Angular & TypeScript",
    ],
  },
  {
    company: "Demonstrated Success, LLC",
    role: "Software Developer — Full Stack",
    period: "Jul 2022 – Aug 2025",
    type: "engineering",
    highlights: [
      "Supported the Educator Success Platform for customizable school-wide communication forms",
      "Built frontend & backend features with Angular, TypeScript, C# .NET, and SQL Server",
      "Conducted code reviews for fellow developers",
    ],
  },
  {
    company: "Capital One",
    role: "Instructor — Capital One Developer Academy",
    period: "May 2022 – Feb 2023",
    type: "education",
    highlights: [
      "Taught full-stack development to 130+ recent college graduates",
      "Facilitated React workshops, daily stand-ups, and 1-on-1 tutoring sessions",
      "Mentored 2nd-place hackathon team at the Software Engineering Summit",
    ],
  },
  {
    company: "TripleTen",
    role: "Curriculum Developer — Software Engineering",
    period: "Jul 2024 – Dec 2025",
    type: "education",
    highlights: [
      "Pioneered the inaugural AI in Web Development chapter covering GitHub Copilot and AI workflows",
      "Designed modules on ethical AI practices and 'vibe coding' methodologies",
      "Produced video tutorials and QA'd full-stack training materials",
    ],
  },
  {
    company: "Coursera",
    role: "Content Curator & SME — Software Development",
    period: "Oct 2025 – Mar 2026",
    type: "education",
    highlights: [
      "Curated Junior and Intermediate Software Developer learning pathways",
      "Aligned content with industry competency standards for Verified Skill Paths",
    ],
  },
  {
    company: "Flatiron School",
    role: "AI Engineering Apprentice",
    period: "Feb 2026 – Present",
    type: "engineering",
    highlights: [
      "AI Engineering Immersive — Experience Developer Track",
      "Expanding expertise in AI/ML engineering and modern AI tooling",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Experience
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors glow-gold"
              style={{ boxShadow: "none" }}
              whileHover={{ boxShadow: "var(--shadow-gold)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary shrink-0">
                  {exp.type === "engineering" ? (
                    <Briefcase size={18} className="text-primary" />
                  ) : (
                    <GraduationCap size={18} className="text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground"
        >
          <p className="font-display font-medium text-foreground">Also taught at:</p>
          {["W3Schools", "Fullstack Academy", "OpenClassrooms", "Upright Education", "Montgomery College"].map((org) => (
            <span key={org} className="text-muted-foreground">{org}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
