import { createList, createSectionTitle } from "../components.js";

export const renderSkills = (skills) => {
    const sectionTitle = createSectionTitle('Skills');
    const skillsHtml = createList(skills);
    const html = `
        <div id='skills' class='side-panel-section'>
            ${sectionTitle}
            ${skillsHtml}
        </div>
        `;
    return html;
}