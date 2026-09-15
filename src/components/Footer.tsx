import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="vipers-system-footer"
      className="bg-black border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 font-mono text-xs text-neutral-500"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Institutional Identifier & Copy */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-4 h-4 text-[#FFC400]" />
            <span className="font-extrabold tracking-[0.2em] text-sm uppercase">
              VIPERS PERFORMANCE LAB
            </span>
          </div>
          <p className="text-neutral-500 text-[11px] max-w-md leading-relaxed">
            Human engineering and biomechanical performance research lab. Codified on precision, discipline, and physical sovereignty.
          </p>
          <div className="text-[10px] text-neutral-600 tracking-wider">
            ALL PROTOCOLS RESTRICTED // COHORT 01 ADMISSION BY DIRECT ARCHITECT EVALUATION ONLY
          </div>
        </div>

        {/* Telemetry Status and Back-To-Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="text-neutral-500 text-[11px] border border-neutral-900 bg-[#080808] px-3 py-1.5">
            STATUS: <span className="text-[#FFC400]">ACTIVE // ZERO TOLERANCE</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#080808] border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors uppercase tracking-wider"
          >
            <span>TOP OF DOSSIER</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFC400]" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600">
        <div>
          © {new Date().getFullYear()} VIPERS PERFORMANCE LAB. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-4">
          <span>SPEC: AEROSPACE-BIOMECH</span>
          <span>•</span>
          <span>REVISION: CODIFIED-LAW</span>
        </div>
      </div>
    </footer>
  );
};
