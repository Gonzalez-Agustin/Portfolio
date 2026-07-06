// === TYPEWRITER EFFECT ===
const textElement = document.getElementById('typewriter');
const text = "Agustín Nicolás González |";
let index = 0;
let isDeleting = false;
let delta = 150;

function typeWriter() {
    if (isDeleting) {
        textElement.textContent = text.substring(0, index - 1);
        index--;
        delta = 100;
    } else {
        textElement.textContent = text.substring(0, index + 1);
        index++;
        delta = 150;
    }

    if (!isDeleting && index === text.length) {
        isDeleting = true;
        delta = 2000;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        delta = 500;
    }

    setTimeout(typeWriter, delta);
}

// Start Typewriter
window.onload = function () {
    typeWriter();
    // Init Lang
    initLanguage();
};

// === THEME TOGGLE ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check saved preference immediately
const updateThemeIcons = () => {
    const astroIcon = document.getElementById('astro-skill-icon');
    if (astroIcon) {
        const isLight = body.classList.contains('light-mode');
        astroIcon.src = isLight ? 'imagenes/astro-icon-dark.png' : 'imagenes/astro-icon-light-gradient.png';
    }
};

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    updateThemeIcons();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateThemeIcons();

    // Save preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// === INTERNATIONALIZATION (i18n) ===
const translations = {
    es: {
        'nav-logo': 'PORTFOLIO.',
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-services': 'Servicios',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        'hero-role': 'Desarrollador Web <span class="accent-sep">|</span> Técnico Informático Profesional',
        'hero-bio': 'Compromiso, creatividad y soluciones técnicas sólidas para tus ideas digitales.',
        'hero-cv': 'Descargar CV',
        'hero-cv-path': 'imagenes/Agustin_Nicolas_Gonzalez_ES.pdf',
        'about-title': 'Sobre Mí',
        'about-history-title': 'Mi Trayectoria',
        'about-history-text': 'Como Desarrollador Web, me especializo en crear aplicaciones sólidas y eficientes utilizando tecnologías como Python, Node, Java, React, Astro y Tailwind. Además, soy Técnico Informático Profesional, lo que me brinda una base técnica muy fuerte. Mi experiencia abarca desde el despliegue de redes y soporte en el Hospital José María Cullen, hasta mi rol actual en Belkcar Informática, donde combino el desarrollo de software con el mantenimiento integral de infraestructura IT. Mi objetivo es aportar valor a través del código y escalar mis habilidades en un entorno 100% enfocado al desarrollo.',
        'about-timeline-title': 'Experiencia Reciente',
        'timeline-date-1': 'Feb 2026 - Actualidad',
        'timeline-role-1': 'Programador y Servicio Técnico',
        'timeline-company-1': 'Belkcar Informática',
        'timeline-date-2': 'Abr 2025 - Jul 2025',
        'timeline-role-2': 'Soporte Técnico y Mantenimiento',
        'timeline-company-2': 'Hospital José María Cullen',
        'timeline-date-3': '2025',
        'timeline-role-3': 'Técnico Informático Profesional',
        'timeline-company-3': 'Graduación',
        'services-title': 'Mis Servicios',
        'service-1-title': 'Diseño Web Corporativo',
        'service-1-desc': '<strong>Presencia digital profesional para tu negocio.</strong><br>Creación de páginas web institucionales, Landing Pages y Portafolios (ideales para clínicas, estudios contables, herrerías). Diseños modernos, rápidos y adaptados a celulares para atraer más clientes desde Google.',
        'service-2-title': 'E-Commerce y Tiendas Online',
        'service-2-desc': '<strong>Vende tus productos por internet 24/7.</strong><br>Desarrollo de tiendas virtuales autogestionables. Catálogo de productos, integración con pasarelas de pago y carritos de compra. Ideal para ferreterías, tiendas de ropa o cualquier negocio que busque expandir sus ventas a nivel nacional.',
        'service-3-title': 'Sistemas a Medida y Bases de Datos',
        'service-3-desc': '<strong>Automatización y gestión inteligente para negocios.</strong><br><ul style="padding-left: 20px; text-align: left; margin-top: 10px; margin-bottom: 10px;"><li><strong>Gimnasios:</strong> Base de datos (PostgreSQL/Access) con interfaz gráfica. Control de acceso mediante molinetes y validación de DNI en tiempo real.</li><li><strong>Gastronomía:</strong> Cartas digitales dinámicas con código QR y panel administrativo para actualizar precios en vivo sin reimprimir menús.</li></ul><em style="color: var(--primary-color);">Tecnologías: Node.js, Python, PostgreSQL, Access.</em>',
        'service-4-title': 'Mantenimiento y Soporte IT',
        'service-4-desc': '<strong>Infraestructura tecnológica siempre funcionando.</strong><br>Como Técnico Informático Profesional, ofrezco armado, reparación y mantenimiento preventivo de PCs. Configuración de redes empresariales, backups corporativos e instalación de sistemas operativos en locales comerciales.',
        'projects-title': 'Mis Proyectos',
        'project-belkcar-title': 'Belkcar Informática',
        'project-belkcar-desc': 'Participación en el desarrollo del sitio web oficial. Trabajo en equipo utilizando modernas tecnologías frontend.',
        'project-belkcar-demo': 'Ver Demo',
        'project-pro-title': 'Pro Mundial 2026',
        'project-pro-desc': 'Plataforma web de pronósticos para el Mundial 2026. Proyecto colaborativo utilizado por Radio Brisas.',
        'project-pro-demo': 'Ver Demo',
        'project-val-title': 'Panel de Valorant',
        'project-val-desc': 'Dashboard interactivo con diseño gamer premium. Consulta estadísticas en tiempo real y rendimiento de jugadores.',
        'project-std-title': 'Standard Muebles',
        'project-std-desc': 'Sitio web corporativo para empresa de muebles.',
        'project-view-previews': 'Ver vistas previas',
        'project-coming-soon': '🚀 Próximamente',
        'project-amb-title': 'AmbieGen',
        'project-amb-desc': 'Plataforma inmersiva para generar ambientes sonoros relajantes. Desarrollada para potenciar la concentración y el enfoque.',
        'project-py-title': 'Automatizador de descargas',
        'project-py-desc': 'Script de automatización para gestión de descargas.',
        'project-1-title': 'Portfolio Personal',
        'project-1-desc': 'Diseño y desarrollo de este portfolio web interactivo.',
        'skills-title': 'Habilidades Técnicas',
        'skills-cat-frontend': 'Front-end',
        'skills-cat-backend': 'Back-end',
        'skills-cat-java': 'Java',
        'skills-cat-other': 'Herramientas & Entorno',
        'btn-video': 'Ver Video',
        'skills-cat-1': 'Lenguajes de Programación',
        'skills-cat-2': 'Frameworks & Librerías',
        'skills-cat-3': 'Herramientas & Sistemas Operativos',
        'soft-skills-title': 'Habilidades Blandas',
        'soft-1': 'Aprendizaje Constante',
        'soft-2': 'Comprometido',
        'soft-3': 'Resolución de Problemas',
        'soft-4': 'Trabajo en Equipo',
        'soft-5': 'Adaptabilidad',
        'contact-title': 'Envíame un Mensaje',
        'form-name-ph': 'Tu Nombre',
        'form-email-ph': 'Tu Email',
        'form-subject-ph': 'Asunto',
        'form-message-ph': 'Tu Mensaje',
        'form-submit': 'Enviar Mensaje',
        'footer-role': 'Desarrollador Web',
        'footer-slogan': 'Transformando ideas en experiencias digitales sólidas y eficientes.',
        'footer-explore': 'Explorar',
        'footer-social-title': 'Redes Sociales',
        'footer-contact': 'Contacto',
        'footer-links': 'Links',
        'footer-copy': '© 2026 Agustín Nicolás González. Todos los derechos reservados.'
    },
    en: {
        'nav-logo': 'PORTFOLIO.',
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-services': 'Services',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'hero-role': 'Web Developer <span class="accent-sep">|</span> Professional IT Technician',
        'hero-bio': 'Commitment, creativity, and solid technical solutions for your digital ideas.',
        'hero-cv': 'Download CV',
        'hero-cv-path': 'imagenes/Agustin_Nicolas_Gonzalez_EN.pdf',
        'about-title': 'About Me',
        'about-history-title': 'My Journey',
        'about-history-text': 'As a Web Developer, I specialize in building robust and efficient applications using technologies like Python, Node, Java, React, Astro, and Tailwind. I am also a Professional IT Technician, which gives me a very strong technical foundation. My experience ranges from deploying networks and IT support at Hospital José María Cullen, to my current role at Belkcar Informática, where I combine software development with comprehensive IT infrastructure maintenance. My goal is to add value through code and scale my skills in a 100% development-focused environment.',
        'about-timeline-title': 'Recent Experience',
        'timeline-date-1': 'Feb 2026 - Present',
        'timeline-role-1': 'Programmer & IT Support',
        'timeline-company-1': 'Belkcar Informática',
        'timeline-date-2': 'Apr 2025 - Jul 2025',
        'timeline-role-2': 'Tech Support & Maintenance',
        'timeline-company-2': 'Hospital José María Cullen',
        'timeline-date-3': '2025',
        'timeline-role-3': 'Professional IT Technician',
        'timeline-company-3': 'Graduation',
        'services-title': 'My Services',
        'service-1-title': 'Corporate Web Design',
        'service-1-desc': '<strong>Professional digital presence for your business.</strong><br>Creation of institutional websites, Landing Pages, and Portfolios (ideal for clinics, accounting firms, local shops). Modern, fast, and mobile-friendly designs to attract more clients from Google.',
        'service-2-title': 'E-Commerce & Online Stores',
        'service-2-desc': '<strong>Sell your products online 24/7.</strong><br>Development of self-manageable online stores. Product catalogs, payment gateway integration, and shopping carts. Ideal for hardware stores, clothing shops, or any business looking to expand sales nationwide.',
        'service-3-title': 'Custom Systems & Databases',
        'service-3-desc': '<strong>Automation and intelligent management for businesses.</strong><br><ul style="padding-left: 20px; text-align: left; margin-top: 10px; margin-bottom: 10px;"><li><strong>Gyms:</strong> Databases (PostgreSQL/Access) with a graphical interface. Access control via turnstiles and real-time ID validation.</li><li><strong>Gastronomy:</strong> Dynamic digital menus with QR codes and an admin panel to update prices live without reprinting menus.</li></ul><em style="color: var(--primary-color);">Tech: Node.js, Python, PostgreSQL, Access.</em>',
        'service-4-title': 'IT Maintenance & Support',
        'service-4-desc': '<strong>Technology infrastructure always running.</strong><br>As a Professional IT Technician, I offer PC assembly, repair, and preventive maintenance. Enterprise network configuration, corporate backups, and OS installation for commercial spaces.',
        'projects-title': 'My Projects',
        'project-belkcar-title': 'Belkcar Informática',
        'project-belkcar-desc': 'Collaboration in the development of the official website. Teamwork using modern frontend technologies.',
        'project-belkcar-demo': 'View Demo',
        'project-pro-title': 'Pro Mundial 2026',
        'project-pro-desc': 'World Cup 2026 prediction platform. Collaborative project used by Radio Brisas broadcasting.',
        'project-pro-demo': 'View Demo',
        'project-val-title': 'Valorant Dashboard',
        'project-val-desc': 'Interactive dashboard with premium gamer UI. Track real-time player statistics and performance metrics.',
        'project-std-title': 'Standard Furniture',
        'project-std-desc': 'Institutional solidity and technical detail for custom industrial projects.',
        'project-view-previews': 'View Previews',
        'project-coming-soon': '🚀 Coming Soon',
        'project-amb-title': 'AmbieGen',
        'project-amb-desc': 'Immersive web application to generate relaxing soundscapes. Designed to boost focus and productivity.',
        'project-py-title': 'Download Automator',
        'project-py-desc': 'Automation script for intelligent download management.',
        'project-1-title': 'Personal Portfolio',
        'project-1-desc': 'Design and development of this interactive web portfolio.',
        'skills-title': 'Technical Skills',
        'skills-cat-frontend': 'Front-end',
        'skills-cat-backend': 'Back-end',
        'skills-cat-java': 'Java',
        'skills-cat-other': 'Others',
        'btn-video': 'Watch Video',
        'skills-cat-1': 'Programming Languages',
        'skills-cat-2': 'Frameworks & Libraries',
        'skills-cat-3': 'Tools & Operating Systems',
        'soft-skills-title': 'Soft Skills',
        'soft-1': 'Constant Learning',
        'soft-2': 'Committed',
        'soft-3': 'Problem Solving',
        'soft-4': 'Teamwork',
        'soft-5': 'Adaptability',
        'contact-title': 'Send Me a Message',
        'form-name-ph': 'Your Name',
        'form-email-ph': 'Your Email',
        'form-subject-ph': 'Subject',
        'form-message-ph': 'Your Message',
        'form-submit': 'Send Message',
        'footer-role': 'Web Developer',
        'footer-slogan': 'Transforming ideas into solid and efficient digital experiences.',
        'footer-explore': 'Explore',
        'footer-social-title': 'Social Media',
        'footer-contact': 'Contact',
        'footer-links': 'Links',
        'footer-copy': '© 2026 Agustín Nicolás González. All rights reserved.'
    }
};

const languageToggle = document.getElementById('language-toggle');
let currentLang = localStorage.getItem('lang') || 'es';

function updateLanguage(lang) {
    if (!translations[lang]) return;

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar enlace de CV
    const cvBtn = document.querySelector('[data-i18n="hero-cv"]');
    if (cvBtn && translations[lang]['hero-cv-path']) {
        cvBtn.href = translations[lang]['hero-cv-path'];
        const fileName = translations[lang]['hero-cv-path'].split('/').pop();
        cvBtn.setAttribute('download', fileName);
    }


    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update Toggle Button Text
    if (languageToggle) {
        languageToggle.textContent = lang.toUpperCase();
    }

    localStorage.setItem('lang', lang);
    currentLang = lang;
}

function initLanguage() {
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }

    updateLanguage(currentLang);
}


// === EMAILJS INTEGRATION ===
(function () {
    emailjs.init("WEwh4d4tPh9_S70-x");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = this.querySelector('.submit-btn');
    const originalText = btn.innerText;

    // Check lang for loading text
    const loadingText = currentLang === 'en' ? 'Sending...' : 'Enviando...';
    btn.innerText = loadingText;

    const statusMsg = document.getElementById('form-status');

    // Clear previous status
    statusMsg.innerText = '';
    statusMsg.className = 'form-status';

    emailjs.sendForm('service_z97xbvg', 'template_wnkt4pl', this)
        .then(function () {
            const successText = currentLang === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado con éxito!';
            statusMsg.innerText = successText;
            function hideStatus() {
                formStatus.classList.remove('show', 'error', 'success');
                formStatus.textContent = '';
            }
            statusMsg.classList.add('success');
            btn.innerText = originalText;
            document.getElementById('contact-form').reset();

            // Clear message after 5 seconds
            setTimeout(() => {
                statusMsg.innerText = '';
                statusMsg.className = 'form-status';
            }, 5000);

        }, function (error) {
            const errorText = currentLang === 'en' ? 'Error sending message. Try again.' : 'Error al enviar. Intenta nuevamente.';
            statusMsg.innerText = errorText;
            statusMsg.classList.add('error');
            btn.innerText = originalText;
            console.error('EmailJS Error:', error);
        });
});



// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// === MODAL & INTERACTIVE LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinksContainer.classList.remove('active');
            }
        });
    }

    // --- VIDEO MODAL ---
    const modal = document.getElementById("video-modal");
    const spanClose = document.querySelector(".close-modal");
    const videoPlayer = document.getElementById("project-video");

    if (videoPlayer) {
        const videoSource = videoPlayer.querySelector('source');
        const videoTriggers = document.querySelectorAll('.video-trigger');

        videoTriggers.forEach(trigger => {
            trigger.onclick = function (e) {
                e.preventDefault();
                const videoFile = this.getAttribute('data-video');

                if (videoFile && videoSource) {
                    videoSource.src = videoFile;
                    videoPlayer.load();
                    if (modal) modal.style.display = "flex";
                    videoPlayer.play().catch(e => console.log("Autoplay prevented:", e));
                }
            }
        });
    }

    if (spanClose && modal) {
        spanClose.onclick = function () {
            modal.style.display = "none";
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
        }
    }

    // --- GALLERY MODAL ---
    const galleryModal = document.getElementById("gallery-modal");
    const galleryImg = document.getElementById("gallery-image");
    const closeGallery = document.querySelector(".close-gallery");
    const prevBtn = document.getElementById("gallery-prev");
    const nextBtn = document.getElementById("gallery-next");
    const currentSlideTxt = document.getElementById("current-slide");

    const galleryImages = [];

    let currentImgIndex = 0;

    function updateGalleryImage() {
        if (galleryImg) {
            galleryImg.src = galleryImages[currentImgIndex];
            if (currentSlideTxt) currentSlideTxt.innerText = currentImgIndex + 1;
        }
    }

    document.querySelectorAll('.gallery-trigger').forEach(trigger => {
        trigger.onclick = function (e) {
            e.preventDefault();
            currentImgIndex = 0;
            updateGalleryImage();
            if (galleryModal) galleryModal.style.display = "flex";
        }
    });

    if (prevBtn) {
        prevBtn.onclick = () => {
            currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
            updateGalleryImage();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
            updateGalleryImage();
        };
    }

    if (closeGallery && galleryModal) {
        closeGallery.onclick = () => {
            galleryModal.style.display = "none";
        };
    }

    // Key navigation
    window.addEventListener('keydown', (e) => {
        if (galleryModal && galleryModal.style.display === "flex") {
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "Escape") closeGallery.click();
        }
    });

    // Global background click closer
    window.onclick = function (event) {
        if (modal && event.target == modal) {
            modal.style.display = "none";
            if (videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
        }
        if (galleryModal && event.target == galleryModal) {
            galleryModal.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // --- SKILLS VIEW SWITCHER ---
    const skillsSection = document.getElementById('habilidades');
    const skillsContainer = document.querySelector('.skills-container');
    const viewButtons = document.querySelectorAll('.view-btn');

    if (skillsSection && viewButtons && skillsContainer) {
        // Function to setup infinite marquee
        const setupInfiniteMarquee = () => {
            const grids = skillsContainer.querySelectorAll('.skills-grid');
            grids.forEach(grid => {
                // Remove existing clones
                const clones = grid.querySelectorAll('.clone');
                clones.forEach(c => c.remove());
                grid.classList.remove('animate-marquee');

                const items = Array.from(grid.querySelectorAll('.skill-card:not(.clone)'));

                if (items.length > 0) {
                    // Always clone to ensure we have at least 2 full sets
                    items.forEach(item => {
                        const clone = item.cloneNode(true);
                        clone.classList.add('clone');
                        grid.appendChild(clone);
                    });

                    // Add the marquee class
                    if (items.length >= 2) {
                        grid.classList.add('animate-marquee');

                        // Adjust duration based on count (speed consistency)
                        const duration = items.length * 5;
                        grid.style.animationDuration = `${duration}s`;
                    }
                }
            });
        };

        const cleanupMarquee = () => {
            const clones = skillsContainer.querySelectorAll('.clone');
            clones.forEach(c => c.remove());
            const grids = skillsContainer.querySelectorAll('.skills-grid');
            grids.forEach(grid => grid.classList.remove('animate-marquee'));
        };

        viewButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const viewMode = btn.getAttribute('data-view');

                // Update active button
                viewButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update section class
                skillsSection.classList.remove('grid-view', 'columns-view', 'carousel-view');
                skillsSection.classList.add(`${viewMode}-view`);

                // Logic for carousel
                if (viewMode === 'carousel') {
                    setupInfiniteMarquee();
                } else {
                    cleanupMarquee();
                }
            });
        });

        // Initial cleanup and setup if needed
        cleanupMarquee();
        if (skillsSection.classList.contains('carousel-view')) {
            setupInfiniteMarquee();
        }
    }

    // --- TYPEWRITER EFFECT ---elements to animate
    document.querySelectorAll('.hero-text, .hero-image, .about-content, .skill-card, .project-card, .contact-form, .soft-tag, .service-card').forEach((el) => {
        el.classList.add('hidden-element');
        observer.observe(el);
    });
});

// Accordion Services Logic
document.addEventListener('DOMContentLoaded', () => {
    const serviceHeaders = document.querySelectorAll('.service-header');
    serviceHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            const icon = header.querySelector('.service-icon');
            
            // Toggle active class
            card.classList.toggle('active');
            
            // Update icon text
            if (card.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});
