import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="vipers-main-header"
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-neutral-900 shadow-2xl shadow-black/80'
          : 'bg-black/60 backdrop-blur-sm border-neutral-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark & Monospace System Tag */}
        <div className="flex items-center gap-4">
          <button
            id="brand-home-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-xs border border-neutral-800 bg-[#080808] flex items-center justify-center text-white group-hover:border-[#FFC400] transition-colors">
              <Shield className="w-4 h-4 text-[#FFC400]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-[0.25em] text-white uppercase leading-none">
                VIPERS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mt-0.5">
                PERFORMANCE LAB
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-neutral-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC400] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC400]"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-400">
              [ SYSTEM: ACTIVE ]
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider">
          <button
            id="nav-doctrine-btn"
            onClick={() => scrollToSection('doctrine')}
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest hover:text-[#FFC400]"
          >
            02 // DOCTRINE
          </button>
          <button
            id="nav-engine-btn"
            onClick={() => scrollToSection('engine')}
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest hover:text-[#FFC400]"
          >
            03 // ENGINE
          </button>
          <button
            id="nav-architects-btn"
            onClick={() => scrollToSection('architects')}
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest hover:text-[#FFC400]"
          >
            04 // ARCHITECTS
          </button>
          <button
            id="nav-arc-btn"
            onClick={() => scrollToSection('sovereign-arc')}
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest hover:text-[#FFC400]"
          >
            05 // THE ARC
          </button>
        </nav>

        {/* Action Anchor to Cohort 01 Audit */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="nav-cohort-audit-btn"
            onClick={() => scrollToSection('cohort-audit')}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase bg-[#080808] text-white border border-neutral-800 hover:border-[#FFC400] hover:text-[#FFC400] transition-all duration-200 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] group-hover:scale-125 transition-transform" />
            <span>COHORT 01 AUDIT</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FFC400] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white border border-neutral-900 bg-[#080808]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden border-b border-neutral-900 bg-black/98 px-6 py-6 space-y-4 font-mono text-xs tracking-wider"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC400] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC400]"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-400">
              [ SYSTEM: ACTIVE // REVISION 01 ]
            </span>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <button
              id="mobile-nav-doctrine"
              onClick={() => scrollToSection('doctrine')}
              className="text-left text-neutral-400 hover:text-[#FFC400] py-2 transition-colors border-b border-neutral-950"
            >
              02 // THE VIPERS DOCTRINE
            </button>
            <button
              id="mobile-nav-engine"
              onClick={() => scrollToSection('engine')}
              className="text-left text-neutral-400 hover:text-[#FFC400] py-2 transition-colors border-b border-neutral-950"
            >
              03 // BIOMECHANICAL ENGINE
            </button>
            <button
              id="mobile-nav-architects"
              onClick={() => scrollToSection('architects')}
              className="text-left text-neutral-400 hover:text-[#FFC400] py-2 transition-colors border-b border-neutral-950"
            >
              04 // THE ARCHITECTS
            </button>
            <button
              id="mobile-nav-arc"
              onClick={() => scrollToSection('sovereign-arc')}
              className="text-left text-neutral-400 hover:text-[#FFC400] py-2 transition-colors border-b border-neutral-950"
            >
              05 // THE SOVEREIGN ARC
            </button>
          </div>

          <button
            id="mobile-nav-cohort-audit"
            onClick={() => scrollToSection('cohort-audit')}
            className="w-full text-center py-3 mt-4 bg-[#FFC400] text-black font-semibold tracking-widest uppercase hover:bg-[#e0ad00] transition-colors"
          >
            ENTER THE STANDARD // AUDIT
          </button>
        </div>
      )}
    </header>
  );
};
