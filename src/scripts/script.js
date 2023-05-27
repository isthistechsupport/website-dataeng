function toggleDarkMode() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const themeContainer = document.getElementById('dark-mode-toggle');
    const sectionHeadings = document.querySelectorAll('.section-heading');
    const sectionContent = document.querySelectorAll('.section-content');
    const dropbtn = document.getElementById('language-dropdown-toggle');
    const langSvg = document.querySelector('.language-icon');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    themeContainer.classList.toggle('dark-mode');
    dropbtn.classList.toggle('dark-mode');
    langSvg.classList.toggle('dark-mode');
    dropdownContent.classList.toggle('dark-mode');

    sectionHeadings.forEach((heading) => {
        heading.classList.toggle('dark-mode');
    });

    sectionContent.forEach((content) => {
        content.classList.toggle('dark-mode');
    });

    dropdownItems.forEach((item) => {
        item.classList.toggle('dark-mode');
    });
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

const dropbtn = document.getElementById('language-dropdown-toggle');

dropbtn.addEventListener('click', () => {
    document.querySelector(".dropdown-content").classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});