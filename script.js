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
            <a href=${project.link ? project.link : project.gitHub} target="_blank" style="text-decoration: none;">
                <h3>${project.name}</h3>
            </a>
            <p>Tech Stack: ${project.techStack}</p>
            <p>${project.description}</p>
            <a href=${project.gitHub} target="_blank" class="button-link">GitHub</a>
            ${project.link ? `<a href=${project.link} target="_blank" class="button-link">Demo</a>` : ''}
        `;

        projectsList.appendChild(projectDiv);
    }
}

for(const section of ['projects', 'skills', 'education', 'contact']) {
    document.getElementById(`${section}-section-btn`)
        .addEventListener('click', () => showSection(`${section}`));
}

document.querySelector('.mobile-menu')
    .addEventListener('click', () => {
        const navButtons = document.querySelector('.nav-buttons');
        if (navButtons.style.display === 'flex') {
            navButtons.style.display = 'none';
        } else {
            navButtons.style.display = 'flex';
        }
    });

showProjects();