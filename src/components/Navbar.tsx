import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/experience" },
  // { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const renderLink = (item: typeof navItems[0], onClick?: () => void) => {
    const isHash = item.href.startsWith("/#");
    const isHome = location.pathname === "/";

    if (isHash && isHome) {
      return (
        <a
          key={item.href}
          href={item.href.replace("/", "")}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          onClick={onClick}
        >
          {item.label}
        </a>
      );
    }

    if (isHash) {
      return (
        <Link
          key={item.href}
          to={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          onClick={onClick}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <Link
        key={item.href}
        to={item.href}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-gradient">
          FC
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderLink(item))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => renderLink(item, () => setMobileOpen(false)))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
