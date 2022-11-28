import { createSectionTitle } from "../components.js";

const createEducationSection = (educationAuthority, degreeOrCertificate, date) => {
    const html = `
    <div class='section-content'>
        <p><strong>${educationAuthority}</strong> | <em>${degreeOrCertificate}</em> | ${date}</p>
    </div>
    `;
    return html;
}

export const renderEducation = (education) => {
    const sectionTitle = createSectionTitle('Education');
    const sections = [];
    education.forEach(e => {
        const section = createEducationSection(e.educationAuthority, e.degreeOrCertificate, e.date);
        sections.push(section);
    });
    const html = `
    <div class='section'>
        ${sectionTitle}
        ${sections.join('')}
    </div>
    `;
    return html;
}