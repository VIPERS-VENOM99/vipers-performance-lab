import React from 'react';
import { Users, UserCheck, Shield } from 'lucide-react';

interface ArchitectDossier {
  number: string;
  name: string;
  title: string;
  image: string;
  imagePosition?: string;
  recId: string;
  dossier: string;
  mandate: string;
  credentialsBadge: string;
}

const ARCHITECTS: ArchitectDossier[] = [
  {
    number: '01',
    name: 'COACH SAM',
    title: 'Founder // Chief Architect',
    image: 'https://i.postimg.cc/8CwqLhZN/Coach-Sam.jpg',
    recId: 'REC // ID: VP-01',
    dossier:
      'Two decades operating at the nexus of physique architecture, applied endocrinology, and clinical exercise physiology. Advanced expertise in metabolic biochemistry, performance pharmacology, and precision macronutrient partitioning aimed at absolute health optimization and sustained cellular durability. Bridges the gap between biomechanical kinetic vectors and sports psychology, engineering unyielding cognitive fortitude alongside physical sovereignty. Governs protocols centered on comprehensive biomarker telemetry, neuro-endocrine recovery, and forensic tension loading.',
    mandate: '[ Metabolic Biochemistry // Endocrine Health Optimization // Neuro-Cognitive Drive ]',
    credentialsBadge: '20+ YRS PHYSIOLOGY // CHIEF ARCHITECT',
  },
  {
    number: '02',
    name: 'COACH AZIZ',
    title: 'Founding Partner // Master Practitioner',
    image: 'https://i.postimg.cc/43hWxVj0/Coach-Aziz.jpg',
    imagePosition: 'center 20%',
    recId: 'REC // ID: VP-02',
    dossier:
      'Bachelor’s Degree in Sport Coaching (King Saud University) and NASM International Certified Personal Trainer (ICPT) holding an Associate Diploma in Personal Training for Physical Health. Applied conditioning background spanning elite athlete preparation at the Real Madrid Foundation and performance coaching at Leejam Sports Company. Specializes in progressive strength and conditioning architecture, speed and agility mechanics, kinematic movement assessments, and data-driven performance monitoring to build resilient, high-output athletic biology.',
    mandate: '[ Strength & Conditioning Protocols // Kinetic Movement Audits // Athletic Performance Optimization ]',
    credentialsBadge: 'B.S. SPORT COACHING // NASM ICPT',
  },
  {
    number: '03',
    name: 'COACH MAHMOUD',
    title: 'Founding Partner // Master Practitioner',
    image: 'https://i.postimg.cc/FKfBk2JN/Coach-Mahmoud.jpg',
    recId: 'REC // ID: VP-03',
    dossier:
      'NASM-Certified Personal Trainer (CPT) and Certified Nutrition Coach (CNC) specializing in kinetic resistance mechanics, bioenergetic adaptations, and systemic body composition. Experienced practitioner across premier regional fitness facilities including Fitness Time and World Gym. Focuses on targeted heart-rate zone conditioning, multi-planar movement execution, and precision metabolic nutrition to optimize physical performance and sustained athletic capacity.',
    mandate: '[ Heart-Rate Zone Conditioning // Kinetic Resistance Mechanics // Precision Nutrition Protocols ]',
    credentialsBadge: 'NASM CPT & CNC // KINETIC AUDIT LEAD',
  },
];

export const ArchitectsSection: React.FC = () => {
  return (
    <section
      id="architects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-black relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow & Headline */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-neutral-800 text-neutral-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ THE GENESIS // THE ARCHITECTS ]</span>
          </div>

          <h2
            id="architects-headline"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase mb-6 leading-none"
          >
            BUILT FROM REFUSAL.
          </h2>

          {/* The Genesis Narrative */}
          <div
            id="genesis-statement"
            className="p-6 sm:p-8 bg-[#080808] border border-neutral-900 text-neutral-300 text-base sm:text-lg leading-relaxed space-y-4"
          >
            <div className="font-mono text-xs text-[#FFC400] tracking-widest uppercase">
              INSTITUTIONAL ORIGIN // CODIFIED 2026
            </div>
            <p>
              VIPERS began with one refusal: to accept that physical development had to remain trapped inside the noise and theater of commercial fitness. After nearly two decades in bodybuilding, exercise physiology, nutrition, and performance research, Coach Sam codified an uncompromising standard—one built on biomechanical precision, silent execution, methodological literacy, and physical sovereignty. What began as an individual standard became an institution when Coach Aziz and Coach Mahmoud joined the mandate. Three practitioners. One Doctrine. One unbreakable standard.
            </p>
          </div>
        </div>

        {/* Architect Dossiers Grid */}
        <div id="architect-dossiers-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {ARCHITECTS.map((architect) => (
            <div
              key={architect.number}
              id={`architect-card-${architect.number}`}
              className="bg-[#080808] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900 mb-4 font-mono text-[11px]">
                  <span className="text-[#FFC400] font-bold">
                    DOSSIER // {architect.number}
                  </span>
                  <span className="text-neutral-500">OPERATIONAL</span>
                </div>

                {/* Portrait Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group-hover:border-amber-500/40 transition-colors duration-300 mb-5 bg-black">
                  {/* Tactical HUD Corner Brackets */}
                  <div className="absolute top-2 left-2 z-10 font-mono text-xs text-white/40 pointer-events-none select-none">
                    [+]
                  </div>
                  <div className="absolute top-2 right-2 z-10 font-mono text-xs text-white/40 pointer-events-none select-none">
                    [+]
                  </div>

                  {/* Coach Portrait Image */}
                  <img
                    src={architect.image}
                    alt={architect.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={architect.imagePosition ? { objectPosition: architect.imagePosition } : undefined}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${
                      architect.number === '02' ? 'object-[center_20%]' : ''
                    }`}
                  />

                  {/* Bottom Bar Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2.5 pt-6 flex items-center justify-between z-10 pointer-events-none">
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                      {architect.recId}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400/80 tracking-widest uppercase font-medium">
                      STATUS: ACTIVE
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase mb-1">
                  {architect.name}
                </h3>
                <div className="font-mono text-xs text-[#FFC400] tracking-wider uppercase mb-5">
                  {architect.title}
                </div>

                {/* Dossier Body */}
                <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider mb-2">
                  BACKGROUND & SPECIALIZATION:
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {architect.dossier}
                </p>
              </div>

              {/* Operational Mandate */}
              <div className="pt-4 border-t border-neutral-900">
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#FFC400]" />
                  OPERATIONAL MANDATE:
                </div>
                <div className="font-mono text-xs text-neutral-300 bg-black p-2.5 border border-neutral-900/80">
                  {architect.mandate}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Standard Narrative */}
        <div
          id="architects-unified-standard"
          className="p-8 sm:p-10 bg-[#080808] border border-neutral-900 mb-8"
        >
          <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>[ UNIFIED INSTITUTIONAL STANDARD ]</span>
          </div>
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-4xl">
            Different domains. Specialized expertise. One Doctrine. The Architects do not represent competing coaching philosophies. They operate as a single institutional standard—applying exact physiological sciences to one objective: to engineer practitioners toward absolute Physical Sovereignty.
          </p>
        </div>

        {/* Architect Close */}
        <div
          id="architect-close-banner"
          className="py-6 px-4 text-center border-t border-b border-neutral-900 font-mono text-xs sm:text-sm text-[#FFC400] tracking-widest uppercase"
        >
          THE DOCTRINE WAS NOT WRITTEN FOR THE ATHLETE. IT WAS WRITTEN FOR THE PRACTITIONER WHO IS WILLING TO BECOME ONE.
        </div>
      </div>
    </section>
  );
};
