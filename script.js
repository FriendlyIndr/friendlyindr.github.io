function showSection(sectionClass) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id === sectionClass+ '-section-btn') {
            button.style.backgroundColor = '#222';
        } else {
            button.style.backgroundColor = 'transparent';
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

showSection('projects');