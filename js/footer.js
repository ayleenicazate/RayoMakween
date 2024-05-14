function generateFooter() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            margin: 0;
        }
        footer {
            background-color: #000;
            color: #fff;
            padding: 10px 5px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 5px;
            margin-top: auto;
        }
        .footer-section {
            padding: 15px;
        }
        .footer-section h3 {
            margin-bottom: 10px;
        }
        .footer-section p,
        .footer-section a {
            color: #fff;
            text-decoration: none;
        }
        .footer-section a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    const footer = document.createElement('footer');
    
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('footer-section');
    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'Sobre Nosotros';
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Somos un taller mecánico dedicado a brindar el mejor servicio para tu vehículo.';
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);

    const hoursSection = document.createElement('div');
    hoursSection.classList.add('footer-section');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Horas de Atención';
    const hoursText = document.createElement('p');
    hoursText.textContent = 'Lunes a Viernes, 8:00 AM - 6:00 PM';
    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursText);

    const contactSection = document.createElement('div');
    contactSection.classList.add('footer-section');
    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Contáctanos';
    const contactText = document.createElement('p');
    contactText.innerHTML = 'Teléfono: +56 9 1234 5678<br>Email: contacto@taller.com';
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

