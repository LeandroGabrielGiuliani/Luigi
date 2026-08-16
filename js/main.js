document.addEventListener("DOMContentLoaded", () => {
  
  let ubicacionPrincipal = window.pageYOffset;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    let desplazamientoActual = window.pageYOffset;
    
    if (ubicacionPrincipal >= desplazamientoActual) {
      header.style.top = '0';
    } else {
      header.style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mostrar-seccion');
      }
    });
  }, { threshold: 0.1 });

  const secciones = document.querySelectorAll('.seccion-contenedor');
  secciones.forEach(seccion => {
    seccion.classList.add('ocultar-seccion');
    observer.observe(seccion);
  });

  const menuDB = [
    { id: 1, nombre: "Formaggi", categoria: "pizza", imagen: "./img/pizza.jpg" },
    { id: 2, nombre: "Diavola", categoria: "pizza", imagen: "./img/pizza2.jpg" },
    { id: 3, nombre: "Margherita Classica", categoria: "pizza", imagen: "./img/pizza3.jpg" },
    { id: 4, nombre: "Prosciutto e Rucola", categoria: "pizza", imagen: "./img/pizza 4.jpg" },
    
    { id: 5, nombre: "Vermicelli", categoria: "pasta", imagen: "./img/pasta1.jpg" },
    { id: 6, nombre: "Pappardelle", categoria: "pasta", imagen: "./img/pasta2.jpg" },
    { id: 7, nombre: "Lasagna della Nonna", categoria: "pasta", imagen: "./img/pasta3.jpg" },
    { id: 8, nombre: "Ravioli di Carne", categoria: "pasta", imagen: "./img/pasta 4.jpg" },
    
    { id: 9, nombre: "Dimmi Hamburger", categoria: "burger", imagen: "./img/burguer1.jpg" },
    { id: 10, nombre: "Doppia carne", categoria: "burger", imagen: "./img/burguer2.jpg" },
    { id: 11, nombre: "Assassino", categoria: "burger", imagen: "./img/burguer3.jpg" },
    { id: 12, nombre: "Funghi", categoria: "burger", imagen: "./img/burguer 4.jpg" }
  ];

  const contenedorPizzas = document.getElementById('contenedor-pizzas');
  const contenedorPastas = document.getElementById('contenedor-pastas');
  const contenedorBurgers = document.getElementById('contenedor-burgers');

  function renderizarMenu(productos) {
    productos.forEach(producto => {
      const tarjetaHTML = `
        <div class="card-producto">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h4>${producto.nombre}</h4>
        </div>
      `;

      if (producto.categoria === 'pizza') {
        contenedorPizzas.innerHTML += tarjetaHTML;
      } else if (producto.categoria === 'pasta') {
        contenedorPastas.innerHTML += tarjetaHTML;
      } else if (producto.categoria === 'burger') {
        contenedorBurgers.innerHTML += tarjetaHTML;
      }
    });
  }

  renderizarMenu(menuDB);

  const btnEnviar = document.querySelector('.btn-enviar');
  const formulario = document.querySelector('.formulario-moderno');

  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const consulta = document.getElementById('consulta').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || consulta === '' || mensaje === '') {
      alert('⚠️ Por favor, completá todos los campos antes de enviar.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('⚠️ Por favor, ingresá un correo electrónico válido.');
      return;
    }

    const textoOriginal = btnEnviar.textContent;
    btnEnviar.textContent = 'Enviando mensaje...';
    btnEnviar.style.backgroundColor = '#7f8c8d';
    btnEnviar.style.cursor = 'not-allowed';

    setTimeout(() => {
      alert(`¡Gracias ${nombre}! Hemos recibido tu consulta. Te responderemos a ${email} a la brevedad.`);
      
      formulario.reset();
      btnEnviar.textContent = textoOriginal;
      btnEnviar.style.backgroundColor = 'var(--color-principal)';
      btnEnviar.style.cursor = 'pointer';
    }, 2000);
  });

});