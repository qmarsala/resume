import { createSectionTitle } from "../components.js";

export const renderAboutMe = (aboutme) => {
    const sectionTitle = createSectionTitle('About Me');
    const paragraphs = [];
    aboutme.forEach(p => paragraphs.push(`<p>${p}</p>`));
    const html = `
        <div class='section'>
            ${sectionTitle}
            <div class='section-content'>
                ${paragraphs.join('')}
            </div>
        </div>
        `;
    return html;
}