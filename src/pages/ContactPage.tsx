import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
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
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
              Let's Connect
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Whether you're looking for a mentor, need help finishing that course, or want to collaborate on curriculum —
              I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <a
                href="mailto:frchambergo@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    Email <span>- Preferred</span>
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    frchambergo@gmail.com
                  </p>
                </div>
              </a>

              {/* <a
                href="tel:+12408556729"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    Phone <span>- Leave a message!</span>
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    (240) 855-6729
                  </p>
                </div>
              </a> */}

              <a
                href="https://www.linkedin.com/in/fchambergo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">LinkedIn - Connect & Send a DM!</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/fchambergo
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
