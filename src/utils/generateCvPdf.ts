import { jsPDF } from 'jspdf';
import { cvData } from '../data/cvData';

export interface GeneratedPdfResult {
  doc: jsPDF;
  blob: Blob;
  base64: string;
  filename: string;
}

export function generateUpdatedCvPdf(): GeneratedPdfResult {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const primaryColor = [135, 60, 77]; // #873C4D Burgundy
  const secondaryColor = [184, 111, 88]; // #B86F58 Terracotta
  const textColor = [41, 41, 41]; // #292929 Charcoal
  const mutedColor = [110, 110, 110];
  const lineColor = [232, 221, 202]; // #E8DDCA Beige

  function checkPageBreak(requiredHeight: number) {
    if (y + requiredHeight > pageHeight - 18) {
      doc.addPage();
      y = margin;
      drawPageHeader();
    }
  }

  function drawPageHeader() {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text('Rupal Joshi — Updated Academic Curriculum Vitae', margin, 10);
    doc.setDrawColor(lineColor[0], lineColor[1], lineColor[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 12, pageWidth - margin, 12);
  }

  function drawSectionHeading(title: string) {
    checkPageBreak(16);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 40, y);
    doc.setDrawColor(lineColor[0], lineColor[1], lineColor[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 40, y, pageWidth - margin, y);
    y += 5;
  }

  // --- PAGE 1 HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(cvData.contact.name, margin, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const descLines = doc.splitTextToSize(cvData.contact.descriptor, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 4.2 + 2;

  // Contact info row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const contactText = `Phone: ${cvData.contact.phones.join(' / ')}  |  Email: ${cvData.contact.emails.join(' / ')}`;
  doc.text(contactText, margin, y);
  y += 3.8;

  const locText = `Address: ${cvData.contact.address}  |  LinkedIn: ${cvData.contact.linkedin.display}`;
  doc.text(locText, margin, y);
  y += 5;

  // Profile Statement Box
  doc.setFillColor(250, 247, 240); // #FAF7F0
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.8);
  
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const profileLines = doc.splitTextToSize(`"${cvData.contact.profileStatement}"`, contentWidth - 8);
  const boxHeight = profileLines.length * 4 + 6;
  
  doc.rect(margin, y, contentWidth, boxHeight, 'F');
  doc.line(margin, y, margin, y + boxHeight); // thick left border
  doc.text(profileLines, margin + 4, y + 4.5);
  y += boxHeight + 4;

  // --- SECTION: PROFESSIONAL EXPERIENCE ---
  drawSectionHeading('Professional Experience');

  cvData.experience.forEach((exp) => {
    checkPageBreak(exp.highlights ? 26 : 18);

    // Role Title & Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.role, margin, y);

    const periodWidth = doc.getTextWidth(exp.period);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    doc.text(exp.period, pageWidth - margin - periodWidth, y);
    y += 4.5;

    // Organization
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(exp.organization, margin, y);
    y += 4;

    // Highlights / Key Responsibilities
    if (exp.highlights && exp.highlights.length > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      
      exp.highlights.forEach((h) => {
        const hLines = doc.splitTextToSize(`•  ${h}`, contentWidth - 4);
        checkPageBreak(hLines.length * 3.5);
        doc.text(hLines, margin + 2, y);
        y += hLines.length * 3.5;
      });
      y += 2;
    } else {
      y += 1.5;
    }
  });

  // --- SECTION: EDUCATION ---
  drawSectionHeading('Education & Academic Qualifications');

  cvData.education.forEach((edu) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(edu.degree, margin, y);

    if (edu.status) {
      const statusWidth = doc.getTextWidth(`[${edu.status}]`);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      doc.text(`[${edu.status}]`, pageWidth - margin - statusWidth, y);
    }
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(edu.institution + (edu.location ? `, ${edu.location}` : ''), margin, y);
    y += 4.5;
  });

  // --- SECTION: CORE COMPETENCIES & LANGUAGES ---
  drawSectionHeading('Core Competencies & Languages');
  checkPageBreak(25);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Key Skills:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(cvData.skills.map(s => s.name).join('   |   '), margin + 20, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Languages:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(cvData.languages.map(l => `${l.name} (${l.script})`).join('   |   '), margin + 20, y);
  y += 6;

  // --- SECTION: AWARDS & RECOGNITION ---
  drawSectionHeading('Awards & Recognition');

  cvData.awards.forEach((awd, idx) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`•  ${awd.title}`, margin, y);

    if (awd.year) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
      const yWidth = doc.getTextWidth(awd.year);
      doc.text(awd.year, pageWidth - margin - yWidth, y);
    }
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(`   Awarded by: ${awd.awardingBody}`, margin, y);
    y += 4;
  });

  // --- SECTION: ACHIEVEMENTS & CONTRIBUTIONS ---
  drawSectionHeading('Achievements & Professional Contributions');

  cvData.achievements.forEach((ach, idx) => {
    const achLines = doc.splitTextToSize(`[${String(idx + 1).padStart(2, '0')}] ${ach.title}`, contentWidth);
    checkPageBreak(achLines.length * 3.6 + 1);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(achLines, margin, y);
    y += achLines.length * 3.6 + 1.2;
  });

  // --- SECTION: RESEARCH & ACADEMIC WORK ---
  drawSectionHeading('Research & Academic Work (APA Citations)');

  cvData.research.forEach((res, idx) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`[${String(idx + 1).padStart(2, '0')}] ${res.title}`, margin, y);
    y += 3.8;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.8);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    const apaLines = doc.splitTextToSize(res.apaCitation, contentWidth - 4);
    doc.text(apaLines, margin + 4, y);
    y += apaLines.length * 3.4 + 2;
  });

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.setDrawColor(lineColor[0], lineColor[1], lineColor[2]);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.text(
      `Rupal Joshi · Updated Academic & Fashion Design CV`,
      margin,
      pageHeight - 8
    );
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin - doc.getTextWidth(`Page ${i} of ${totalPages}`),
      pageHeight - 8
    );
  }

  const filename = 'Rupal_Joshi_Updated_Academic_CV.pdf';
  const blob = doc.output('blob');
  const base64 = doc.output('datauristring').split(',')[1];

  return { doc, blob, base64, filename };
}
