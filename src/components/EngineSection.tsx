import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface EnginePillar {
  id: string;
  code: string;
  title: string;
  overline: string;
  standard: string;
  law: string;
}

const ENGINE_PILLARS: EnginePillar[] = [
  {
    id: 'pillar-01',
    code: '01',
    overline: 'PILLAR 01 // VECTOR MOMENT ARM EFFICIENCY',
    title: 'FORCE VECTORS & LEVERAGE',
    standard:
      'Resistance must follow exact biomechanical lines of force. We manipulate joint angles, limb lengths, and stability planes to ensure mechanical tension is placed directly across the target muscle fibers—not the joint capsules.',
    law: 'The goal is not moving mass from point A to B. The goal is internal joint torque and precise tissue loading.',
  },
  {
    id: 'pillar-02',
    code: '02',
    overline: 'PILLAR 02 // VECTOR TENSION VARIATION',
    title: 'RESISTANCE PROFILES & ACTIVE RANGE',
    standard:
      "Free weights and cables apply force curves differently across a range of motion. We match the equipment's resistance profile to the muscle's length-tension curve, keeping maximum tension where the muscle is structurally strongest.",
    law: 'Momentum moves weight. Biomechanical resistance builds tissue.',
  },
  {
    id: 'pillar-03',
    code: '03',
    overline: 'PILLAR 03 // VECTOR FEMUR-TO-TIBIA RATIO',
    title: 'ANTHROPOMETRIC INDIVIDUALIZATION',
    standard:
      'There is no universal movement prescription. Bone lengths, hip socket anatomy, thoracic mobility, and injury history dictate movement execution. We fit the mechanics to the athlete, never the athlete to a dogma.',
    law: 'The exercise serves the human anatomy. The human anatomy never serves the exercise.',
  },
  {
    id: 'pillar-04',
    code: '04',
    overline: 'PILLAR 04 // VECTOR TEMPO CADENCE SPEC',
    title: 'FORENSIC TELEMETRY & METRICS',
    standard:
      'Every critical variable is audited: active range of motion, eccentric-isometric tempo, mechanical load, and systemic fatigue markers. Intuition is discarded; empirical tracking governs every progression.',
    law: 'What is not measured cannot be engineered. We do not guess—we audit and calibrate.',
  },
  {
    id: 'pillar-05',
    code: '05',
    overline: 'PILLAR 05 // VECTOR JOINT INTEGRITY INDEX',
    title: 'SYSTEMIC PROGRESSIVE ADAPTATION',
    standard:
      'Progressive overload is not limited to adding iron to the bar. Mastery manifests as improved mechanical execution, increased time under tension, enhanced range ownership, and denser work capacity at identical joint stress.',
    law: 'Earn the right to progress the load by first dominating the movement.',
  },
];

const TELEMETRY_MARQUEE_ITEMS = [
  'VECTOR DYNAMICS',
  'RESISTANCE PROFILE',
  'JOINT TORQUE',
  'TEMPO',
  'RECOVERY',
];

export const EngineSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('pillar-01');

  return (
    <section
      id="engine"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-black relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Telemetry Marquee */}
        <div className="w-full max-w-full overflow-hidden mb-14">
          <div
            id="telemetry-marquee-container"
            className="w-full max-w-full overflow-hidden border-y border-neutral-900 py-3 bg-[#080808]"
          >
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-3 font-mono text-[11px] sm:text-xs text-[#FFC400] px-4 w-full">
              {TELEMETRY_MARQUEE_ITEMS.map((item, index) => (
                <span key={index} className="inline-flex items-center gap-1.5 tracking-wider">
                  <span>[{item}]</span>
                  {index < TELEMETRY_MARQUEE_ITEMS.length - 1 && (
                    <span className="text-neutral-700 hidden sm:inline select-none">//</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ THE ENGINE // BIOMECHANICAL ARCHITECTURE ]</span>
          </div>

          <h2
            id="engine-headline"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase mb-5 leading-none"
          >
            ENGINEER THE STIMULUS.
          </h2>

          <p
            id="engine-opening-mandate"
            className="text-lg sm:text-xl text-neutral-300 max-w-4xl leading-relaxed font-normal"
          >
            Effort isn't the input that builds muscle. Precise mechanical stress is. That means picking the right exercise for your joints, loading it through the range where the muscle actually works hardest, killing momentum, and tracking what happened — every session, without exception. No exercise is sacred. No number on the bar means anything on its own. Only the stimulus you actually delivered to the tissue counts.
          </p>
        </div>

        {/* Engine Pillars Grid */}
        <div id="engine-pillars-list" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ENGINE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className={`bg-[#080808] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                index === 4 ? 'md:col-span-2' : ''
              } ${
                activePillar === pillar.id
                  ? 'border-neutral-700 bg-neutral-950/80 shadow-lg shadow-black'
                  : 'border-neutral-900 hover:border-neutral-800'
              }`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-5">
                  <span className="font-mono text-xs text-[#FFC400] tracking-widest uppercase">
                    {pillar.overline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase mb-4">
                  {pillar.code} // {pillar.title}
                </h3>

                {/* Standard */}
                <div className="mb-5">
                  <div className="font-mono text-[11px] tracking-wider text-neutral-400 uppercase mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-xs" />
                    STANDARD:
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {pillar.standard}
                  </p>
                </div>
              </div>

              {/* Law */}
              <div className="bg-black border-l-2 border-[#FFC400] pl-4 py-2 mt-4">
                <div className="font-mono text-[10px] tracking-wider text-[#FFC400] uppercase mb-0.5">
                  LAW:
                </div>
                <p className="text-xs sm:text-sm font-medium text-white italic">
                  "{pillar.law}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Engine Close & Transition */}
        <div
          id="engine-close-section"
          className="p-8 sm:p-10 bg-[#080808] border border-neutral-900 text-center"
        >
          <div className="font-mono text-xs text-[#FFC400] tracking-widest uppercase mb-2">
            [ ENGINE CONCLUSION ]
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
            STOP CHASING EXERCISES. START ENGINEERING STIMULUS.
          </div>
          <div className="font-mono text-xs sm:text-sm text-neutral-400 tracking-wider uppercase border-t border-neutral-900 pt-4 max-w-xl mx-auto">
            THE ENGINE IS THE SYSTEM. THE ARCHITECTS ARE THE ONES WHO BUILT IT.
          </div>
        </div>
      </div>
    </section>
  );
};
