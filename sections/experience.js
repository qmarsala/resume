import { createList } from "../components.js";

const createProject = (title, description) => {
    const descriptionHtml = createList(description);
    const html = `
    <div class='project'>
        <div class='project-title'>${title}</div>
        <div class='project-description'>${descriptionHtml}</div>
    </div>
    `;
    return html;
}

const createProjects = (company, position, date, projects) => {
    const projectsHtml = [];
    projects.forEach(p => {
        const pHtml = createProject(p.title, p.description)
        projectsHtml.push(pHtml);
    });
    const html = `
    <div class='job-title'>
        <p><strong>${company} /</strong> <em>${position}</em></p>
        <p class='sub-text'>${date}</p>
    </div>
    ${projectsHtml.join('')}
    `;
    return html;
}

export const renderExperience = (experience) => {
    const sectionTitle = 'Experience';
    const jobsHtml = [];
    experience.forEach(e => {
        const jobHtml = createProjects(e.company, e.position, e.date, e.projects);
        jobsHtml.push(jobHtml);
    });
    const html = `
    <div class='section'>
        ${sectionTitle}
        <div class='section-content'>
        ${jobsHtml.join('')}
        </div>
    </div>
    `;
    return html;
}