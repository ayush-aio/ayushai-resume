import React, { useState, useEffect, useCallback } from 'react';
import { personalInfo, navLinks } from '../data/mockData';
import { Menu, X } from 'lucide-react';

const ArrowSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5595 5.37797L9.93453 2.75297C9.85244 2.67088 9.7411 2.62476 9.625 2.62476C9.5089 2.62476 9.39756 2.67088 9.31547 2.75297C9.23338 2.83506 9.18726 2.9464 9.18726 3.0625C9.18726 3.1786 9.23338 3.28994 9.31547 3.37203L11.194 5.25H7C5.49207 5.25159 4.04636 5.85132 2.98009 6.91759C1.91382 7.98386 1.31409 9.42957 1.3125 10.9375C1.3125 11.0535 1.35859 11.1648 1.44064 11.2469C1.52269 11.3289 1.63397 11.375 1.75 11.375C1.86603 11.375 1.97731 11.3289 2.05936 11.2469C2.14141 11.1648 2.1875 11.0535 2.1875 10.9375C2.18895 9.66159 2.69644 8.43835 3.59865 7.53615C4.50085 6.63394 5.72409 6.12645 7 6.125H11.194L9.31547 8.00297C9.23338 8.08506 9.18726 8.1964 9.18726 8.3125C9.18726 8.4286 9.23338 8.53994 9.31547 8.62203C9.39756 8.70412 9.5089 8.75024 9.625 8.75024C9.7411 8.75024 9.85244 8.70412 9.93453 8.62203L12.5595 5.99703C12.6002 5.9564 12.6325 5.90815 12.6545 5.85504C12.6765 5.80193 12.6878 5.74499 12.6878 5.6875C12.6878 5.63001 12.6765 5.57308 12.6545 5.51996C12.6325 5.46685 12.6002 5.4186 12.5595 5.37797Z" fill="#121314"/>
  </svg>
);

const MobileDrawer = ({ isOpen, onClose, onNavigate }) => (
  <div
    className={`fixed inset-0 z-[60] bg-[#0a0b0d] transition-transform duration-500 ease-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } md:hidden`}
  >
    <div className="flex items-center justify-between px-6 h-[72px]">
      <span className="text-[#F6F3F0] font-instrument text-lg font-semibold">
        Ayush Mohan Tripathi
      </span>
      <button
        className="text-[#F6F3F0] p-2"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={20} />
      </button>
    </div>
    <div className="flex flex-col px-6 pt-8 gap-6">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => onNavigate(e, link.href)}
          className="text-[#F6F3F0]/80 hover:text-[#F6F3F0] text-2xl font-instrument font-medium transition-colors"
        >
          {link.label}
        </a>
      ))}
      <div className="pt-4 border-t border-white/10">
        <a
          href={`mailto:${personalInfo.email}`}
          className="deccan-btn inline-flex"
        >
          Get in Touch
          <ArrowSvg />
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0b0d]/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 flex items-center justify-between h-[68px]">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
          >
            <span className="text-[#F6F3F0] font-instrument text-lg font-semibold tracking-tight">
              Ayush Mohan Tripathi
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#F6F3F0]/50 hover:text-[#F6F3F0] text-[13px] font-inter font-medium transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a href={`mailto:${personalInfo.email}`} className="deccan-btn">
              Get in Touch
              <ArrowSvg />
            </a>
          </div>

          <button
            className="md:hidden text-[#F6F3F0] p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};

export default Navbar;
