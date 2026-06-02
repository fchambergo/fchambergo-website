import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import capitalOneLogo from "@/assets/logos/capital-one.svg";

import udacityLogo from "@/assets/logos/udacity.svg";
import cheggLogo from "@/assets/logos/chegg.svg";
import courseraLogo from "@/assets/logos/coursera.svg";
import geicoLogo from "@/assets/logos/geico.svg";

const logos = [
  { src: geicoLogo, alt: "GEICO" },
  { src: capitalOneLogo, alt: "Capital One" },
  { src: courseraLogo, alt: "Coursera" },
  { src: udacityLogo, alt: "Udacity" },
  { src: cheggLogo, alt: "Chegg" },
];

const CompanyLogos = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Companies I've Worked At</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I've had the pleasure of working at some incredible organizations across software engineering and education.
            Here are a few of the companies I've had the honor of being part of throughout my career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-10 md:gap-14 flex-wrap"
        >
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center h-12 w-28">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            View All Experience
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;
