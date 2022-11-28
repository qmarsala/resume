export const createSectionTitle = (title) => {
    const html = `
    <div class="section-title">
        ${title}
        <div class="line"></div>
    </div>`;
    return html;
}

export const createList = (items) => {
    const lis = [];
    items.forEach(i => {
        lis.push(`<li>${i}</li>`)
    });
    const listEl = `<ul class='dash'>${lis.join('')}</ul>`;
    const wrapper = `<div class='dashed-list'>${listEl}</div>`;
    return wrapper;
}