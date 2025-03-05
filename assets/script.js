// scroll suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// click da seta down
const setaDown = document.querySelector('.seta-down a');
    if (setaDown) {
        setaDown.addEventListener('click', (event) => {
            event.preventDefault();
            const conhecimentosSection = document.getElementById('conhecimentos');
            if (conhecimentosSection) {
                conhecimentosSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
// click na nav
const headerLinks = document.querySelectorAll('.menu-desktop a');
headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // desce suave
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
