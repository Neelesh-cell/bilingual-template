const translations = {
    en: {
        pageTitle: "Cognitive Accessibility Demo",
        navHome: "Home",
        navAbout: "About",
        navLabs: "Labs",
        navTestimonials: "Testimonials",
        navFaq: "FAQ",
        heroTitle: "Clarity Through Design",
        heroSubtitle: "Experience a digital space where cognitive load is minimized and user control is paramount. Seamless, lightning-fast, and inclusive.",
        heroCta: "Explore the Concept",
        aboutTitle: "About the Initiative",
        aboutP1: "Our mission is to build digital environments that respect the user's attention. By leveraging native HTML semantic elements like details and summary, we create manageable chunks of information.",
        aboutP2: "This prevents visual overwhelm and empowers users to reveal content only when they are ready to process it.",
        labsTitle: "Research Labs",
        labsCard1Title: "Typography",
        labsCard1Desc: "High-contrast, highly legible fonts reduce reading fatigue.",
        labsCard2Title: "Spatial Layout",
        labsCard2Desc: "Generous whitespace provides necessary visual breathing room.",
        labsCard3Title: "Predictability",
        labsCard3Desc: "Consistent navigation and state retention build trust.",
        testTitle: "User Voices",
        testQuote1: "\"Finally, a website that doesn't bombard me with everything all at once. The instant language switch is like magic.\"",
        testAuthor1: "— Elena R., Accessibility Advocate",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "Is this built with a framework?",
        faqA1: "No. It uses strictly vanilla HTML, CSS, and JavaScript for maximum performance and zero dependency overhead.",
        faqQ2: "How does the language toggle work?",
        faqA2: "It leverages a simple JavaScript dictionary mapped to data attributes in the HTML. It swaps text instantly without making any network requests.",
        footerText: "© 2026 Cognitive Accessibility Demo. All rights reserved."
    },
    es: {
        pageTitle: "Demo de Accesibilidad Cognitiva",
        navHome: "Inicio",
        navAbout: "Acerca de",
        navLabs: "Laboratorios",
        navTestimonials: "Testimonios",
        navFaq: "Preguntas Frecuentes",
        heroTitle: "Claridad a través del Diseño",
        heroSubtitle: "Experimenta un espacio digital donde la carga cognitiva se minimiza y el control del usuario es primordial. Fluido, ultrarrápido e inclusivo.",
        heroCta: "Explorar el Concepto",
        aboutTitle: "Acerca de la Iniciativa",
        aboutP1: "Nuestra misión es construir entornos digitales que respeten la atención del usuario. Al aprovechar elementos semánticos nativos de HTML como details y summary, creamos fragmentos de información manejables.",
        aboutP2: "Esto evita la sobrecarga visual y empodera a los usuarios para revelar contenido solo cuando están listos para procesarlo.",
        labsTitle: "Laboratorios de Investigación",
        labsCard1Title: "Tipografía",
        labsCard1Desc: "Fuentes de alto contraste y gran legibilidad reducen la fatiga visual.",
        labsCard2Title: "Diseño Espacial",
        labsCard2Desc: "El espacio en blanco generoso proporciona el respiro visual necesario.",
        labsCard3Title: "Predictibilidad",
        labsCard3Desc: "La navegación consistente y la retención de estado generan confianza.",
        testTitle: "Voces de Usuarios",
        testQuote1: "\"Finalmente, un sitio web que no me bombardea con todo a la vez. El cambio de idioma instantáneo es como magia.\"",
        testAuthor1: "— Elena R., Defensora de la Accesibilidad",
        faqTitle: "Preguntas Frecuentes",
        faqQ1: "¿Está construido con un framework?",
        faqA1: "No. Utiliza estrictamente HTML, CSS y JavaScript puros para un rendimiento máximo y sin dependencias.",
        faqQ2: "¿Cómo funciona el cambio de idioma?",
        faqA2: "Aprovecha un simple diccionario de JavaScript mapeado a atributos de datos en el HTML. Cambia el texto al instante sin realizar solicitudes de red.",
        footerText: "© 2026 Demo de Accesibilidad Cognitiva. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Indicator
    const progressBar = document.getElementById('progress-bar');
    
    const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progressBar.style.width = scrollPercentage + '%';
    };
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress(); // Initial call

    // 2. IntersectionObserver for Scroll Tracking (Active Nav Link)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section crosses the middle of the viewport
        threshold: 0
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active class from all
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => observer.observe(sec));

    // 3. Instant Bilingual Switcher
    let currentLang = 'en';
    const langBtn = document.getElementById('lang-toggle');
    const langTexts = langBtn.querySelectorAll('.lang-text');
    
    const setLanguage = (lang) => {
        currentLang = lang;
        const dict = translations[lang];
        
        // Update all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Update button visual state
        langTexts.forEach(span => {
            if (span.textContent.toLowerCase() === lang) {
                span.classList.remove('text-dim');
            } else {
                span.classList.add('text-dim');
            }
        });
        
        // Update document lang attribute
        document.documentElement.lang = lang;
    };
    
    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });
});
