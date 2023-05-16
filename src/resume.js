import { renderAboutMe } from './sections/aboutme.js'
import { renderExperience } from './sections/experience.js'
import { renderEducation } from './sections/education.js'
import { renderContact } from './sections/contact.js'
import { renderSkills } from './sections/skills.js'

const renderResume = (data) => {
    const aboutmeHtml = renderAboutMe(data.aboutme);
    const experienceHtml = renderExperience(data.experience);
    const educationHtml = renderEducation(data.education);
    const contactHtml = renderContact(data.contact);
    const skillsHtml = renderSkills(data.skills);
    const html = `
        <div id='header'>
            <div id='name-title'>
                <div id='name'>${data.contact.name}</div>
                <div id='title'>${data.contact.title} - ${data.contact.city}, ${data.contact.state}</div>
            </div>
        </div>
        <div id='resume'>
            <div id='resume-content'>
                ${aboutmeHtml}
                ${experienceHtml}
                ${educationHtml}
            </div>
            <div id='persona-panel'>
                <div id='self-image'></div>
                ${contactHtml}
                ${skillsHtml}
            </div>
        </div>
        `;
    return html;
}

const buildResume = () => {
    const mainEl = document.getElementById('main');
    fetch('data.json')
        .then(r => r.json())
        .then(d => {
            const html = renderResume(d);
            mainEl.innerHTML = html;
        });
}

const addGitHubHotKeyHandler = () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Decimal') {
            window.location.href = 'https://github.com/qmarsala/resume';
        }
    });
}

buildResume();
addGitHubHotKeyHandler();