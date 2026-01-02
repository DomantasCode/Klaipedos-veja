import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pradžia', href: '#home' },
    { name: 'Paslaugos', href: '#services' },
    { name: 'Apie mus', href: '#about' },
    { name: 'Kaina', href: '#calculator' },
    { name: 'Darbai', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-nature-green p-2 rounded-full text-white transition-transform group-hover:scale-110">
            <Leaf size={24} />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-nature-dark' : 'text-white'}`}>
            Klaipėdos veja
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-nature-light transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="tel:+37060000000"
            className="flex items-center gap-2 bg-earth-brown text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            <Phone size={18} />
            <span>+370 600 00000</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-nature-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#1a3c28' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+37060000000"
            className="flex items-center gap-2 bg-earth-brown text-white px-8 py-3 rounded-full font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone size={20} />
            <span>Skambinti</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;