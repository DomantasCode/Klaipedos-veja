import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check immediately on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="#home"
          className={`flex items-center gap-2 font-serif text-2xl font-bold transition-colors ${isScrolled ? 'text-nature-dark' : 'text-white'
            }`}
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <Leaf className={`w-6 h-6 ${isScrolled ? 'text-nature-green' : 'text-nature-light'}`} />
          Klaipėdos veja
        </a>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${activeSection === link.href.substring(1)
                ? 'text-nature-green'
                : isScrolled ? 'text-gray-600 hover:text-nature-green' : 'text-white/90 hover:text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-nature-green transition-all duration-300 group-hover:w-full ${activeSection === link.href.substring(1) ? 'w-full' : ''
                }`}></span>
            </a>
          ))}
        </nav>

        {/* Phone Button - Right */}
        <div className="hidden lg:block">
          <a
            href={CONTACT_INFO.phone.href}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${isScrolled
              ? 'bg-earth-brown text-white hover:bg-nature-green shadow-md hover:shadow-lg'
              : 'bg-earth-brown text-white hover:bg-nature-green shadow-md hover:shadow-lg'
              }`}
          >
            <Phone size={16} />
            <span>{CONTACT_INFO.phone.display}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-nature-dark' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-nature-dark" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed top-0 left-0 w-screen h-screen bg-white z-[150] overflow-y-auto transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

        {/* Mobile Menu Header */}
        <div className="sticky top-0 left-0 right-0 p-6 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-stone-100 z-10">
          <a
            href="#home"
            className="flex items-center gap-2 font-serif text-xl font-bold text-nature-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            <Leaf className="w-5 h-5 text-nature-green" />
            Klaipėdos veja
          </a>
          <button
            className="p-2 text-stone-500 hover:text-nature-dark transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-start pt-12 pb-12 gap-8 px-6 min-h-[calc(100vh-80px)]">
          <nav className="flex flex-col items-center gap-6 w-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-2xl font-serif font-bold transition-colors ${activeSection === link.href.substring(1) ? 'text-nature-green' : 'text-nature-dark hover:text-nature-green'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="w-full max-w-xs h-px bg-stone-100 my-4"></div>

          {/* Mobile Footer/Contact */}
          <div className="flex flex-col items-center gap-4 w-full mt-8">
            <a
              href={CONTACT_INFO.phone.href}
              className="flex items-center justify-center gap-3 w-full max-w-xs px-6 py-4 bg-earth-brown text-white rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform hover:bg-stone-800"
            >
              <Phone size={20} />
              <span>{CONTACT_INFO.phone.display}</span>
            </a>

            <a
              href={CONTACT_INFO.socials.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full max-w-xs px-6 py-4 bg-white border-2 border-stone-100 text-nature-dark rounded-xl font-bold text-lg shadow-sm active:scale-95 transition-transform hover:border-nature-green hover:text-nature-green"
            >
              <CONTACT_INFO.socials.facebook.icon size={20} />
              <span>Sekite mus Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;