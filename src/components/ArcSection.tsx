import React from 'react';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ArcPhase {
  phase: string;
  name: string;
  subtitle: string;
  process: string;
  outcome: string;
  durationMarker: string;
}

const ARC_PHASES: ArcPhase[] = [
  {
    phase: 'PHASE 01',
    name: 'DECONSTRUCTION & CALIBRATION',
    subtitle: '(THE RESET)',
    process:
      'Liquidation of gym theater, bad habits, and compromised movement patterns. Kinematic audit of joint leverage, structural mobility, and systemic metabolic baseline.',
    outcome: 'Ego stripped away. Joint integrity restored. Active tension re-established.',
    durationMarker: 'STAGE 01 // PURGE',
  },
  {
    phase: 'PHASE 02',
    name: 'METHODOLOGICAL LITERACY',
    subtitle: '(THE CRUCIBLE)',
    process:
      'Deep mastery of resistance profiles, force vectors, eccentric control, and recovery telemetry. The practitioner transitions from blindly following a routine to understanding the exact physics of their own anatomy.',
    outcome: 'Total biomechanical literacy. Independent data tracking. High-yield hypertrophy.',
    durationMarker: 'STAGE 02 // CODE',
  },
  {
    phase: 'PHASE 03',
    name: 'PHYSICAL SOVEREIGNTY',
    subtitle: '(THE SOVEREIGN STANDARD)',
    process:
      'An indestructible, high-output human vehicle operating under absolute real-world durability. Zero reliance on coaches, trainers, or fitness fads.',
    outcome: 'Complete physical self-governance. Uncompromising mental composure. Absolute physical sovereignty.',
    durationMarker: 'STAGE 03 // AUTONOMY',
  },
];

export const ArcSection: React.FC = () => {
  return (
    <section
      id="sovereign-arc"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-black relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ THE DESTINATION // COHORT 01 INTAKE ]</span>
          </div>

          <h2
            id="arc-headline"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase mb-5 leading-none"
          >
            THE SOVEREIGN ARC.
          </h2>

          <p
            id="arc-opening-mandate"
            className="text-lg sm:text-xl text-neutral-300 max-w-4xl leading-relaxed font-normal"
          >
            We do not sell personal training services. We engineer lifelong physical sovereignty. The transformation from an externally dependent lifter into an autonomous, durable master of human biology follows an exact developmental pipeline.
          </p>
        </div>

        {/* 3 Pipeline Phases */}
        <div id="arc-phases-pipeline" className="space-y-6">
          {ARC_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              id={`arc-phase-${idx + 1}`}
              className="bg-[#080808] border border-neutral-900 hover:border-neutral-800 p-6 sm:p-8 relative transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Phase Identification */}
                <div className="lg:w-5/12">
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#FFC400] tracking-wider">
                    <span className="font-bold">{phase.phase}</span>
                    <span className="text-neutral-600">//</span>
                    <span className="text-neutral-400">{phase.durationMarker}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                    {phase.name}
                  </h3>
                  <div className="font-mono text-sm text-[#FFC400] uppercase mt-0.5">
                    {phase.subtitle}
                  </div>
                </div>

                {/* Process and Outcome Blocks */}
                <div className="lg:w-7/12 space-y-4 border-t lg:border-t-0 lg:border-l border-neutral-900 pt-4 lg:pt-0 lg:pl-8">
                  {/* Process */}
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-xs" />
                      PROCESS:
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {phase.process}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="bg-black border-l-2 border-[#FFC400] pl-4 py-2 mt-3">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#FFC400] mb-0.5 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FFC400]" />
                      OUTCOME:
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
