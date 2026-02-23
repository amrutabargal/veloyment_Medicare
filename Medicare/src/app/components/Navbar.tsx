import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Departments', path: '/departments' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Services', path: '/#services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      // If we're on homepage, scroll to section
      if (location.pathname === '/') {
        const element = document.getElementById(path.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(2));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M+</span>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-foreground">MediCare Plus</h1>
                <p className="text-xs text-muted-foreground">Excellence in Healthcare</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`transition-colors duration-200 relative group ${
                  isActive(item.path) ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+911800123456">
              <Button variant="ghost" className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-456</span>
              </Button>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 flex items-center gap-2"
              onClick={() => navigate('/appointment')}
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActive(item.path) ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <a href="tel:+911800123456" className="block">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-green-600 border-green-200 hover:bg-green-50">
                  <Phone className="w-4 h-4" />
                  Call: +91 1800-123-456
                </Button>
              </a>
              <Button
                className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                onClick={() => navigate('/appointment')}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
