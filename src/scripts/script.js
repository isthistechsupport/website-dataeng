function toggleDarkMode() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const themeContainer = document.getElementById('dark-mode-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const sectionHeadings = document.querySelectorAll('.section-heading');
    const sectionContent = document.querySelectorAll('.section-content');
    //sun taken from https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg
    //moon taken from https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg
    const sun = "/src/images/sun.svg";
    const moon = "/src/images/moon.svg"

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    themeContainer.classList.toggle('dark-mode');
    themeIcon.src = themeIcon.src === sun ? moon : sun;

    sectionHeadings.forEach((heading) => {
        heading.classList.toggle('dark-mode');
    });

    sectionContent.forEach((content) => {
        content.classList.toggle('dark-mode');
    });
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

function toggleDropdown() {
    const dropdownMenu = document.getElementById('languageMenu');
    dropdownMenu.classList.toggle('show');
}

function changeLanguage(lang) {
    let url;

    if (lang === 'en') {
        url = 'index.en.html';
    } else if (lang === 'es') {
        url = 'index.es_CO.html';
    }

    if (url) {
        window.location.href = url;
    }
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show')
})

hamburger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
});
