import React from 'react';
import { ShieldAlert, BookOpen, Check } from 'lucide-react';

interface CommandItem {
  number: string;
  title: string;
  standard: string;
  law: string;
}

const COMMAND_CARDS: CommandItem[] = [
  {
    number: '01',
    title: 'THE WARM-UP IS THE WORK.',
    standard:
      'Brace with identical intra-abdominal pressure. Own the eccentric path. Grooving motor patterns is an engineering requirement, not casual preparation.',
    law: 'The empty bar is where the standard is established, not rehearsed.',
  },
  {
    number: '02',
    title: 'TENSION PRECEDES LOAD.',
    standard:
      'Eliminate ballistic momentum. Command the full active range of motion and maintain the planned line of force. If you cannot stabilize the load, the weight has exceeded your capacity.',
    law: 'Load on the bar is vanity. Tension on the tissue is physics.',
  },
  {
    number: '03',
    title: 'EXECUTION IN SILENCE.',
    standard:
      'Zero performative vocalization. Zero dropped plates. Zero posturing for an audience. Channel every unit of neural drive directly into the working fibers.',
    law: 'True capability requires no audience.',
  },
  {
    number: '04',
    title: 'PHYSIOLOGY OVER NOVELTY.',
    standard:
      'We do not chase fitness trends, social media fads, or sensationalized variety. We calculate biomechanical vectors, respect neuromuscular recovery, and measure response.',
    law: 'Evidence dictates the protocol. Science precedes hype.',
  },
  {
    number: '05',
    title: 'REFUSE THE HALF-MEASURE.',
    standard:
      'Complete the prescribed range of motion. Record metrics with forensic honesty. When systemic fatigue spikes, mechanical integrity remains absolute.',
    law: 'How you execute the final repetition defines the standard you hold in the dark.',
  },
];

export const DoctrineSection: React.FC = () => {
  return (
    <section
      id="doctrine"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-black relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ THE VIPERS DOCTRINE // CODIFIED LAW ]</span>
          </div>

          <h2
            id="doctrine-headline"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase mb-5 leading-none"
          >
            THE CODE OF EXECUTION.
          </h2>

          <p
            id="doctrine-opening-mandate"
            className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed"
          >
            Five non-negotiable laws. Zero tolerance for theater. Precision is the practice. Discipline is the enforcement. Sovereignty is the outcome.
          </p>
        </div>

        {/* Command Cards Stack */}
        <div id="doctrine-command-cards" className="space-y-4 sm:space-y-6">
          {COMMAND_CARDS.map((card, idx) => (
            <div
              key={card.number}
              id={`command-card-${card.number}`}
              className="bg-[#080808] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 p-6 sm:p-8 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Number & Title */}
                <div className="flex items-start gap-4 sm:gap-6 md:w-5/12">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-[#FFC400] tracking-tighter shrink-0 pt-0.5">
                    {card.number} //
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-neutral-100 transition-colors">
                      {card.title}
                    </h3>
                    <div className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest mt-1">
                      MANDATE // CODIFIED CLAUSE {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Standard & Law Content */}
                <div className="md:w-7/12 space-y-4 border-t md:border-t-0 md:border-l border-neutral-900 pt-4 md:pt-0 md:pl-8">
                  {/* Standard */}
                  <div>
                    <div className="font-mono text-[11px] tracking-wider text-neutral-400 uppercase mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-xs" />
                      STANDARD:
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {card.standard}
                    </p>
                  </div>

                  {/* Law */}
                  <div className="bg-black/60 border-l-2 border-[#FFC400] pl-4 py-2 mt-2">
                    <div className="font-mono text-[11px] tracking-wider text-[#FFC400] uppercase mb-0.5 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-[#FFC400]" />
                      LAW:
                    </div>
                    <p className="text-sm sm:text-base font-medium text-white italic tracking-wide">
                      "{card.law}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctrine Close Banner */}
        <div
          id="doctrine-close-banner"
          className="mt-14 sm:mt-20 p-8 sm:p-10 bg-[#080808] border border-neutral-800 text-center relative overflow-hidden"
        >
          <div className="font-mono text-xs text-[#FFC400] uppercase tracking-widest mb-3">
            [ INSTITUTIONAL COVENANT ]
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase max-w-2xl mx-auto leading-tight mb-4">
            THE STANDARD DOES NOT CHANGE BECAUSE NO ONE IS WATCHING.
          </div>
          <p className="text-sm sm:text-base font-mono text-neutral-400 uppercase tracking-wider">
            Wear the mark by choice. Uphold the standard by conduct.
          </p>
        </div>
      </div>
    </section>
  );
};
