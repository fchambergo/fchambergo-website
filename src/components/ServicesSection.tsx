import { motion } from "framer-motion";
import { Users, Target, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "1-on-1 Mentoring",
    description:
      "Personalized mentoring sessions tailored to your goals — whether you're learning to code, preparing for interviews, or leveling up as a professional developer. I bring years of experience from bootcamp instruction and enterprise engineering.",
    features: [
      "Weekly video sessions",
      "Code reviews & portfolio feedback",
      "Career guidance & interview prep",
      "Customized learning roadmap",
    ],
  },
  {
    icon: Target,
    title: "Accountability Program",
    description:
      "Struggling to finish that online course or tutorial? My accountability program keeps you on track with structured check-ins, milestone tracking, and real support to make sure you actually complete your technical courses.",
    features: [
      "Structured milestone tracking",
      "Weekly check-ins & progress reviews",
      "Deadline-driven learning schedule",
      "Community of fellow learners",
    ],
  },
  {
    icon: Code,
    title: "Curriculum Consulting",
    description:
      "I help EdTech companies and bootcamps build world-class software engineering curricula. From course design to content QA, I bring deep expertise in modern web development and AI-integrated education.",
    features: [
      "Course architecture & design",
      "Technical content review & QA",
      "Video lesson production",
      "AI-in-education strategy",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
            What I Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group rounded-xl border border-border bg-background p-8 hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <ArrowRight size={12} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:underline mt-auto"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
