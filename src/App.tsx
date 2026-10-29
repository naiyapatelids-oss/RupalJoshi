import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSkillsSection } from './components/EducationSkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { AwardsSection } from './components/AwardsSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { PdfModal } from './components/PdfModal';
import { EmailCvModal } from './components/EmailCvModal';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isEmailCvModalOpen, setIsEmailCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#292929] flex flex-col font-sans selection:bg-[#873C4D] selection:text-[#F8F5EE]">
      {/* Top Navigation */}
      <Header onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Main Editorial Content */}
      <main className="flex-1">
        {/* Section 1: Hero & Profile */}
        <Hero />

        {/* Section 2: Professional Experience */}
        <ExperienceSection />

        {/* Sections 3 & 4: Education, Skills & Languages */}
        <EducationSkillsSection />

        {/* Section 5: Achievements & Professional Contributions */}
        <AchievementsSection />

        {/* Section 6: Awards & Recognition */}
        <AwardsSection />

        {/* Section 7: Research & Academic Work */}
        <ResearchSection />

        {/* Section 8: Contact & Inquiries */}
        <ContactSection 
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
          onOpenEmailCvModal={() => setIsEmailCvModalOpen(true)}
        />
      </main>

      {/* Source PDF Inspector Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Email CV with PDF Attachment Modal */}
      <EmailCvModal
        isOpen={isEmailCvModalOpen}
        onClose={() => setIsEmailCvModalOpen(false)}
      />
    </div>
  );
}
