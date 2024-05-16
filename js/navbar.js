function generateNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary', 'dark');
    navbar.setAttribute('data-bs-theme', 'dark');
    const container = document.createElement('div');
    container.classList.add('container-fluid');
  
    const logo = document.createElement('img');
    logo.src = 'assets/logo.png';
    logo.alt = 'Logo';
    logo.classList.add('d-inline-block', 'align-text-top');
    logo.style.width = '10%'; 
    logo.style.height = '10%'; 
    container.appendChild(logo);
  
    const title = document.createElement('h1');
    title.textContent = 'Rayo Makween';
    title.style.color = 'white'; 
    title.classList.add('jaini-regular');
    container.appendChild(title);
  
    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.dataset.bsToggle = 'collapse';
    togglerButton.dataset.bsTarget = '#navbarTogglerDemo02';
    togglerButton.setAttribute('aria-controls', 'navbarTogglerDemo02');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
    togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
    container.appendChild(togglerButton);

    // getCityTemperature('Valparaiso').then(cityTemperature => {
    //   const temperatureSpan = document.createElement('span');
    //   temperatureSpan.textContent = `Temperatura: ${Math.round(cityTemperature)}°C`;
    //   container.appendChild(temperatureSpan);
    // });

    getCityTemperature('Valparaiso').then(cityTemperature => {
      const temperatureSpan = document.createElement('span');
      
      const thermometerIcon = document.createElement('i');
      thermometerIcon.classList.add('fas', 'fa-thermometer-half'); // Clases de Font Awesome para el ícono de termómetro
      
      temperatureSpan.appendChild(thermometerIcon);
      temperatureSpan.append(` ${Math.round(cityTemperature)}°C`);
      temperatureSpan.style.color = 'white';     
      temperatureSpan.style.marginRight = '10px';
      container.appendChild(temperatureSpan);
  });
  
    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarTogglerDemo02';
  
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');
  
    const navItems = [
      { text: 'Inicio', link: 'index.html' },
      { text: 'Agenda', link: 'formContacto.html' },
      { text: 'Registro y Autenticación', link: 'registroUsuario.html' },
      { text: 'Últimos Trabajos', link: 'galeriaMantenciones.html' }
    ];
  
    navItems.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      const a = document.createElement('a');
      a.classList.add('nav-link');
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    collapseDiv.appendChild(ul);
  
    const dropdownDiv = document.createElement('div');
    dropdownDiv.classList.add('dropdown');
  
    const dropdownToggle = document.createElement('a');
    dropdownToggle.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
    dropdownToggle.href = '#';
    dropdownToggle.setAttribute('role', 'button');
    dropdownToggle.dataset.bsToggle = 'dropdown';
    dropdownToggle.setAttribute('aria-expanded', 'false');
    dropdownToggle.textContent = 'Mecánicos';
    dropdownDiv.appendChild(dropdownToggle);
  
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');
  
    const mechanics = [
      { text: 'Ayleen Guajardo', link: 'AyleenG.html' },
      { text: 'Francisco Ormeño', link: 'FranciscoOrm.html' },
      { text: 'Julián Bahamondes', link: 'JulianBah.html' }
    ];
  
    mechanics.forEach(mechanic => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.classList.add('dropdown-item');
      a.href = mechanic.link;
      a.textContent = mechanic.text;
      li.appendChild(a);
      dropdownMenu.appendChild(li);
    });
  
    dropdownDiv.appendChild(dropdownMenu);
    collapseDiv.appendChild(dropdownDiv);
    container.appendChild(collapseDiv);
  
    const cartLink = document.createElement('a');
    cartLink.target = '_blank';
    cartLink.href = 'carrito.html';
    cartLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    container.appendChild(cartLink);
  
    navbar.appendChild(container);


  
    return navbar;
  }

  
  async function getCityTemperature(city) {
    try {
      const apiKey = '533d0c39d81269e1b9e5aa5979a1720d'; 
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      return data.main.temp;
    } catch (error) {
      console.error('Error al obtener la temperatura:', error);
      return 'error';
    }
  } 
