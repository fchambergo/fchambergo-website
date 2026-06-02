import { motion } from "framer-motion";
import { Users, Target, Code, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    details:
      "With experience teaching at Capital One, Fullstack Academy, W3Schools, and more, I've helped hundreds of learners break into tech and advance their careers. Whether you're starting from scratch or preparing for senior-level interviews, I meet you where you are.",
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
    details:
      "Most people who start an online course never finish it. This program changes that. I work with you to set realistic goals, create a timeline, and hold you accountable every step of the way — so you actually finish what you started and walk away with real skills.",
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
    details:
      "Having designed curriculum for TripleTen, Coursera, and other top platforms, I know what makes technical education stick. I can help you build or improve courses that are engaging, up-to-date, and aligned with industry standards.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
              What I Offer
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Whether you need a mentor, accountability partner, or curriculum expert — I'm here to help you succeed.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border bg-card p-8 md:p-10 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <service.icon size={26} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.details}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                          <ArrowRight size={12} className="text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:underline"
                    >
                      Get Started <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
