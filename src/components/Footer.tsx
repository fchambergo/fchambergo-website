import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Frank Chambergo. All rights reserved.</p>
        <div className="flex gap-6">
          {isHome ? (
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          ) : (
            <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
          )}
          <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
          {/* <Link to="/services" className="hover:text-primary transition-colors">Services</Link> */}
          {isHome ? (
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          ) : (
            <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
