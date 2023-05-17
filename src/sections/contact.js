import { createSectionTitle } from "../components.js";

const formatPhoneNumber = (numberString) => {
    const countryCode = numberString[0];
    const areaCode = numberString.slice(1, 4);
    const firstThree = numberString.slice(4, 7);
    const lastFour = numberString.slice(7);
    return `${countryCode} (${areaCode}) ${firstThree}-${lastFour}`;
};

const createLink = (name, url, target = '') => {
    const html = `
    <div class='contact-link-text'>
       ${url.replace('mailto:', '').replace('tel:', '')}
    </div>  
    <div class='contact-link'>
        <a target='${target}' href='${url}'>${name}</a>
    </div>  
    `;
    return html;
}

const createLinks = (links) => {
    const linkDivs = [];
    links.forEach(l => {
        linkDivs.push(createLink(l.name, l.url));
    });
    return linkDivs.join('');
};

export const renderContact = (contact) => {
    const sectionTitle = createSectionTitle('Contact');
    const contactLinks = [
        { name: contact.email, url: `mailto:${contact.email}` },
        { name: formatPhoneNumber(contact.phone), url: `tel:${contact.phone}` },
        ...contact.links
    ]
    const linksHtml = createLinks(contactLinks);
    const html = `
    <div id='contact-info' class='side-panel-section'>
        ${sectionTitle}
        ${linksHtml}
    </div>
    `
    return html;
}
