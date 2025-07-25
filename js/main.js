// Alternar navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navbarMenu.classList.toggle('show');
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
                navbarToggle.setAttribute('aria-expanded', 'false');
                navbarMenu.classList.remove('show');
            }
        });
        
        // Cerrar menú al presionar Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navbarMenu.classList.contains('show')) {
                navbarToggle.setAttribute('aria-expanded', 'false');
                navbarMenu.classList.remove('show');
                navbarToggle.focus();
            }
        });
    }
    
    // Desplazamiento suave para enlaces ancla
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    
                    // Cerrar menú móvil si está abierto
                    if (navbarMenu && navbarMenu.classList.contains('show')) {
                        navbarToggle.setAttribute('aria-expanded', 'false');
                        navbarMenu.classList.remove('show');
                    }
                    
                    // Desplazarse al objetivo
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Validación de formulario
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Restablecer errores anteriores
            const errorMessages = this.querySelectorAll('.error-message');
            errorMessages.forEach(error => {
                error.textContent = '';
                error.style.display = 'none';
            });
            
            let isValid = true;
            
            // Validar correo electrónico
            const email = this.querySelector('#email');
            const emailError = this.querySelector('#email-error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email.value)) {
                emailError.textContent = 'Por favor ingresa un correo electrónico válido';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validar casilla de términos
            const terms = this.querySelector('#terms');
            const termsError = this.querySelector('#terms-error');
            
            if (!terms.checked) {
                termsError.textContent = 'Debes aceptar los términos y condiciones';
                termsError.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Mostrar mensaje de éxito (en app real, esto se enviaría al servidor)
                const formData = new FormData(this);
                
                // Mostrar mensaje de éxito
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div style="background-color: #0057A3; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; margin-top: 2rem;">
                        <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">¡Mensaje enviado!</h3>
                        <p style="margin-bottom: 0;">Gracias por contactarnos. Te responderemos pronto.</p>
                    </div>
                `;
                
                this.style.display = 'none';
                this.parentElement.appendChild(successMessage);
                
                // Desplazarse al mensaje de éxito
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                const liveRegion = document.getElementById('live-region');
                if (liveRegion) {
                    liveRegion.textContent = 'Formulario enviado exitosamente. Gracias por contactarnos.';
                    
                    setTimeout(() => {
                        liveRegion.textContent = '';
                    }, 5000);
                }
            }
        });
        
        // Validación en tiempo real para correo
        const emailInput = contactForm.querySelector('#email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const emailError = document.querySelector('#email-error');
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (this.value && !emailPattern.test(this.value)) {
                    emailError.textContent = 'Por favor ingresa un correo electrónico válido';
                    emailError.style.display = 'block';
                } else {
                    emailError.textContent = '';
                    emailError.style.display = 'none';
                }
            });
        }
        
        // Formato de número de teléfono
        const phoneInput = contactForm.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                // Eliminar caracteres no numéricos
                this.value = this.value.replace(/[^0-9]/g, '');
                
                // Limitar a 10 dígitos
                if (this.value.length > 10) {
                    this.value = this.value.slice(0, 10);
                }
            });
        }
    }
    
    // Mejorar navegación con teclado
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
    
    
    // Resaltar sección activa
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    highlightActiveSection();
    
    // Control del header: visible al inicio, se oculta/muestra según scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollTimeout;
    let isHeaderHidden = false;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        // Si estamos en la parte superior de la página, mostrar header siempre
        if (scrollTop < heroHeight * 0.5) {
            header.style.transform = 'translateY(0)';
            isHeaderHidden = false;
            clearTimeout(scrollTimeout);
        } else {
            // Detectar dirección del scroll
            if (scrollTop > lastScrollTop) {
                // Scrolling hacia abajo - ocultar header
                if (!isHeaderHidden) {
                    header.style.transform = 'translateY(-100%)';
                    isHeaderHidden = true;
                }
            } else {
                // Scrolling hacia arriba - mostrar header temporalmente
                header.style.transform = 'translateY(0)';
                isHeaderHidden = false;
                
                // Ocultar después de 3 segundos sin actividad
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    // Solo ocultar si no estamos en hover y no estamos cerca del top
                    if (!header.matches(':hover') && scrollTop > heroHeight * 0.5) {
                        header.style.transform = 'translateY(-100%)';
                        isHeaderHidden = true;
                    }
                }, 3000);
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Mantener header visible mientras el mouse está sobre él
    header.addEventListener('mouseenter', function() {
        clearTimeout(scrollTimeout);
        header.style.transform = 'translateY(0)';
        isHeaderHidden = false;
    });
    
    header.addEventListener('mouseleave', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        // Si estamos lejos del top, programar ocultación
        if (scrollTop > heroHeight * 0.5) {
            scrollTimeout = setTimeout(() => {
                header.style.transform = 'translateY(-100%)';
                isHeaderHidden = true;
            }, 2000);
        }
    });
});

