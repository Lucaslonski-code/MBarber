/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * M Barber - Aplicação Web Oficial de Marketing & Aquisição
 * Colombo, Paraná
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { PrecisionSection } from "./components/PrecisionSection";
import { TeamSection } from "./components/TeamSection";
import { LocationSection } from "./components/LocationSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { MobileBottomNav } from "./components/MobileBottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-white selection:text-black antialiased pb-20 md:pb-0">
      {/* Top Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <ServicesSection />
        <PrecisionSection />
        <TeamSection />
        <LocationSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomNav />
    </div>
  );
}
