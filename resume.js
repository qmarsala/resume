const createList = (items) => {
    const lis = [];
    items.forEach(i => {
        lis.push(`<li>${i}</li>`)
    });
    const listEl = `<ul class='dash'>${lis.join('')}</ul>`;
    const wrapper = `<div class='dashed-list'>${listEl}</div>`;
    return wrapper;
}

const renderContact = (contact) => {
    const formatPhoneNumber = (numberString) => {
        const countryCode = numberString[0];
        const areaCode = numberString.slice(1, 4);
        const firstThree = numberString.slice(4, 7);
        const lastFour = numberString.slice(7);
        return `${countryCode} (${areaCode}) ${firstThree}-${lastFour}`;
    };
    const renderLinks = (links) => {
        const linkDivs = [];
        links.forEach(l => {
            linkDivs.push(`
            <div class='contact-link'>
                <a target='_blank' href='${l.url}'>${l.name}</a>
            </div>
            `);
        });
        return linkDivs.join('');
    };
    const linksHtml = renderLinks(contact.links);
    const prettyPhone = formatPhoneNumber(contact.phone);
    const html = `
    <div id='contact-info' class='side-panel-section'>
        <div class='section-title'>
            Contact
        </div>
        <div class='contact-link'>
            <a href='mailto:${contact.email}'>${contact.email}</a>
        </div>
        <div class='contact-link'>
            <a href='tel:${contact.phone}'>${prettyPhone}</a>
        </div>
        <hr />
        ${linksHtml}
    </div>
    `
    return html;
}

const renderProject = (title, description) => {
    const descriptionHtml = createList(description);
    const html = `
    <div class='project'>
        <div class='project-title'>${title}</div>
        <div class='project-description'>${descriptionHtml}</div>
    </div>
    `;
    return html;
}

const renderProjects = (company, position, date, projects) => {
    const projectsHtml = [];
    projects.forEach(p => {
        const pHtml = renderProject(p.title, p.description)
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

const renderExperience = (experience) => {
    const jobsHtml = [];
    experience.forEach(e => {
        const jobHtml = renderProjects(e.company, e.position, e.date, e.projects);
        jobsHtml.push(jobHtml);
    });
    const html = `
    <div class='section'>
        <div class='section-title'>
            Experience
            <div class='line'></div>
        </div>
        <div class='section-content'>
        ${jobsHtml.join('')}
        </div>
    </div>
    `;
    return html;
}

const renderSkills = (skills) => {
    const skillsHtml = createList(skills);
    const html = `
        <div id='skills' class='side-panel-section'>
            <div class='section-title'>
                Skills
            </div>
            ${skillsHtml}
        </div>
        `;
    return html;
}

const renderAboutMe = (aboutme) => {
    const paragraphs = [];
    aboutme.forEach(p => paragraphs.push(`<p>${p}</p>`));
    const html = `
        <div class='section'>
            <div class='section-title'>
                About Me
                <div class='line'></div>
            </div>
            <div class='section-content'>
                ${paragraphs.join('')}
            </div>
        </div>
        `;
    return html;
}

const renderResume = (data) => {
    const aboutmeHtml = renderAboutMe(data.aboutme);
    const experienceHtml = renderExperience(data.experience);
    //const educationHtml = renderEducation(data.experience);
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

buildResume();