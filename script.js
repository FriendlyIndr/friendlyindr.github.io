import { projects } from "./projects.js";

function showSection(sectionClass) {
    const buttons = document.querySelectorAll('.nav-buttons a');
    buttons.forEach(button => {
        if (button.id === sectionClass+ '-section-btn') {
            button.style.backgroundColor = '#e22a25';
            button.style.color = '#fff';
        } else {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#000';
        }
    });
}

function showProjects() {
    const projectsList = document.getElementById('projects-list');

    for (const project of projects) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.innerHTML = `
            <div class='project-content'>
                <a href=${project.link ? project.link : project.gitHub} target="_blank" style="text-decoration: none;">
                    <h3>${project.name}</h3>
                </a>
                <p>Tech Stack: ${project.techStack}</p>
                <p>${project.description}</p>
                <a href=${project.gitHub} target="_blank" class="button-link">GitHub</a>
                ${project.link ? `<a href=${project.link} target="_blank" class="button-link">Demo</a>` : ''}
            <div>
        `;

        projectsList.appendChild(projectDiv);
    }
}

for(const section of ['projects', 'skills', 'education', 'contact']) {
    document.getElementById(`${section}-section-btn`)
        .addEventListener('click', () => showSection(`${section}`));
}

document.querySelector('.mobile-menu')
    .addEventListener('click', (e) => {
        const navButtons = document.querySelector('.nav-buttons');
        navButtons.classList.toggle('open');
        e.stopPropagation();
    });

document.addEventListener('click', (e) => {
    const navButtons = document.querySelector('.nav-buttons');
    const mobileMenu = document.querySelector('.mobile-menu');

    const isMobile = window.innerWidth <= 480;

    if (!isMobile) return;

    if (
        navButtons.classList.contains('open') &&
        !navButtons.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ) {
        navButtons.classList.remove('open');
    }
});

showProjects();