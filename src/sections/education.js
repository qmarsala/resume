import { createSection } from "../components.js";

const createEducationItem = (educationAuthority, degreeOrCertificate, date) => {
    const html = `<p><strong>${educationAuthority}</strong> | <em>${degreeOrCertificate}</em> | ${date}</p>`;
    return html;
}

export const renderEducation = (education) => {
    const educationItems = [];
    education.forEach(e => {
        const educationItem = createEducationItem(e.educationAuthority, e.degreeOrCertificate, e.date);
        educationItems.push(educationItem);
    });
    const html = createSection('Education', educationItems.join(''));
    return html;
}