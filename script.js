function showSection(sectionClass) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id === sectionClass+ '-section-btn') {
            button.style.backgroundColor = '#e22a25';
            button.style.color = '#fff';
        } else {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#000';
        }
    });
    const sections = document.querySelectorAll('.section-block');
    sections.forEach(section => {
        if (section.classList.contains(sectionClass)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

const projects = [
    {
        name: 'Resume Builder',
        link: 'https://resume-builder-one-omega.vercel.app/',
        gitHub: 'https://github.com/FriendlyIndr/ResumeBuilder',
        techStack: 'JavaScript, Java, Spring Boot',
        description: 'Resume Builder enables users to generate a PDF resume with the help of simple inputs. The only thing users have to do is insert their info and the app does the rest for them.',
    },
    {
        name: 'Mas',
        gitHub: 'https://github.com/FriendlyIndr/Mas',
        techStack: 'JavaScript, React, Express, Node, PostgreSQL, Sequelize, Zod',
        description: 'A simple weekly planner.',
    }
];

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

showSection('projects');
showProjects();