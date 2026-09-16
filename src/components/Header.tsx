import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

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
          <a
            href="#"
            id="brand-home-link"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer transition-opacity hover:opacity-80 flex items-center"
            aria-label="Return to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1179 191" className="h-6 sm:h-7 w-auto object-contain" aria-hidden="true">
              {/* Letter I */}
              <path d="M285.32 13.14C290.71 11.72 305.21 13.17 311.64 13.04C313.83 13 318.62 11.94 320.18 13.98C321.37 15.55 320.82 19.15 320.83 21.01C320.87 27.07 320.85 33.14 320.86 39.2C320.86 62.73 320.88 86.27 320.88 109.8C320.88 121.2 321.06 132.62 320.91 144.02C320.87 146.81 322.23 153.8 318.57 154.67C311.4 156.36 300.56 154.93 293.02 154.93C290.68 154.93 286.15 155.82 284.49 153.64C283.13 151.86 283.77 148.7 283.77 146.62C283.77 140.55 283.69 134.49 283.69 128.43C283.69 105.33 283.41 82.22 283.41 59.12C283.41 47.43 283.28 35.73 283.28 24.04C283.28 21.49 281.93 14.04 285.32 13.14Z" fill="#FFFFFF" stroke="none" />
              {/* Letters V, P, E, R, S */}
              <path d="M147.48 113.14C152.07 109.91 162.06 92.64 165.67 87.05C174.85 72.82 185.04 58.96 193.48 44.28C197.94 36.5 206.21 20.6 212.33 14.61C214.43 12.56 218.44 13.22 221.12 13.22C228.62 13.22 236.14 13.27 243.64 13.08C246.39 13.01 251.25 11.94 253 14.51C251.82 19.92 240.88 33.79 237.57 39.84C222.4 67.61 202.44 93.98 186.14 121.4C181.17 129.77 175.82 137.89 170.49 146.02C168.86 148.51 166.55 153.69 163.41 154.45C157.23 155.96 145.56 154.64 138.82 154.64C135.94 154.64 131.69 155.37 129.05 153.99C126.06 152.43 124.21 147.66 122.6 144.86C119.15 138.89 115.09 133.25 111.51 127.36C97.18 103.77 83.03 79.9 67.54 57C60.58 46.71 55.02 35.71 47.89 25.52C45.8 22.53 40.53 17.37 41.36 13.64C44.66 11.78 56.19 13.09 60.42 13.14C64.99 13.19 80.23 12.03 83.47 13.76C88.03 16.2 93.73 28.44 96.61 33.1C107.72 51.05 118.01 69.47 129.65 87.15C133.64 93.22 137.64 99.57 141.2 105.9C142.69 108.54 144.27 112.53 147.48 113.14ZM365.05 13.18C369.33 12.14 374.81 13.02 379.21 13.02C389.17 13.02 399.14 13.01 409.1 13.08C428.3 13.21 447.5 13.04 466.71 13.04C478.98 13.04 492.2 12.18 503.96 16.43C528.45 25.3 542.11 54.43 532.64 78.95C519.83 112.11 479.69 108.48 451.11 107.98C443.03 107.83 443.03 107.99 426.86 107.89C420.76 107.82 408.93 106.29 403.45 107.74C399.9 108.68 401.47 116.04 401.47 118.9C401.47 126.69 401.44 134.49 401.36 142.29C401.33 145.47 402.16 149.92 400.86 152.9C399.65 155.67 395.47 154.83 393.07 154.83C385.85 154.83 378.63 154.88 371.41 154.82C369.16 154.8 365.45 155.59 364.09 153.29C362.75 151.03 363.62 146.99 363.62 144.45C363.62 137.09 363.51 129.72 363.56 122.36C363.62 111.39 363.52 100.42 363.5 89.44C363.49 86.36 362.19 79.66 364.08 77.13C365.38 75.39 368.22 75.84 370.12 75.88C375.31 75.99 380.51 76 385.71 76C407.51 76 429.31 76.12 451.11 76.22C454.43 76.24 457.75 76.24 461.07 76.25C472.28 76.32 501.79 79.65 498.73 60.29C496.12 43.79 476.62 45.4 464.11 45.4C441.88 45.4 419.64 44.87 397.4 44.88C391.02 44.89 369.91 46.05 365.03 44.46C362.48 43.63 362.74 40.45 362.78 38.33C362.88 32.12 362.63 25.92 362.7 19.71C362.72 17.4 362.11 13.9 365.05 13.18ZM569.9 13.18C581.08 11.71 596.29 13.09 607.91 13.06C634.04 13 660.17 13.05 686.31 13.05C696.12 13.05 705.94 13.07 715.76 13.06C718.94 13.06 724.83 11.93 727.59 13.73C729.45 14.94 728.87 18.67 728.87 20.57C728.87 26.91 730.03 36.26 728.68 42.26C727.77 46.29 722.76 45.14 719.66 45.15C710.42 45.2 701.18 45.04 691.94 45.04C663.93 45.04 635.92 44.72 607.91 44.69C598.96 44.68 590.01 44.69 581.05 44.69C577.44 44.68 572.49 45.58 569.05 44.45C566.28 43.54 566.86 39.72 566.85 37.47C566.83 31.4 566.77 25.32 566.76 19.25C566.75 16.56 566.6 13.62 569.9 13.18ZM907.9 103.74C908.63 108.09 914.6 112.18 917.47 115.35C919.61 117.72 921.13 120.59 923.23 123.01C928.56 129.15 934.66 134.73 940.12 140.78C942.45 143.36 949.62 149.56 950.09 152.7C948.89 154.74 946.18 154.28 944.02 154.34C938.55 154.48 933.04 154.36 927.56 154.36C921.34 154.36 912.64 156.06 906.74 153.84C902.64 152.3 900.11 147.72 897.2 144.71C890.83 138.09 884.48 131.44 877.96 124.97C872.81 119.86 865.82 107.05 858.1 106.33C844.99 105.12 831.15 106.33 817.98 106.39C815.1 106.41 806.85 104.94 805.44 108.29C804.25 111.13 805.18 115.84 805.18 118.9C805.18 126.84 805.08 134.78 805.07 142.72C805.07 145.46 806.38 152.81 803.4 154.35C801.28 155.45 797.79 154.81 795.46 154.81C789.11 154.81 782.75 154.74 776.41 154.83C774.04 154.87 769.66 155.7 768.04 153.45C766.47 151.27 767.52 138.27 767.52 134.92C767.5 121.78 767.52 108.65 767.54 95.51C767.54 90.85 766.36 82.09 767.72 77.91C768.68 74.93 773.2 75.74 775.53 75.72C783.18 75.63 790.84 75.72 798.49 75.72C825.77 75.72 853.07 75.97 880.35 75.7C889.95 75.6 904.34 73.69 904.66 61.28C905.03 46.54 889.66 45.32 878.62 45.24C849.03 45.02 819.42 44.88 789.83 44.87C785.55 44.87 771.98 45.93 768.81 44.4C766.38 43.22 767.01 40.09 767.03 37.9C767.09 32.27 767.01 26.64 767.01 21.01C767.01 19.24 766.44 16.08 767.51 14.55C768.58 13.02 771.3 13.19 772.93 13.16C778.13 13.06 783.33 13.16 788.53 13.16C809.75 13.16 830.97 13.08 852.2 13.08C885.21 13.08 925.99 5.96 940.38 43.95C942.41 49.29 943.39 55.14 943.25 60.86C943.08 67.83 941.58 74.38 938.46 80.65C934.76 88.05 927.18 93.88 920.04 97.72C916.56 99.59 910.11 100.38 907.9 103.74ZM1023.41 13.2C1009.41 14.18 995.21 19.41 985.45 29.73C971.72 44.23 973.13 69.16 988.5 81.58C998.15 89.37 1011.34 91.96 1023.29 93.54C1042.21 96.04 1061.48 96.52 1080.34 99.4C1088.34 100.62 1109.9 101.54 1108.27 114.11C1106.65 126.65 1089.55 125.2 1080.46 125.15C1058.23 125.02 1035.99 125.13 1013.76 125.13C1007.55 125.13 1001.34 125.13 995.13 125.09C992.71 125.07 989.07 124.45 986.84 125.53C984.63 126.59 985.12 129.89 985.1 131.89C985.06 135.46 984.09 151.32 985.4 153.52C986.91 156.04 992.28 155.07 994.7 155.07C1003.94 155.08 1013.18 155.07 1022.42 155.07C1041.91 155.07 1061.41 155.12 1080.89 155.24C1099.69 155.36 1120.79 154.61 1135.59 141.33C1152.06 126.54 1153.06 95.35 1132.68 83.35C1109.66 69.8 1074.67 69.86 1048.41 67.55C1040.27 66.83 1014.97 66.7 1015.01 55.23C1015.04 45.41 1029.99 45 1036.71 44.96C1061.4 44.78 1086.09 45.2 1110.78 45.21C1117.71 45.21 1124.64 45.34 1131.57 45.28C1134.26 45.25 1137.7 45.61 1138.25 42.22C1139.31 35.65 1138.45 28.11 1138.47 21.44C1138.47 19.37 1139.15 15.57 1137.5 14C1135.69 12.26 1131.69 13.07 1129.41 13.07C1122.48 13.07 1115.55 13.12 1108.62 13.12C1089.85 13.12 1071.08 12.99 1052.31 12.99C1042.7 12.99 1033 12.53 1023.41 13.2ZM570.73 72.09C563.72 72.53 566.33 84.4 566.34 89.44C566.38 105.18 566.29 120.92 566.29 136.65C566.29 139.66 565.28 151.93 566.77 153.76C568.41 155.78 572.73 154.97 574.99 155C582.78 155.09 590.58 155.05 598.38 155.06C630 155.1 661.62 155.27 693.24 155.27C702.04 155.27 710.85 155.19 719.66 155.25C722.13 155.27 727.14 156.24 728.57 153.57C729.97 150.94 729 136.18 728.96 132.32C728.94 130.28 729.53 127.31 727.42 126.06C725.39 124.86 721.93 125.48 719.66 125.46C713.45 125.41 707.24 125.34 701.03 125.34C678.51 125.34 655.99 125.34 633.46 125.34C626.39 125.34 619.31 125.34 612.24 125.34C610.14 125.34 606.24 126.06 604.96 123.79C603.66 121.46 604.56 116.75 604.56 114.13C604.56 110.49 603.14 103.35 604.97 100.16C606.08 98.22 609.53 98.76 611.37 98.75C617.29 98.71 623.21 98.72 629.13 98.75C647.18 98.85 665.23 98.86 683.27 98.96C686.5 98.98 699.78 100.03 701.62 98.04C702.94 96.61 702.34 93.8 702.34 92.04C702.33 86.43 703.4 79.96 702.34 74.45C701.69 71.05 697.56 71.83 694.97 71.85C687.17 71.88 679.38 71.8 671.58 71.83C649.64 71.92 627.69 71.9 605.74 71.9C594.14 71.9 582.31 71.37 570.73 72.09Z" fill="#FFFFFF" stroke="none" />
            </svg>
          </a>

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
            className="flex items-center text-left group transition-opacity hover:opacity-90"
            aria-label="VIPERS Home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1179 191" className="h-6 sm:h-7 w-auto object-contain transition-opacity group-hover:opacity-90" aria-hidden="true">
              {/* Letter I */}
              <path d="M285.32 13.14C290.71 11.72 305.21 13.17 311.64 13.04C313.83 13 318.62 11.94 320.18 13.98C321.37 15.55 320.82 19.15 320.83 21.01C320.87 27.07 320.85 33.14 320.86 39.2C320.86 62.73 320.88 86.27 320.88 109.8C320.88 121.2 321.06 132.62 320.91 144.02C320.87 146.81 322.23 153.8 318.57 154.67C311.4 156.36 300.56 154.93 293.02 154.93C290.68 154.93 286.15 155.82 284.49 153.64C283.13 151.86 283.77 148.7 283.77 146.62C283.77 140.55 283.69 134.49 283.69 128.43C283.69 105.33 283.41 82.22 283.41 59.12C283.41 47.43 283.28 35.73 283.28 24.04C283.28 21.49 281.93 14.04 285.32 13.14Z" fill="#FFFFFF" stroke="none" />
              {/* Letters V, P, E, R, S */}
              <path d="M147.48 113.14C152.07 109.91 162.06 92.64 165.67 87.05C174.85 72.82 185.04 58.96 193.48 44.28C197.94 36.5 206.21 20.6 212.33 14.61C214.43 12.56 218.44 13.22 221.12 13.22C228.62 13.22 236.14 13.27 243.64 13.08C246.39 13.01 251.25 11.94 253 14.51C251.82 19.92 240.88 33.79 237.57 39.84C222.4 67.61 202.44 93.98 186.14 121.4C181.17 129.77 175.82 137.89 170.49 146.02C168.86 148.51 166.55 153.69 163.41 154.45C157.23 155.96 145.56 154.64 138.82 154.64C135.94 154.64 131.69 155.37 129.05 153.99C126.06 152.43 124.21 147.66 122.6 144.86C119.15 138.89 115.09 133.25 111.51 127.36C97.18 103.77 83.03 79.9 67.54 57C60.58 46.71 55.02 35.71 47.89 25.52C45.8 22.53 40.53 17.37 41.36 13.64C44.66 11.78 56.19 13.09 60.42 13.14C64.99 13.19 80.23 12.03 83.47 13.76C88.03 16.2 93.73 28.44 96.61 33.1C107.72 51.05 118.01 69.47 129.65 87.15C133.64 93.22 137.64 99.57 141.2 105.9C142.69 108.54 144.27 112.53 147.48 113.14ZM365.05 13.18C369.33 12.14 374.81 13.02 379.21 13.02C389.17 13.02 399.14 13.01 409.1 13.08C428.3 13.21 447.5 13.04 466.71 13.04C478.98 13.04 492.2 12.18 503.96 16.43C528.45 25.3 542.11 54.43 532.64 78.95C519.83 112.11 479.69 108.48 451.11 107.98C443.03 107.83 443.03 107.99 426.86 107.89C420.76 107.82 408.93 106.29 403.45 107.74C399.9 108.68 401.47 116.04 401.47 118.9C401.47 126.69 401.44 134.49 401.36 142.29C401.33 145.47 402.16 149.92 400.86 152.9C399.65 155.67 395.47 154.83 393.07 154.83C385.85 154.83 378.63 154.88 371.41 154.82C369.16 154.8 365.45 155.59 364.09 153.29C362.75 151.03 363.62 146.99 363.62 144.45C363.62 137.09 363.51 129.72 363.56 122.36C363.62 111.39 363.52 100.42 363.5 89.44C363.49 86.36 362.19 79.66 364.08 77.13C365.38 75.39 368.22 75.84 370.12 75.88C375.31 75.99 380.51 76 385.71 76C407.51 76 429.31 76.12 451.11 76.22C454.43 76.24 457.75 76.24 461.07 76.25C472.28 76.32 501.79 79.65 498.73 60.29C496.12 43.79 476.62 45.4 464.11 45.4C441.88 45.4 419.64 44.87 397.4 44.88C391.02 44.89 369.91 46.05 365.03 44.46C362.48 43.63 362.74 40.45 362.78 38.33C362.88 32.12 362.63 25.92 362.7 19.71C362.72 17.4 362.11 13.9 365.05 13.18ZM569.9 13.18C581.08 11.71 596.29 13.09 607.91 13.06C634.04 13 660.17 13.05 686.31 13.05C696.12 13.05 705.94 13.07 715.76 13.06C718.94 13.06 724.83 11.93 727.59 13.73C729.45 14.94 728.87 18.67 728.87 20.57C728.87 26.91 730.03 36.26 728.68 42.26C727.77 46.29 722.76 45.14 719.66 45.15C710.42 45.2 701.18 45.04 691.94 45.04C663.93 45.04 635.92 44.72 607.91 44.69C598.96 44.68 590.01 44.69 581.05 44.69C577.44 44.68 572.49 45.58 569.05 44.45C566.28 43.54 566.86 39.72 566.85 37.47C566.83 31.4 566.77 25.32 566.76 19.25C566.75 16.56 566.6 13.62 569.9 13.18ZM907.9 103.74C908.63 108.09 914.6 112.18 917.47 115.35C919.61 117.72 921.13 120.59 923.23 123.01C928.56 129.15 934.66 134.73 940.12 140.78C942.45 143.36 949.62 149.56 950.09 152.7C948.89 154.74 946.18 154.28 944.02 154.34C938.55 154.48 933.04 154.36 927.56 154.36C921.34 154.36 912.64 156.06 906.74 153.84C902.64 152.3 900.11 147.72 897.2 144.71C890.83 138.09 884.48 131.44 877.96 124.97C872.81 119.86 865.82 107.05 858.1 106.33C844.99 105.12 831.15 106.33 817.98 106.39C815.1 106.41 806.85 104.94 805.44 108.29C804.25 111.13 805.18 115.84 805.18 118.9C805.18 126.84 805.08 134.78 805.07 142.72C805.07 145.46 806.38 152.81 803.4 154.35C801.28 155.45 797.79 154.81 795.46 154.81C789.11 154.81 782.75 154.74 776.41 154.83C774.04 154.87 769.66 155.7 768.04 153.45C766.47 151.27 767.52 138.27 767.52 134.92C767.5 121.78 767.52 108.65 767.54 95.51C767.54 90.85 766.36 82.09 767.72 77.91C768.68 74.93 773.2 75.74 775.53 75.72C783.18 75.63 790.84 75.72 798.49 75.72C825.77 75.72 853.07 75.97 880.35 75.7C889.95 75.6 904.34 73.69 904.66 61.28C905.03 46.54 889.66 45.32 878.62 45.24C849.03 45.02 819.42 44.88 789.83 44.87C785.55 44.87 771.98 45.93 768.81 44.4C766.38 43.22 767.01 40.09 767.03 37.9C767.09 32.27 767.01 26.64 767.01 21.01C767.01 19.24 766.44 16.08 767.51 14.55C768.58 13.02 771.3 13.19 772.93 13.16C778.13 13.06 783.33 13.16 788.53 13.16C809.75 13.16 830.97 13.08 852.2 13.08C885.21 13.08 925.99 5.96 940.38 43.95C942.41 49.29 943.39 55.14 943.25 60.86C943.08 67.83 941.58 74.38 938.46 80.65C934.76 88.05 927.18 93.88 920.04 97.72C916.56 99.59 910.11 100.38 907.9 103.74ZM1023.41 13.2C1009.41 14.18 995.21 19.41 985.45 29.73C971.72 44.23 973.13 69.16 988.5 81.58C998.15 89.37 1011.34 91.96 1023.29 93.54C1042.21 96.04 1061.48 96.52 1080.34 99.4C1088.34 100.62 1109.9 101.54 1108.27 114.11C1106.65 126.65 1089.55 125.2 1080.46 125.15C1058.23 125.02 1035.99 125.13 1013.76 125.13C1007.55 125.13 1001.34 125.13 995.13 125.09C992.71 125.07 989.07 124.45 986.84 125.53C984.63 126.59 985.12 129.89 985.1 131.89C985.06 135.46 984.09 151.32 985.4 153.52C986.91 156.04 992.28 155.07 994.7 155.07C1003.94 155.08 1013.18 155.07 1022.42 155.07C1041.91 155.07 1061.41 155.12 1080.89 155.24C1099.69 155.36 1120.79 154.61 1135.59 141.33C1152.06 126.54 1153.06 95.35 1132.68 83.35C1109.66 69.8 1074.67 69.86 1048.41 67.55C1040.27 66.83 1014.97 66.7 1015.01 55.23C1015.04 45.41 1029.99 45 1036.71 44.96C1061.4 44.78 1086.09 45.2 1110.78 45.21C1117.71 45.21 1124.64 45.34 1131.57 45.28C1134.26 45.25 1137.7 45.61 1138.25 42.22C1139.31 35.65 1138.45 28.11 1138.47 21.44C1138.47 19.37 1139.15 15.57 1137.5 14C1135.69 12.26 1131.69 13.07 1129.41 13.07C1122.48 13.07 1115.55 13.12 1108.62 13.12C1089.85 13.12 1071.08 12.99 1052.31 12.99C1042.7 12.99 1033 12.53 1023.41 13.2ZM570.73 72.09C563.72 72.53 566.33 84.4 566.34 89.44C566.38 105.18 566.29 120.92 566.29 136.65C566.29 139.66 565.28 151.93 566.77 153.76C568.41 155.78 572.73 154.97 574.99 155C582.78 155.09 590.58 155.05 598.38 155.06C630 155.1 661.62 155.27 693.24 155.27C702.04 155.27 710.85 155.19 719.66 155.25C722.13 155.27 727.14 156.24 728.57 153.57C729.97 150.94 729 136.18 728.96 132.32C728.94 130.28 729.53 127.31 727.42 126.06C725.39 124.86 721.93 125.48 719.66 125.46C713.45 125.41 707.24 125.34 701.03 125.34C678.51 125.34 655.99 125.34 633.46 125.34C626.39 125.34 619.31 125.34 612.24 125.34C610.14 125.34 606.24 126.06 604.96 123.79C603.66 121.46 604.56 116.75 604.56 114.13C604.56 110.49 603.14 103.35 604.97 100.16C606.08 98.22 609.53 98.76 611.37 98.75C617.29 98.71 623.21 98.72 629.13 98.75C647.18 98.85 665.23 98.86 683.27 98.96C686.5 98.98 699.78 100.03 701.62 98.04C702.94 96.61 702.34 93.8 702.34 92.04C702.33 86.43 703.4 79.96 702.34 74.45C701.69 71.05 697.56 71.83 694.97 71.85C687.17 71.88 679.38 71.8 671.58 71.83C649.64 71.92 627.69 71.9 605.74 71.9C594.14 71.9 582.31 71.37 570.73 72.09Z" fill="#FFFFFF" stroke="none" />
            </svg>
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
