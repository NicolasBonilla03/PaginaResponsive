function seccion(sectionId) {
    const section = document.getElementById(sectionId);
    const desface = -170; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + desface;

    window.scrollTo({ top: y, behavior: 'smooth' });
}