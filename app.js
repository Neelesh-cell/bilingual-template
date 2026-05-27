const translations = {
    en: {
        pageTitle: "Cognitive Accessibility Demo",
        navHome: "Home",
        navAbout: "About",
        navLabs: "Labs",
        navTestimonials: "Testimonials",
        navTech: "Tech",
        navFaq: "FAQ",
        heroTitle: "Clarity Through Design",
        heroSubtitle: "Experience a digital space where cognitive load is minimized and user control is paramount. Seamless, lightning-fast, and inclusive.",
        heroSubtitle2: "A demonstration of long-scroll navigation built for neurodivergent users — with active section tracking, instant bilingual switching, and full user control.",
        heroCta: "Explore the Concept",
        accordionLabel: "Expand to read more — or collapse what you don't need",
        tagAbout: "// 01 — About",
        aboutTitle: "About the Initiative",
        aboutP1: "Our mission is to build digital environments that respect the user's attention. By leveraging native HTML semantic elements like details and summary, we create manageable chunks of information.",
        aboutP2: "This prevents visual overwhelm and empowers users to reveal content only when they are ready to process it.",
        tagLabs: "// 02 — Labs",
        labsTitle: "Research Labs",
        labsCard1Title: "Typography",
        labsCard1Desc: "High-contrast, highly legible fonts reduce reading fatigue.",
        labsCard2Title: "Spatial Layout",
        labsCard2Desc: "Generous whitespace provides necessary visual breathing room.",
        labsCard3Title: "Predictability",
        labsCard3Desc: "Consistent navigation and state retention build trust.",
        tagTest: "// 03 — Voices",
        testTitle: "User Voices",
        testQuote1: "\"Finally, a website that doesn't bombard me with everything all at once. The instant language switch is like magic.\"",
        testAuthor1: "— Elena R., Accessibility Advocate / ADHD",
        testQuote2: "\"The clear typography and lack of forced animations make this the most readable site I've visited today.\"",
        testAuthor2: "— Marcus T., Dyslexia Advocate",
        tagTech: "// 04 — Tech",
        techTitle: "How This Was Built",
        tech1Title: "IntersectionObserver:",
        tech1Desc: "Powers the scroll-aware navigation tracking for lower overhead than scroll listeners.",
        tech2Title: "JSON Dictionary:",
        tech2Desc: "Provides instant client-side localization without page reloads.",
        tech3Title: "Semantic HTML:",
        tech3Desc: "Uses native details and summary for accessible, JS-free accordions.",
        tech4Title: "CSS Custom Properties:",
        tech4Desc: "Supports seamless dark mode switching and respects system preferences.",
        tagFaq: "// 05 — FAQ",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "Is this built with a framework?",
        faqA1: "No. It uses strictly vanilla HTML, CSS, and JavaScript for maximum performance and zero dependency overhead.",
        faqQ2: "How does the language toggle work?",
        faqA2: "It leverages a simple JavaScript dictionary mapped to data attributes in the HTML. It swaps text instantly without making any network requests.",
        faqQ3: "What about users who prefer less motion?",
        faqA3: "The site respects the 'prefers-reduced-motion' media query, automatically disabling scroll animations for those who need it.",
        faqQ4: "Are these custom fonts accessible?",
        faqA4: "Yes. We use Atkinson Hyperlegible, a font specifically designed by the Braille Institute to differentiate common ambiguous characters.",
        footerText: "© 2026 Cognitive Accessibility Demo. All rights reserved.",
        footerNote: "Code delivered to GitHub — commented, documented, handoff-ready"
    },
    es: {
        pageTitle: "Demo de Accesibilidad Cognitiva",
        navHome: "Inicio",
        navAbout: "Acerca de",
        navLabs: "Laboratorios",
        navTestimonials: "Testimonios",
        navTech: "Tecnología",
        navFaq: "Preguntas Frecuentes",
        heroTitle: "Claridad a través del Diseño",
        heroSubtitle: "Experimenta un espacio digital donde la carga cognitiva se minimiza y el control del usuario es primordial. Fluido, ultrarrápido e inclusivo.",
        heroSubtitle2: "Una demostración de navegación de desplazamiento largo construida para usuarios neurodivergentes — con seguimiento activo de secciones, cambio bilingüe instantáneo y control total del usuario.",
        heroCta: "Explorar el Concepto",
        accordionLabel: "Expanda para leer más — o colapse lo que no necesita",
        tagAbout: "// 01 — Acerca de",
        aboutTitle: "Acerca de la Iniciativa",
        aboutP1: "Nuestra misión es construir entornos digitales que respeten la atención del usuario. Al aprovechar elementos semánticos nativos de HTML como details y summary, creamos fragmentos de información manejables.",
        aboutP2: "Esto evita la sobrecarga visual y empodera a los usuarios para revelar contenido solo cuando están listos para procesarlo.",
        tagLabs: "// 02 — Laboratorios",
        labsTitle: "Laboratorios de Investigación",
        labsCard1Title: "Tipografía",
        labsCard1Desc: "Fuentes de alto contraste y gran legibilidad reducen la fatiga visual.",
        labsCard2Title: "Diseño Espacial",
        labsCard2Desc: "El espacio en blanco generoso proporciona el respiro visual necesario.",
        labsCard3Title: "Predictibilidad",
        labsCard3Desc: "La navegación consistente y la retención de estado generan confianza.",
        tagTest: "// 03 — Voces",
        testTitle: "Voces de Usuarios",
        testQuote1: "\"Finalmente, un sitio web que no me bombardea con todo a la vez. El cambio de idioma instantáneo es como magia.\"",
        testAuthor1: "— Elena R., Defensora de la Accesibilidad / TDAH",
        testQuote2: "\"La tipografía clara y la falta de animaciones forzadas hacen que este sea el sitio más legible que he visitado hoy.\"",
        testAuthor2: "— Marcus T., Defensor de la Dislexia",
        tagTech: "// 04 — Tecnología",
        techTitle: "Cómo se Construyó Esto",
        tech1Title: "IntersectionObserver:",
        tech1Desc: "Impulsa el seguimiento de navegación consciente del desplazamiento para una menor sobrecarga que los listeners de desplazamiento.",
        tech2Title: "Diccionario JSON:",
        tech2Desc: "Proporciona localización instantánea en el lado del cliente sin recargas de página.",
        tech3Title: "HTML Semántico:",
        tech3Desc: "Utiliza details y summary nativos para acordeones accesibles y sin JS.",
        tech4Title: "Propiedades Personalizadas CSS:",
        tech4Desc: "Soporta el cambio a modo oscuro de forma fluida y respeta las preferencias del sistema.",
        tagFaq: "// 05 — FAQ",
        faqTitle: "Preguntas Frecuentes",
        faqQ1: "¿Está construido con un framework?",
        faqA1: "No. Utiliza estrictamente HTML, CSS y JavaScript puros para un rendimiento máximo y sin dependencias.",
        faqQ2: "¿Cómo funciona el cambio de idioma?",
        faqA2: "Aprovecha un simple diccionario de JavaScript mapeado a atributos de datos en el HTML. Cambia el texto al instante sin realizar solicitudes de red. Esta respuesta ha sido traducida automáticamente para demostrar el sistema.",
        faqQ3: "¿Qué pasa con los usuarios que prefieren menos movimiento?",
        faqA3: "El sitio respeta la consulta de medios 'prefers-reduced-motion', desactivando automáticamente las animaciones de desplazamiento para quienes lo necesitan.",
        faqQ4: "¿Son accesibles estas fuentes personalizadas?",
        faqA4: "Sí. Utilizamos Atkinson Hyperlegible, una fuente diseñada específicamente por el Instituto Braille para diferenciar caracteres ambiguos comunes.",
        footerText: "© 2026 Demo de Accesibilidad Cognitiva. Todos los derechos reservados.",
        footerNote: "Código entregado a GitHub — comentado, documentado, listo para su entrega"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Indicator & Estimate
    const progressBar = document.getElementById('progress-bar');
    const readPercent = document.getElementById('read-percent');
    const readMins = document.getElementById('read-mins');
    
    // Estimate reading time based on total text length
    const updateReadingTime = () => {
        const text = document.body.innerText;
        const wpm = 200;
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wpm);
        if(readMins) {
            readMins.textContent = `${minutes} min read`;
        }
    };
    updateReadingTime();

    const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        let scrollPercentage = 0;
        if (scrollHeight > clientHeight) {
            scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        }
        scrollPercentage = Math.min(100, Math.max(0, scrollPercentage));
        
        requestAnimationFrame(() => {
            progressBar.style.width = scrollPercentage + '%';
            if (readPercent) {
                readPercent.textContent = Math.round(scrollPercentage) + '%';
            }
        });
    };
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress(); // Initial call

    // 2. IntersectionObserver for Scroll Tracking (Active Nav Link)
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const navObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 40% of the section is visible
    };
    
    const navObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);
    sections.forEach(sec => navObserver.observe(sec));

    // 2b. IntersectionObserver for Scroll Fade-in Animations
    const fadeObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const fadeObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };
    
    if (!prefersReducedMotion) {
        const fadeObserver = new IntersectionObserver(fadeObserverCallback, fadeObserverOptions);
        document.querySelectorAll('.fade-section').forEach(sec => fadeObserver.observe(sec));
    } else {
        document.querySelectorAll('.fade-section').forEach(sec => sec.classList.add('visible'));
    }

    // 3. Instant Bilingual Switcher
    let currentLang = 'en';
    const langToggle = document.getElementById('lang-toggle');
    const langOpts = langToggle.querySelectorAll('.lang-opt');
    const mainContent = document.getElementById('main-content');
    
    const setLanguage = (lang) => {
        if (currentLang === lang && document.documentElement.lang) return; // already set
        
        currentLang = lang;
        const dict = translations[lang];
        
        // Save current scroll position
        const currentScrollY = window.scrollY;

        // Apply brief fade transition
        mainContent.classList.add('lang-switching');
        
        setTimeout(() => {
            // Update all data-i18n elements
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    if (el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'A' || el.tagName === 'DIV' || el.tagName === 'SPAN' || el.tagName === 'FOOTER' || el.tagName === 'STRONG') {
                        el.textContent = dict[key];
                    }
                }
            });

            // Update toggle pill visual state
            langOpts.forEach(opt => {
                if (opt.getAttribute('data-lang') === lang) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
            
            document.documentElement.lang = lang;
            
            // Restore scroll position precisely
            window.scrollTo(0, currentScrollY);
            updateReadingTime();
            
            mainContent.classList.remove('lang-switching');
        }, 150); // 150ms timeout matches CSS transition
    };
    
    langToggle.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('lang-opt')) {
            const newLang = target.getAttribute('data-lang');
            setLanguage(newLang);
        } else {
            // Clicked the pill background, toggle to the other language
            const newLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(newLang);
        }
    });
    
    langToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(newLang);
        }
    });

    // 4. Dark Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
        }
    });
});

