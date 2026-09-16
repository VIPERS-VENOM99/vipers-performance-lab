import React from 'react';
import { ArrowDown, CornerDownRight, Activity } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-hidden bg-black"
    >
      {/* Precision Background Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Subtle corner crosshairs */}
      <div className="absolute top-24 left-8 pointer-events-none hidden md:block text-neutral-800 font-mono text-[10px]">
        + REF: LAT-01.ALPHA // OBSIDIAN-GRID
      </div>
      <div className="absolute top-24 right-8 pointer-events-none hidden md:block text-neutral-800 font-mono text-[10px]">
        SPEC: MIL-STD-810H // BIOMECH +
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Telemetry HUD Layer */}
        <div
          id="hero-telemetry-hud"
          className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs text-neutral-400"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#080808] border border-neutral-800 text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
            [ SYSTEM: ACTIVE ]
          </span>
          <span className="inline-flex items-center px-2.5 py-1 bg-[#080808] border border-neutral-800 text-neutral-300">
            [ TOLERANCE: ZERO COMPROMISE ]
          </span>
          <span className="inline-flex items-center px-2.5 py-1 bg-[#080808] border border-neutral-800 text-[#FFC400]">
            [ ACCESS: EVALUATED ]
          </span>
        </div>

        {/* Institutional Identifier */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-6">
          <Activity className="w-3.5 h-3.5 text-[#FFC400]" />
          <span>VIPERS // SYSTEM 01</span>
        </div>

        {/* Headline (H1) */}
        <h1
          id="hero-primary-headline"
          className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase mb-6 leading-none break-words"
        >
          PHYSICAL SOVEREIGNTY.
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-medium max-w-3xl leading-snug mb-4"
        >
          The human vehicle engineered by science. Tempered by discipline. Governed by an uncompromising standard.
        </p>

        {/* Positioning Statement */}
        <div
          id="hero-positioning-statement"
          className="inline-flex flex-col sm:flex-row sm:items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 mt-6 mb-6"
        >
          <span className="font-mono text-xs text-white/50 tracking-widest">
            [ COHORT 01 // SPECIFICATION ]
          </span>
          <span className="text-sm text-neutral-300 tracking-wide">
            Private remote coaching for advanced lifters. Capped at 15 practitioners.
          </span>
        </div>

        {/* Supporting Statement */}
        <p
          id="hero-supporting-statement"
          className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed mb-10 font-normal border-l-2 border-neutral-800 pl-4"
        >
          Biomechanical precision. Metabolic architecture. Silent execution. VIPERS exists for practitioners who reject gym theater and demand absolute mastery over their physical biology.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
          <button
            id="hero-cta-enter-standard"
            onClick={() => scrollTo('cohort-audit')}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC400] text-black font-mono font-bold text-sm tracking-wider uppercase border border-[#FFC400] hover:bg-white hover:border-white transition-colors duration-200 group shadow-lg shadow-[#FFC400]/10"
          >
            <span>[ VIEW COHORT 01 PARAMETERS ]</span>
            <CornerDownRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            id="hero-action-explore-doctrine"
            onClick={() => scrollTo('doctrine')}
            className="inline-flex items-center justify-center px-6 py-4 bg-[#080808] text-neutral-300 font-mono text-sm tracking-wider uppercase border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors duration-200 group"
          >
            <span>[ READ THE DOCTRINE ↓ ]</span>
            <ArrowDown className="w-4 h-4 ml-2 text-neutral-500 group-hover:text-[#FFC400] group-hover:translate-y-0.5 transition-all" />
          </button>
        </div>

        {/* Micro-Friction Line */}
        <div
          id="hero-micro-friction"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-neutral-500 pt-2"
        >
          <span className="w-1.5 h-1.5 bg-neutral-700" />
          <span>Cohort 01 access is strictly capped. Admission is evaluated, not assumed.</span>
        </div>
      </div>

      {/* Bottom Technical Telemetry Strip */}
      <div className="max-w-5xl mx-auto w-full mt-16 pt-6 border-t border-neutral-900/80 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-neutral-600">
        <div className="flex items-center gap-4">
          <span>STIMULUS // PROTOCOL 01</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">CADENCE // CONTROLLED ECCENTRIC</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-500">
          <span>COHORT INTAKE STATUS: ACTIVE</span>
          <span>SLOTS: [ 12–15 MAX ]</span>
        </div>
      </div>
    </section>
  );
};
 
