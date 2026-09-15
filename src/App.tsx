/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DoctrineSection } from './components/DoctrineSection';
import { EngineSection } from './components/EngineSection';
import { ArchitectsSection } from './components/ArchitectsSection';
import { ArcSection } from './components/ArcSection';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-black text-neutral-100 flex flex-col selection:bg-[#FFC400] selection:text-black">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Single-Page Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* SECTION 01 — THE HERO */}
        <HeroSection />

        {/* SECTION 02 — THE VIPERS DOCTRINE */}
        <DoctrineSection />

        {/* SECTION 03 — THE BIOMECHANICAL ENGINE */}
        <EngineSection />

        {/* SECTION 04 — THE GENESIS & THE ARCHITECTS */}
        <ArchitectsSection />

        {/* SECTION 05 — THE SOVEREIGN ARC */}
        <ArcSection />

        {/* SECTION 05 — COHORT 01 FORENSIC CANDIDATE AUDIT FORM */}
        <AuditSection />
      </main>

      {/* Institutional System Footer */}
      <Footer />
    </div>
  );
}
