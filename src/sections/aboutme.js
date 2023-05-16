import { createSection } from "../components.js";

export const renderAboutMe = (aboutme) => {
    const paragraphs = aboutme.map(p => `<p>${p}</p>`);
    const html = createSection('About Me', paragraphs.join(''));
    return html;
}