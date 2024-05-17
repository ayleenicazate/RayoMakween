function generateFooter() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#000';
    footer.style.color = '#fff';
    footer.style.padding = '20px';
    footer.style.display = 'grid';
    footer.style.gridTemplateColumns = '1fr 1fr 1fr';
    footer.style.gridTemplateRows = 'auto';
    footer.style.gap = '20px';
    footer.style.marginTop = 'auto';

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('footer-section');
    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'Sobre Nosotros';
    aboutTitle.style.marginBottom = '10px';
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Somos un taller mecánico dedicado a brindar el mejor servicio para tu vehículo.';
    aboutText.style.color = '#fff';
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);

    const hoursSection = document.createElement('div');
    hoursSection.classList.add('footer-section');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Horas de Atención';
    hoursTitle.style.marginBottom = '10px';
    const hoursText = document.createElement('p');
    hoursText.textContent = 'Lunes a Viernes, 8:00 AM - 6:00 PM';
    hoursText.style.color = '#fff';
    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursText);

    const contactSection = document.createElement('div');
    contactSection.classList.add('footer-section');
    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Contáctanos';
    contactTitle.style.marginBottom = '10px';
    const contactText = document.createElement('p');
    contactText.innerHTML = 'Teléfono: +56 9 1234 5678<br>Email: contacto@taller.com';
    contactText.style.color = '#fff';
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactText);

    footer.appendChild(aboutSection);
    footer.appendChild(hoursSection);
    footer.appendChild(contactSection);

    document.body.appendChild(footer);
}


// Llama a la función generateFooter después de que la página haya terminado de cargarse
document.addEventListener('DOMContentLoaded', (event) => {
    generateFooter();
});

